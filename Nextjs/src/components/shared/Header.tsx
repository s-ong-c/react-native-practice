import * as React from 'react';

import HeaderLogo from './HeaderLogo';
import { View } from 'react-native';
import { breakpoints } from '../../utils/styles/responsive';
import styled from 'styled-components/native';

export const TransparentButton = styled.View``;

export const HeaderBlock = styled.View`
  z-index: 20;
  width: 100%;
`;

const Wrapper = styled.View`
  /* width: ${breakpoints.xlarge}; */
  margin: 0 auto;
  padding-left: 16px;
  padding-right: 16px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Right = styled.View`
  flex-direction: row;
`;
const Header: React.FC = ({ children }) => {
  return (
    <>
      <HeaderBlock data-testid="Header">
        <Wrapper>
          <View>{children}</View>
          <Right>
            <HeaderLogo logoTitle={'about'} />
            <View>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              ></svg>
            </View>
          </Right>
        </Wrapper>
      </HeaderBlock>
    </>
  );
};

export default Header;
