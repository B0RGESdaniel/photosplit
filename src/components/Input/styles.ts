import styled from "styled-components/native";

export const Container = styled.TextInput`
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
    width: 300px;
    height: 50px;
    padding: 8px 12px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: 16px;

    border: 2px solid ${({ theme }) => theme.COLORS.GRAY_300};
    border-radius: 8px;
`;