import { View, Text, ScrollView, Pressable } from 'react-native';

const menuItems = [
  { title: 'Settings', icon: '⚙️' },
  { title: 'Help Center', icon: '❓' },
  { title: 'Invite Friends', icon: '👥' },
  { title: 'About', icon: 'ℹ️' },
  { title: 'Logout', icon: '🚪' },
];

export default function MoreScreen() {
  return (
    <ScrollView className="bg-gray-50 flex-1 p-4">
      <View className="bg-white rounded-xl p-6 mb-6">
        <Text className="text-lg font-semibold mb-4">More Options</Text>
        {menuItems.map((item, index) => (
          <Pressable
            key={item.title}
            className={`py-4 flex-row items-center ${
              index !== menuItems.length - 1 ? 'border-b border-gray-100' : ''
            }`}
          >
            <Text className="text-xl mr-4">{item.icon}</Text>
            <Text className="text-gray-700">{item.title}</Text>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}
