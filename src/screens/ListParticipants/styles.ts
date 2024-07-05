import { StyleSheet, Text } from "react-native";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const Title = styled.Text`
    width: 80%;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    color: ${({ theme }) => theme.COLORS.GRAY_100};;
    font-size: 22px;
    text-align: center;
`;

export const Header = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 16px;
    margin-top: 24px;
`;

export const InputSection = styled.ScrollView`
    margin-top: 24px;
    width: 100%;
`;

export const Footer = styled.View`
    align-items: center;
    justify-content: center;

    margin: 30px 0;
`;

export const styles = StyleSheet.create({
    inputScrollView: {
        alignItems: 'center',
        gap: 12,
    }
})
