import styled from "styled-components/native";

export const InputField = styled.TextInput<{size: string}>`
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
    min-width: 170px;
    /* max-width: 300px; */
    width: 100%;
    /* box-sizing: border-box; */
    min-height: 45px;
    /* flex: 1; */
    display: inline-flex;
    height: ${props => props.size === 'sm' ? '45px' : '50px' };
    padding: 8px 12px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${props => props.size === 'sm' ? '15px' : '16px' };
    border: 2px solid ${({ theme }) => theme.COLORS.GRAY_300};
    border-radius: 8px;
`;

export const Container = styled.View`
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 6px;
    flex-grow: 1;

`;

export const Label = styled.Text<{size: string}>`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    font-size: ${props => props.size === 'sm' ? '13px' : '15px' };
    padding-left: 2px;
`;