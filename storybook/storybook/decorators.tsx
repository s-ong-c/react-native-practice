import React from 'react';
import { addDecorator } from '@storybook/react-native';
import styled from 'styled-components/native';
import { withKnobs } from '@storybook/addon-knobs';

export const ContainerDeco = (storyFn: any): React.ReactElement => (
  <Container>{storyFn()}</Container>
);

const Container = styled.View`
  flex: 1;
  background-color: #f5fcff;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const setupGlobalDecorators = () => {
  console.log('setupGlobalDecorators');
  console.log(withKnobs);
  //* the order is important, the decoratos wrap from bottom to top
  addDecorator(withKnobs);
};
