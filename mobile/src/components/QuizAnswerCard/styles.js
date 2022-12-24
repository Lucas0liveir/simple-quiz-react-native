/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  margin-bottom: 15px;
  border-radius: 5px;
  padding: ${RFValue(15)}px;
  background-color: ${({ theme, isCompleted, userScore }) =>
    isCompleted && userScore === 0
      ? theme.colors.attention
      : isCompleted && userScore > 0
      ? theme.colors.success
      : theme.colors.grey_light};
`;

export const QuizAnswerText = styled.Text`
  font-size: ${RFValue(12)}px;
  text-align: center;
  color: #000;
`;
