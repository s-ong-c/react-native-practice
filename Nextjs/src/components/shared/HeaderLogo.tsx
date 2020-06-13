import * as React from 'react';
import { Animated, Text } from 'react-native';
import styled from 'styled-components/native';

const createFallbackTitle = (username: string | null) => {
  if (!username) return null;
  const lastChar = username.slice(-1).toLowerCase();
  if (lastChar === 's') {
    return `${username}' 크리에이터`;
  }
  return `${username}'s 크리에이터`;
};

export const HeaderLogoBlock = styled.View`
  align-items: center;
  justify-content: center;
`;

export interface HeaderLogoProps {
  logoTitle: string;
}

const HeaderLogo: React.FC<HeaderLogoProps> = ({ logoTitle }) => {
  const fadeAnim = new Animated.Value(0);

  return (
    <HeaderLogoBlock>
      <Text style={{ fontSize: 21 }}>{createFallbackTitle(logoTitle)}</Text>
    </HeaderLogoBlock>
  );
};

export default HeaderLogo;
