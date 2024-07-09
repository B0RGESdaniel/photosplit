import { useState } from 'react';
import { Text } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign'

import * as S from './styles';
import { Input } from '../../components/Input';
import { NumberInput } from '../../components/NumberInput';
import { Button } from '../../components/Button';

export function ShareItens() {
    const [qtdItem, setQtdItem] = useState('');
    const [valorItem, setValorItem] = useState('');

    return (
        <S.Container>
            <S.Header>
                <S.Title>Confira os valores e indique os participantes para cada item</S.Title>
            </S.Header>
            <S.PickContainer>
                <S.ItemCount>
                    Item <S.NumberItemCount>1</S.NumberItemCount> de <S.NumberItemCount>10</S.NumberItemCount>
                </S.ItemCount>
                <S.PickInputs>
                    <Input 
                     label='Descrição'
                     size="sm"
                    />
                    <NumberInput
                     size="sm"
                     typeOfInput='qtd' 
                     label='Qtd'
                     valueState={qtdItem}
                     setValueState={setQtdItem}
                    />
                    <NumberInput
                     size="sm"
                     typeOfInput='value'
                     label='Valor Unit'
                     valueState={valorItem}
                     setValueState={setValorItem}
                    />
                    <Button
                     icon={<AntDesign name="arrowright" size={22} color="#E0E0E0" />}
                    />
                </S.PickInputs>
                <S.PickExtras>

                </S.PickExtras>
            </S.PickContainer>
        </S.Container>
    )
}