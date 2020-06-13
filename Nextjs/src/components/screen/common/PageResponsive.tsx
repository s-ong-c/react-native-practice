import React from 'react';
import styled from 'styled-components/native';
import { mediaQuery } from '../../../utils/styles/media';

export type PageResponsiveProps = {
  className?: string;
  children: React.ReactNode;
};

function PageResponsive({ className, children }: PageResponsiveProps) {
  return <Block className={className}>{children}</Block>;
}

const Block = styled.View`
  width: 1728px;
  height: 100%;
  background-color: ${({ theme }): string => theme.background};
  /* margin-left: auto;
  margin-right: auto; */
  ${mediaQuery(1919)} {
    width: 1376px;
  }
  ${mediaQuery(1440)} {
    width: 1280px;
  }
  ${mediaQuery(1312)} {
    width: 912px;
  }
  ${mediaQuery(944)} {
    width: calc(100% - 32px);
  }
  ${mediaQuery(767)} {
    width: calc(100% - 32px);
  }
`;

export default PageResponsive;
