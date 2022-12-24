/* eslint-disable prettier/prettier */
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  width: 100%;
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.grey_light};
  border-radius: 5px;
  padding: ${RFValue(20)}px ${RFValue(20)}px;
`;

export const QuizContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const QuizStatus = styled.View`
  width: 24px;
  height: 24px;
  margin-right: 18px;
  border-radius: 12px;
  background-color: ${({ theme, isCompleted, userScore }) =>
    isCompleted && userScore === 0
      ? theme.colors.attention
      : isCompleted && userScore > 0
      ? theme.colors.success
      : theme.colors.white};
`;

export const WrapperPointsContainer = styled.View`

`;

export const QuizText = styled.Text`
  font-size: ${RFValue(14)}px;
  text-align: right;
  color: #000;
`;
