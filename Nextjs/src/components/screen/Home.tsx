import PageResponsive from './common/PageResponsive';
import PageTemplate from './common/PageTemplate';
import React from 'react';
import { RootStackNavigationProps } from '../navigation/RootStackNavigator';
import { Text } from 'react-native';
import styled from 'styled-components/native';

interface Props {
  navigation: RootStackNavigationProps<'Home'>;
}

function Home(): React.ReactElement {
  return (
    <PageResponsive>
      <PageTemplate>
        <PageTemplate.Main>
          <Text>여기가123 메인화면 HITHERE</Text>
        </PageTemplate.Main>
        <PageTemplate.Right>
          <Text>여기가 오른손잡이HITHERE</Text>
        </PageTemplate.Right>
      </PageTemplate>
    </PageResponsive>
  );
}

export default Home;
