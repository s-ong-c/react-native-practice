import React, { ReactElement, useState } from 'react';
import {
  array,
  boolean,
  object,
  text,
  withKnobs,
} from '@storybook/addon-knobs';

import Button from '../../src/Button';
import { ContainerDeco } from '../../storybook/decorators';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  background-color: transparent;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 28px;
  padding-top: 80px;

  flex-direction: column;
`;

function Default(): React.ReactElement {
  const [facebookLoading, setFacebookLoading] = useState<boolean>(false);
  const [googleLoading, setGoogleLoading] = useState<boolean>(false);

  const buttonText = text('data', 'text');
  return (
    <Container>
      <Button
        isLoading={false}
        text="😀 😎 👍 💯"
        onPress={action('Clicked')}
      />
      <Button
        style={{
          marginVertical: 40,
        }}
        isDisabled={true}
        text={buttonText}
      />
      <Button
        isLoading={googleLoading}
        indicatorColor="#023059"
        style={{
          backgroundColor: '#ccc',
        }}
        onPress={(): void => {
          setGoogleLoading(true);
          const timeout = setTimeout(() => {
            setGoogleLoading(false);
            clearTimeout(timeout);
          }, 2000);
        }}
        text="GOOGLE SIGN IN"
      />
      <Button
        testID="btnFacebook"
        indicatorColor="#023059"
        isLoading={facebookLoading}
        style={{
          backgroundColor: '#ccc',
          borderWidth: 0.5,
          borderRadius: 0,
        }}
        onPress={(): void => {
          setFacebookLoading(true);
          const timeout = setTimeout(() => {
            setFacebookLoading(false);
            clearTimeout(timeout);
          }, 2000);
        }}
        text="FACEBOOK SIGN IN"
      />
    </Container>
  );
}

/**
 * Below are stories for web
 */
export default {
  title: 'Button1',
  decorators: [withKnobs],
};

// export const toStorybook = (): ReactElement => <Default />;

// toStorybook.story = {
//   name: 'default1',
//   decorators: [withKnobs],
// };

/**
 * Below are stories for app
 */
storiesOf('Button', module)
  .addDecorator(ContainerDeco)
  .add('default1', () => {
    const buttonText = text('data', 'text');
    return (
      <Container>
        <Button
          isLoading={false}
          text="😀 😎 👍 💯"
          onPress={action('Clicked')}
        />
        <Button
          style={{
            marginVertical: 40,
          }}
          isDisabled={true}
          text={buttonText}
        />
      </Container>
    );
  });
