import { useState } from 'react';
import Feather from '@expo/vector-icons/Feather'
import AntDesign from '@expo/vector-icons/AntDesign'
import { Keyboard, Alert } from 'react-native';

import { Input } from '../../components/Input'
import { NumberInput } from '../../components/NumberInput';
import { Button } from '../../components/Button'

import * as S from './styles';
import { styles } from './styles'

export function ListParticipants() {
    const [numberOfParticipants, setNumberOfParticipants] = useState('')
    const [participants, setParticipants] = useState<string[]>([]);
    
    function handleChangeParticipantName(id: number, text: string) {
        const newValues = [...participants];
        newValues[id] = text;
        setParticipants(newValues);
    }

    function handleGenerateParticipantsArray(length: number) {
        if (!length || length <= 1) {
            Alert.alert('Selecione pelo menos duas pessoas')
            return;
        }
        setParticipants(new Array(length).fill(''))
        Keyboard.dismiss();
    }

    return (
        <>
            <S.Container>
                <S.Header>
                    <S.Title>Adicione o nome dos participantes</S.Title>
                </S.Header>
                <S.NPeopleSection>
                <S.NPeopleLabel>Quantas pessoas?</S.NPeopleLabel>
                <NumberInput
                typeOfInput='qtd'
                valueState={numberOfParticipants}
                setValueState={setNumberOfParticipants}
                />
                <Button
                icon={<AntDesign name="arrowright" size={22} color="#E0E0E0" />}
                onPressFunction={() => handleGenerateParticipantsArray(parseInt(numberOfParticipants))}
                />
                </S.NPeopleSection>
                <S.InputSection contentContainerStyle={styles.inputScrollView}>
                { participants.map((item, index) => (
                    <Input 
                        key={index}
                        value={item}
                        defaultValue='0'
                        onChangeText={(text) => handleChangeParticipantName(index, text)}
                    />
                )) }
                </S.InputSection>
                <S.Footer>
                <Button
                 icon={<Feather name="camera" size={20} color="#E0E0E0" />}
                 text="Tirar Foto"
                />
                </S.Footer>
            </S.Container>
        </>
    )
}