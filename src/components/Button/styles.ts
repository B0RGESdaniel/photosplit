import styled from "styled-components/native";
import { ButtonProps } from "./index";

export const ButtonContainer = styled.TouchableOpacity<ButtonProps>`
    align-items: center;
    flex-direction: row;
    max-height: 50px;
    gap: ${props => (props.icon && props.text) ? '8px' : ''};
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    padding: ${props => {
        if (props.text && props.icon) return '11px 20px';
        if (props.text) return '11px 24px';
        if (props.icon) return '11px 11px';
    }};
    border-radius: 8px;
`;

export const ButtonText = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 18px;
`;