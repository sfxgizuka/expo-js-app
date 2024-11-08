import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import "./global.css"
import 'nativewind';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-red-500 text-xl font-bold">Open up App.js to start working on your app!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
