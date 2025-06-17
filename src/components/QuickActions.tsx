import { View, Text, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const actions = [
  { id: '1', icon: 'send', title: 'Transfer' },
  { id: '2', icon: 'payment', title: 'Payments' },
  { id: '3', icon: 'qr-code', title: 'QR' },
  { id: '4', icon: 'account-balance-wallet', title: 'Add Money' },
];

export default function QuickActions() {
  return (
    <View className="mt-4 rounded-xl bg-white p-4">
      <Text className="mb-3 font-medium text-gray-500">Quick Actions</Text>

      <View className="flex-row justify-between">
        {actions.map((action) => (
          <Pressable
            key={action.id}
            className="items-center"
          >
            <View className="mb-2 h-14 w-14 items-center justify-center rounded-full bg-indigo-50">
              <Icon
                name={action.icon}
                size={24}
                color="#4f46e5"
              />
            </View>
            <Text className="text-xs text-gray-600">{action.title}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}
