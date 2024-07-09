import { Dispatch, SetStateAction } from 'react';
import { TextInputProps } from 'react-native'
import * as S from './styles'
import * as IS from '../Input/styles';

export type NumberInputProps = {
    typeOfInput: 'qtd' | 'value';
    size: 'sm' | 'lg';
    valueState: string;
    setValueState: Dispatch<SetStateAction<string>>;
    label?: string;
}

export function NumberInput({
    typeOfInput,
    valueState,
    setValueState,
    label,
    size = 'lg'
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
        <IS.Container>
            { label && <IS.Label size={size}>{label}</IS.Label> }
            <S.Input
             size={size}
             keyboardType={(typeOfInput === 'qtd') ? 'number-pad' : 'decimal-pad'}
             placeholderTextColor={'#2E2C2F'}
             typeOfInput={typeOfInput}
             placeholder='0'
             value={valueState}
             onChangeText={(text) => handleChangeNumber(text)}
            />
        </IS.Container>
    )
}