import { TextInputProps } from 'react-native'
import * as S from './styles'

export type InputProps = {
    label?: string;
    size?: 'sm' | 'lg'; 
}

export function Input({ label, size = 'lg' }: InputProps) {
    /*
    function getFakeNamePlaceholder() {
        const fakeNames = [
            'Fulano',
            'Sicrano',
            'Beltrano',
        ]

        return fakeNames[Math.floor(Math.random()*fakeNames.length)]
    }
    */

    return (
        <S.Container>
            { label && <S.Label size={size}>{label}</S.Label> }
            <S.InputField
             size={size}
            //  placeholder={getFakeNamePlaceholder()}
             placeholderTextColor={'#2E2C2F'}
            />
        </S.Container>
    )
}