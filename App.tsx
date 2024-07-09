import { StatusBar } from 'react-native';

import { ThemeProvider } from 'styled-components';
import { 
  useFonts, 
  Poppins_600SemiBold, 
  Poppins_700Bold 
} from '@expo-google-fonts/poppins';
import { JetBrainsMono_600SemiBold } from '@expo-google-fonts/jetbrains-mono';

import theme from './src/theme';
import { ShareItens } from './src/screens/ShareItens';
// import { ListParticipants } from './src/screens/ListParticipants';
import { Loading } from './src/components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
    Poppins_700Bold,
    JetBrainsMono_600SemiBold
  })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle={"light-content"}
      />
      { fontsLoaded ? <ShareItens /> : <Loading /> }
    </ThemeProvider>
  )
}
