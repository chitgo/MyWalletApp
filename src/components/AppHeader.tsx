import { View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AppHeader() {
  return (
    <View className="mb-4 flex-row items-center justify-between">
      <Text className="text-2xl font-bold text-gray-900">My Wallet</Text>

      <View className="flex-row">
        <Pressable className="ml-4">
          <Ionicons name="notifications-outline" size={24} color="#4f46e5" />
        </Pressable>
        <Pressable className="ml-4">
          <Ionicons name="person-circle-outline" size={24} color="#4f46e5" />
        </Pressable>
      </View>
    </View>
  );
}
