import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.GRAY_500};
    padding: 16px;
`;

export const Title = styled.Text`
    width: 90%;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    color: ${({ theme }) => theme.COLORS.GRAY_100};;
    font-size: 20px;
    text-align: center;
`;

export const Header = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 16px;
    margin-top: 24px;
`;

export const PickContainer = styled.View`
    border: 2px solid ${({ theme }) => theme.COLORS.ORANGE};
    width: 100%;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 10px 12px;
    height: 200px;
    border-radius: 8px;
    gap: 10px;
`;
export const PickInputs = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: flex-end;
    gap: 6px;
`;
export const PickExtras = styled.View``;

export const ItemCount = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 18px;
`;

export const NumberItemCount = styled(ItemCount)`
    color: ${({ theme }) => theme.COLORS.ORANGE};
`;