import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Content = styled.View`
  padding: ${RFValue(36)}px ${RFValue(20)}px;
  margin-bottom: 180px;
`;

export const ListQuizes = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingTop: 8,
  },
})``;

export const ContainerSectionText = styled.View`
  margin-top: 22px;
  justify-content: space-between;
  flex-direction: row;
`;

export const CountQuizes = styled.View`
  width: 213px;
  padding: 8px 0;
  flex-direction: row;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.grey_dark};
`;

export const CountTitle = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.white};
`;

export const CountInfo = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  color: #000;
`;

export const TitlePoints = styled.Text`
  font-size: ${RFValue(16)}px;
  color: #000;
`;
