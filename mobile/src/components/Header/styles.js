import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
export const Container = styled.View`
    width: 100%;
    padding: ${RFValue(18)}px 0;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.colors.grey_dark};
`

export const Title = styled.Text`
    font-size: ${({fontSize}) => RFValue(fontSize)}px;
    text-transform: capitalize;
    color: ${({theme}) => theme.colors.white};
`