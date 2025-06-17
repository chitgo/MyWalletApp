import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigator } from './src/navigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import './global.css';

export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }} edges={['top']}>
        <NavigationContainer>
          <BottomTabNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
}
