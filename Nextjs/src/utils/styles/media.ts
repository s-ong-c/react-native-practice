// export const mediaQuery = (maxWidth: number) => `
//   @media (max-width: ${maxWidth}px)
// `;

// const media = {
//   xxlarge: mediaQuery(1920),
//   xlarge: mediaQuery(1440),
//   large: mediaQuery(1200),
//   medium: mediaQuery(1024),
//   small: mediaQuery(768),
//   xsmall: mediaQuery(375),
//   custom: mediaQuery,
// };

// export default media;
import '@expo/match-media';

import React from 'react';
import { useMediaQuery as _useMediaQuery } from 'react-responsive';

type Props = {
  children: React.ReactElement | null;
};

export type MediaQueryType = {
  xxlarge: boolean;
  xlarge: boolean;
  large: boolean;
  medium: boolean;
  small: boolean;
  xsmall: boolean;
};
// const media = {
//   xxlarge: mediaQuery(1920),
//   xlarge: mediaQuery(1440),
//   large: mediaQuery(1200),
//   medium: mediaQuery(1024),
//   small: mediaQuery(768),
//   xsmall: mediaQuery(375),
//   custom: mediaQuery,

const xxlarge = (): boolean => _useMediaQuery({ minWidth: 1440 });
const isTablet = (): boolean =>
  _useMediaQuery({ minWidth: 1024, maxWidth: 1440 });
const isMobile = (): boolean => _useMediaQuery({ maxWidth: 1024 });

export const useMediaQuery = (): MediaQueryType => {
  return {
    isDesktop: isDesktop(),
    isTablet: isTablet(),
    isMobile: isMobile(),
  };
};

export const Desktop = ({ children }: Props): React.ReactElement | null =>
  isDesktop() ? children : null;
export const Tablet = ({ children }: Props): React.ReactElement | null =>
  isTablet() ? children : null;
export const Mobile = ({ children }: Props): React.ReactElement | null =>
  isMobile() ? children : null;
