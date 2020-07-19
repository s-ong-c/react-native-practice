import PageResponsive from './common/PageResponsive';
import PageTemplate from './common/PageTemplate';
import React from 'react';
import { RootStackNavigationProps } from '../navigation/RootStackNavigator';
import { Text } from 'react-native';
import { User } from '../../types';
import styled from 'styled-components/native';
import { useThemeContext } from '../../providers/ThemeProvider';
const Container = styled.View`
  flex: 1;
  width: 100%;
  align-self: stretch;
  overflow: scroll;
  background-color: ${({ theme }): string => theme.background};

  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const ContentWrapper = styled.View`
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
`;

const ButtonWrapper = styled.View`
  position: absolute;
  flex-direction: column;
  bottom: 40px;
  width: 85%;
  align-self: center;
`;

const StyledText = styled.Text`
  font-size: 18px;
  line-height: 27px;
  color: ${({ theme }): string => theme.fontColor};
`;

interface Props {
  navigation: RootStackNavigationProps<'Home'>;
}

function Home(props: Props): React.ReactElement {
  const { changeThemeType } = useThemeContext();

  return (
    <PageResponsive>
      <PageTemplate>
        <PageTemplate.Main>
          <Text>여기가123 메인화면 HITHERE</Text>
          {/* <Container></Container> */}
        </PageTemplate.Main>
        <PageTemplate.Right>
          <Text>여기가 오른손잡이HITHERE</Text>
          {/* <Container></Container> */}
        </PageTemplate.Right>
      </PageTemplate>
    </PageResponsive>
  );
}

export default Home;
