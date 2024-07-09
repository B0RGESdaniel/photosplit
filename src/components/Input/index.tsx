import * as S from './styles'
import { TextInputProps } from 'react-native';

export type InputProps = TextInputProps & {
    label?: string;
    size?: 'sm' | 'lg'; 
}

export function Input({ label, size = 'lg', ...rest }: InputProps) {
    return (
        <S.Container>
            { label && <S.Label size={size}>{label}</S.Label> }
            <S.InputField
             {...rest}
             size={size}
             placeholderTextColor={'#2E2C2F'}
            />
        </S.Container>
    )
}