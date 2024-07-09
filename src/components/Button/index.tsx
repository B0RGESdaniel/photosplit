import { ReactNode } from 'react';
import { TouchableOpacityProps } from 'react-native';

import * as S from './styles'
import { AtLeastOne } from '../../helpers/types';

type FullButtonProps = TouchableOpacityProps & {
    text: string;
    icon: ReactNode;
    onPressFunction: () => void;
}

export type ButtonProps = AtLeastOne<FullButtonProps>

export function Button({ text, icon, onPressFunction }: ButtonProps) {
    return (
        <S.ButtonContainer
         icon={icon} 
         text={text}
         onPress={onPressFunction}
        >
            { icon && (
                icon
            )}
            { text && <S.ButtonText>{text}</S.ButtonText> }
        </S.ButtonContainer>
    )
}