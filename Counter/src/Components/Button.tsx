import * as React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.TouchableOpacity``;
const Icon = Styled.Image``;
//const Icon = Styled.Image``;

export interface ButtonProps {
  iconName: string;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({iconName, onPress}) => {
  return (
    <Container onPress={onPress}>
      <Icon
        source={
          iconName === 'plus'
            ? require('../Assets/images/add.png')
            : require('../Assets/images/remove.png')
        }
      />
    </Container>
  );
};

export default Button;
