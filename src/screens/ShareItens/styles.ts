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
    margin-top: 10px;
`;

export const PickContainer = styled.View`
    border: 2px solid ${({ theme }) => theme.COLORS.ORANGE};
    display: flex;
    width: 95%;
    padding: 16px 14px;
    margin: 0 6px;
    border-radius: 8px;
    gap: 10px;
`;

export const PickInputs = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 8px;
    margin-top: 4px;
`;

export const InputSection = styled.View`
    flex-direction: column;
    gap: 6px;
`;

export const PickExtrasContent = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 2px;
`;

export const ButtonSection = styled.View`
    justify-content: space-between;
    flex-direction: row;
    gap: 6px;
`;

export const CheckboxContainer = styled.View`
    flex-direction: column;
    gap: 5px;
    flex-grow: 1;
    /* border: 1px solid blue; */
`;

export const CheckboxContent = styled.View`
    flex-direction: row;
    gap: 8px;
    align-items: center;
    justify-content: flex-start;
    min-height: 45px;
`;

export const CheckboxLabel = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    color: ${({ theme }) => theme.COLORS.ORANGE};
    font-size: 13px;
    /* padding-left: 2px; */
`;

export const ItemCount = styled.Text`
    align-self: flex-start;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 18px;
`;

export const NumberItemCount = styled(ItemCount)`
    color: ${({ theme }) => theme.COLORS.ORANGE};
`;

export const SelectAllContainer = styled.View`
    width: 90%;
    padding: 24px 2px;
`;

export const ScrollParticipants = styled.ScrollView`
    width: 90%;
`;

export const ParticipantContainer = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 18px;
    border-bottom-width: 2px;
    border-color: ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const ParticipantName = styled.Text`
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    flex-grow: 1;
    font-size: 16px;
`;

export const QtdCount = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;
    height: 50px;
`;
export const QtdButton = styled.TouchableOpacity`
    width: 27px;
    height: 27px;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    border-radius: 8px;
    flex-direction: row;
`;
// export const QtdButtonText = styled.Text``;
export const QtdText = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 20px;
    text-align: center;
`;

export const QtdCountText = styled(QtdText)`
    font-size: 22px;
`;