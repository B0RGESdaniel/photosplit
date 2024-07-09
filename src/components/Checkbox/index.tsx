import BouncyCheckbox from 'react-native-bouncy-checkbox'
import * as S from './styles';
import theme from '../../theme';

type CheckboxProps = {
    label?: string;
    size?: 'sm' | 'lg';
}

export function Checkbox({ label, size = 'lg' }: CheckboxProps) {
    return (
        <S.Container>
            <BouncyCheckbox
            size={size === 'sm' ? 24 : 28}
            fillColor={theme.COLORS.ORANGE}
            unFillColor={theme.COLORS.GRAY_600}
            disableText
            iconStyle={{borderRadius: 6}}
            innerIconStyle={{ 
                borderWidth: 1,
                borderRadius: 6,
            }}
            onPress={(isChecked: boolean) => {console.log(isChecked)}}
            bounceEffectIn={1}
            />
            { label && (
                <S.CheckboxText>{label}</S.CheckboxText>
            ) }
        </S.Container>
    )
}