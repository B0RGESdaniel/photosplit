import styled from "styled-components/native";
import { ButtonProps } from "./index";

export const ButtonContainer = styled.TouchableOpacity<ButtonProps>`
    align-items: center;
    flex-direction: row;
    max-height: ${props => props.size === 'lg' ? '50px' : '45px'};
    gap: ${props => (props.icon && props.text) ? '8px' : ''};
    justify-content: center;
    background-color: ${props => props.variant === 'default' ? props.theme.COLORS.ORANGE : props.theme.COLORS.GRAY_600};
    padding: ${props => {
        if (props.text && props.icon) return '11px 20px';
        if (props.text) return '11px 24px';
        if (props.icon) return '11px 11px';
    }};
    border-radius: 8px;
    border: ${props => props.variant === 'default' ? '' : `1px solid ${props.theme.COLORS.ORANGE}`};
`;

export const ButtonText = styled.Text<{ variant: string, size: string }>`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    color: ${props => props.variant === 'default' ? props.theme.COLORS.GRAY_600 : props.theme.COLORS.ORANGE};
    font-size: ${props => props.size === 'lg' ? '18px' : '16px'};
`;