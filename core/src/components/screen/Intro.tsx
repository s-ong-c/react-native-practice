import Button from '../shared/Button';
import { IC_MASK } from '../../utils/Icons';
import React from 'react';
import { RootStackNavigationProps } from '../navigation/RootStackNavigator';
import { User } from '../../types';
import { View } from 'react-native';
import { getString } from '../../../STRINGS';
import styled from 'styled-components/native';
import { useAppContext } from '../../providers/AppProvider';
import { useThemeContext } from '../../providers/ThemeProvider';

const Container = styled.View`
  flex: 1;
  align-self: stretch;
  overflow: scroll;
  background-color: ${({ theme }): string => theme.background};

  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
`;

// const ContentWrapper = styled.View`
//   flex-direction: column;
//   height: 100%;
//   width: 100%;
//   justify-content: flex-start;
//   align-items: center;
// `;

// const ButtonWrapper = styled.View`
//   position: absolute;
//   flex-direction: column;
//   bottom: 40px;
//   width: 85%;
//   align-self: center;
// `;

const StyledText = styled.Text`
  font-size: 18px;
  line-height: 27px;
  color: ${({ theme }): string => theme.fontColor};
`;

interface Props {
  navigation: RootStackNavigationProps<'Intro'>;
}

function Intro(props: Props): React.ReactElement {


  return (
    <Container>
      <StyledText>FIRST MAIN</StyledText>
    </Container>
  );
}

export default Intro;
