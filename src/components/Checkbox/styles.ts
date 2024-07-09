import styled from "styled-components/native";

export const Container = styled.View`
    align-items: center;
    gap: 8px;
    flex-direction: row;
`;

export const CheckboxText = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.SEMIBOLD};
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
`;