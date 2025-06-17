import { View, Text, ScrollView, Image } from 'react-native';
import { useState, useEffect } from 'react';
import { fetchUserProfile, User } from '../api/mockApi';

export default function ProfileScreen() {
  const [user, setUser] = useState<User | null>(null);

  const loadProfile = async () => {
    try {
      const data = await fetchUserProfile();
      setUser(data);
    } catch (error) {
    }
  };

  useEffect(() => {
    loadProfile();
  }, []);

  if (!user) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView className="bg-gray-50 flex-1 p-4">
      <View className="items-center mb-8">
        <View className="bg-gray-200 rounded-full p-1 mb-4">
          <Image
            source={{ uri: user.avatar }}
            className="w-24 h-24 rounded-full"
          />
        </View>
        <Text className="text-xl font-bold">{user.name}</Text>
        <Text className="text-gray-500">{user.email}</Text>
      </View>

      <View className="bg-white rounded-xl p-6 mb-6">
        <Text className="text-lg font-semibold mb-4">Personal Information</Text>
        <View className="mb-4">
          <Text className="text-gray-500 text-sm">Phone</Text>
          <Text className="text-gray-800 mt-1">{user.phone}</Text>
        </View>
        <View className="mb-4">
          <Text className="text-gray-500 text-sm">Address</Text>
          <Text className="text-gray-800 mt-1">{user.address}</Text>
        </View>
        <View>
          <Text className="text-gray-500 text-sm">Member Since</Text>
          <Text className="text-gray-800 mt-1">
            {new Date(user.memberSince).toLocaleDateString()}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
