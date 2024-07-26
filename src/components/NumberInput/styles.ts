import styled from "styled-components/native";

export const Container = styled.View`
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 6px;
`;

export const Label = styled.Text<{size: string}>`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    font-size: ${props => props.size === 'sm' ? '13px' : '15px' };
    padding-left: 2px;
`;

export const Input = styled.TextInput<{typeOfInput: 'qtd' | 'value', size: string}>`
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
    height: ${props => props.size === 'sm' ? '45px' : '50px' };
    width: ${props => props.typeOfInput === 'qtd' ? '50px' : '100px'};
    padding: ${props => props.size === 'sm' ? '6px 10px' : '6px 12px' };
    color: ${({ theme }) => theme.COLORS.ORANGE};
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${props => props.size === 'sm' ? '18px' : '20px' };
    border: 2px solid ${({ theme }) => theme.COLORS.GRAY_300};
    border-radius: 8px;
    text-align: ${props => props.typeOfInput === 'qtd' ? 'center' : 'default'};
`;