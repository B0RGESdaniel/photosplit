import { useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign'
import Feather from '@expo/vector-icons/Feather'

import * as S from './styles';
import { Input } from '../../components/Input';
import { NumberInput } from '../../components/NumberInput';
import { Button } from '../../components/Button';
import { Checkbox } from '../../components/Checkbox';
import theme from '../../theme';
import { Keyboard } from 'react-native';

export function ShareItens() {
    const [count, setCount] = useState(0);
    const [qtdItem, setQtdItem] = useState('');
    const [valorItem, setValorItem] = useState('');

    const MOCKUP_PARTICIPANTS = [
        { id: 1, nome: 'Bruno Mars', qtd: 0, selected: false },
        { id: 2, nome: 'Ariana Grande', qtd: 0, selected: false },
        { id: 3, nome: 'Sabrina Carpenter', qtd: 0, selected: false },
        { id: 4, nome: 'Anderson .Paak', qtd: 0, selected: false },
        { id: 5, nome: 'Jacob Collier', qtd: 0, selected: false },
        { id: 6, nome: 'Macacos Árticos', qtd: 0, selected: false },
    ]

    return (
        <S.Container>
            <S.Header>
                <S.Title>Selecione os participantes para cada item</S.Title>
            </S.Header>
            <S.PickContainer>
                {/* <S.ItemCount>
                    Item 
                    <S.NumberItemCount> {count} </S.NumberItemCount>
                     de <S.NumberItemCount>10</S.NumberItemCount>
                </S.ItemCount> */}
                <S.InputSection>
                    <Input 
                    //  label='Descrição'
                    size="sm"
                    placeholder='Descrição'
                    />
                    <S.PickInputs>
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
                        <S.CheckboxContainer>
                            <S.CheckboxLabel>Dividir por</S.CheckboxLabel>
                            <S.CheckboxContent>
                                <Checkbox
                                size='sm'
                                label="Valor" 
                                />
                                <Checkbox
                                size='sm'
                                label="Qtd" 
                                />
                            </S.CheckboxContent>
                        </S.CheckboxContainer>
                    </S.PickInputs>
                </S.InputSection>
                    <S.ButtonSection>
                        <Button
                        variant='inverted'
                        size="sm"
                        text='Adicionar item'
                        />
                        <Button
                        size="sm"
                        text='Próximo item'
                        />
                    </S.ButtonSection>
            </S.PickContainer>
            {/* <S.SelectAllContainer>
                <Checkbox
                size='sm'
                label="Selecionar todos" 
                />
            </S.SelectAllContainer> */}
            {/* <S.ScrollParticipants>
                {MOCKUP_PARTICIPANTS.map((part) => (
                    <S.ParticipantContainer key={part.id}>
                        <Checkbox
                         size='lg'
                        />
                        <S.ParticipantName>{part.nome}</S.ParticipantName>
                        <QtdIncrementer />
                    </S.ParticipantContainer>
                ))}
            </S.ScrollParticipants> */}
        </S.Container>
    )
}

function QtdIncrementer() {
    return (
        <S.QtdCount>
            <S.QtdButton>
                <Feather name="minus" size={16} color={theme.COLORS.GRAY_100} />
            </S.QtdButton>
            <S.QtdCountText>0</S.QtdCountText>
            <S.QtdButton>
                <Feather name="plus" size={16} color={theme.COLORS.GRAY_100} />
            </S.QtdButton>
        </S.QtdCount>
    )
} 