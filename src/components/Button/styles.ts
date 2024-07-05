import styled from "styled-components/native";

export const ButtonContainer = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    padding: 11px 28px;
    border-radius: 8px;
`;

export const ButtonText = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 18px;
`;