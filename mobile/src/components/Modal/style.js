/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled.Modal.attrs({
  transparent: true,
})``;

export const ContainerModal = styled.View`
  flex: 1;
  padding: 0 ${RFValue(40)}px;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.2);
`;

export const Divisor = styled.View`
  width: 80%;
  height: 2px;
  align-self: center;
  margin-top: 16px;
  background-color: ${({ theme }) => theme.colors.grey_light};
`;

export const Wrapper = styled.View`
  opacity: 1;
  width: 100%;
  elevation: 3;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const DescriptionWrapper = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 26px;
  margin-bottom: 28px;
  padding: 0 22px;
`;

export const ModalTitle = styled.Text`
  font-size: ${RFValue(22)}px;
  font-weight: 700;
  text-align: center;
  padding-top: 16px;
  color: ${({ theme }) => theme.colors.grey_dark};
`;

export const ModalDescription = styled.Text`
  font-size: ${RFValue(17)}px;
  text-align: center;
  color: ${({ theme }) => theme.colors.grey_dark};
`;

export const ButtonsWrapper = styled.View`
  flex-direction: row;
  padding: 20px 60px;
  margin-bottom: 7px;
  ${({ modalQuiz }) =>
    !modalQuiz
      ? css`
          justify-content: space-between;
        `
      : css`
          justify-content: center;
        `}
`;

export const Start = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.success};
  border-radius: 5px;
  padding: 7px 0;
  width: 100px;
`;

export const Cancel = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 7px 0;
  width: 100px;
`;

export const TextCancel = styled.Text`
  font-size: ${RFValue(14)}px;
  text-align: center;
  color: ${({ theme }) => theme.colors.success};
`;

export const TextStart = styled.Text`
  font-size: ${RFValue(14)}px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;
