import React, {useState} from 'react';
import Styled from 'styled-components/native';
import Button from '../Components/Button';

const TitleContainer = Styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const TitleText = Styled.Text`
  font-size: 24px;
  `;

const ButtonContainer = Styled.View`
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const CountContainer = Styled.View`
    flex: 2;
    justify-content: center;
    align-items: center;
`;
const CountLabel = Styled.Text`
    font-size: 24px;
    font-weight: bold;
`;

export interface indexProps {
  title: string;
  initValue: number;
}

const Counter: React.FC<indexProps> = ({title, initValue}) => {
  const [count, setCount] = useState<number>(initValue);
  return (
    <>
      <TitleContainer>
        <TitleText>{title}</TitleText>
      </TitleContainer>
      <CountContainer>
        <CountLabel>{count}</CountLabel>
      </CountContainer>
      <ButtonContainer>
        <Button iconName="plus" onPress={() => setCount(count + 1)} />
        <Button iconName="minus" onPress={() => setCount(count - 1)} />
      </ButtonContainer>
    </>
  );
};

export default Counter;
