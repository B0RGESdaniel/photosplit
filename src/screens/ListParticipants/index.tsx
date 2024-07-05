import { useState, useEffect } from 'react';

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import * as S from './styles';
import { styles } from './styles'

export function ListParticipants() {
    const [participantsNames, setParticipantsNames] = useState<string[]>(['']);

    function getFakeNamePlaceholder() {
        const fakeNames = [
            'Fulano',
            'Sicrano',
            'Beltrano',
        ]

        return fakeNames[Math.floor(Math.random()*fakeNames.length)]
    }

    /*
    const handleChangeText = (text: string, index: number) => {
        const newTextInputs = [...participantsNames];
        newTextInputs[index] = text;
        setParticipantsNames(newTextInputs);

        if (text !== '' && index === participantsNames.length - 1) {
            setParticipantsNames([...participantsNames, '']);
        }
    };
    */

    function handleChangeText(text: string, index: number) {
        const newTextInputs = [...participantsNames];
        newTextInputs[index] = text;
        setParticipantsNames(newTextInputs);
    }


    return (
        <S.Container>
            <S.Header>
                <S.Title>Quem vai dividir essa conta com você?</S.Title>
            </S.Header>
            <S.InputSection contentContainerStyle={styles.inputScrollView}>
                { participantsNames.map((text, index) => (
                    <Input 
                     key={index}
                     value={text}
                     onChangeText={(text) => handleChangeText(text, index)}
                     placeholder={getFakeNamePlaceholder()}
                    />
                )) }
            </S.InputSection>
            <S.Footer>
                <Button text="Tirar Foto" />
            </S.Footer>
        </S.Container>
    )
}