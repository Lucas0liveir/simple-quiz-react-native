import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Wrapper = styled.View`
  flex: 2;
  padding: ${RFValue(20)}px ${RFValue(20)}px;
  justify-content: center;
`;

export const Divisor = styled.View`
  width: 80%;
  height: 2px;
  align-self: center;
  margin-top: 30px;
  background-color: ${({theme}) => theme.colors.grey_light};
`

export const CountDown = styled.Text`
  font-size: ${RFValue(28)}px;
  align-self: center;
  margin-top: 15px;
  color: ${({theme}) => theme.colors.grey_dark};
`

export const ContainerQuestion = styled.View``;

export const Question = styled.Text`
  font-size: ${RFValue(22)}px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 36px;
  color: ${({ theme }) => theme.colors.success};
`;

export const ContainerAnswers = styled.View``;

export const ListAnswers = styled.FlatList``;
