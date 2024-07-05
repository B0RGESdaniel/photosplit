import * as S from './styles'

type ButtonProps = {
    text: string;
}

export function Button({ text }: ButtonProps) {
    return (
        <S.ButtonContainer>
            <S.ButtonText>{text}</S.ButtonText>
        </S.ButtonContainer>
    )
}