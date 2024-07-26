import { Dispatch, SetStateAction } from 'react';
import { TextInputProps } from 'react-native';
import * as S from './styles'

export type NumberInputProps = TextInputProps & {
    typeOfInput: 'qtd' | 'value';
    size?: 'sm' | 'lg';
    valueState: string;
    setValueState: Dispatch<SetStateAction<string>>;
    label?: string;
}

export function NumberInput({
    typeOfInput,
    valueState,
    setValueState,
    label,
    size = 'lg',
    ...rest
}: NumberInputProps) {
    function roundTo(num: number, places: number) {
        const factor = 10 ** places;
        return Math.round(num * factor) / factor;
      }
      
    function handleChangeNumber(text: string) {
        if (typeOfInput === 'qtd') {
            const cleanedValue = text.replace(/[^0-9]/g, '');
            const parsedValue = parseInt(cleanedValue)
            if (!isNaN(parsedValue)) {
                setValueState(parsedValue.toString())
                return;
            } else {
                setValueState('')
                return;
            }
        }

        const moneyMask = (value: string) => {
            if (!value) return '0,00'
            value = value.replace('.', '').replace(',', '').replace(/\D/g, '')
          
            const options = { minimumFractionDigits: 2 }
            const result = new Intl.NumberFormat('pt-BR', options).format(
              parseFloat(value) / 100
            )

            return result;
        }

        setValueState(moneyMask(text))
    }

    return (
        <S.Container>
            { label && <S.Label size={size}>{label}</S.Label> }
            <S.Input
             size={size}
             keyboardType={(typeOfInput === 'qtd') ? 'number-pad' : 'decimal-pad'}
             placeholder={(typeOfInput === 'qtd') ? '0' : '0,00'}
             placeholderTextColor={'#2E2C2F'}
             typeOfInput={typeOfInput}
             value={valueState}
             onChangeText={(text) => handleChangeNumber(text)}
             {...rest}
            />
        </S.Container>
    )
}