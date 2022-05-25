import 'react-native-gesture-handler';
import StackNavigation from './assets/Navigator/StackNavigator';
import { Provider as PaperProvider } from 'react-native-paper';
import { View, Text } from 'react-native'
import envs from './Config/env'

export default function App() {
  console.log(envs.api)
  return (
    <PaperProvider>
      <StackNavigation />
    </PaperProvider>

  );
}

