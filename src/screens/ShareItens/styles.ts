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
    width: 90%;
    padding: 16px 14px;
    margin: 0 6px;
    border-radius: 8px;
    gap: 10px;
`;

export const PickInputs = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: flex-end;
    gap: 6px;
    margin-bottom: 8px;
`;
export const PickExtras = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const PickExtrasContent = styled.View`
    flex-direction: row;
    gap: 10px;
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