import { ReactNode } from 'react';
import { TouchableOpacityProps } from 'react-native';

import * as S from './styles'
import { AtLeastOne } from '../../helpers/types';

type FullButtonProps = TouchableOpacityProps & {
    text: string;
    icon: ReactNode;
    variant?: 'default' | 'inverted';
    size?: 'sm' | 'lg';
    onPressFunction: () => void;
}

export type ButtonProps = AtLeastOne<FullButtonProps>

export function Button({ text, icon, onPressFunction, variant = 'default', size = 'lg' }: ButtonProps) {
    return (
        <S.ButtonContainer
         icon={icon} 
         text={text}
         onPress={onPressFunction}
         variant={variant}
         size={size}
        >
            { icon && (
                icon
            )}
            { text && 
             <S.ButtonText 
              variant={variant}
              size={size}
             >
                {text}
             </S.ButtonText> 
            }
        </S.ButtonContainer>
    )
}