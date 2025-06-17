import { View, Text } from 'react-native';

interface BalanceCardProps {
  balance: number;
  lastUpdated: string;
}

export default function BalanceCard({ balance, lastUpdated }: BalanceCardProps) {
  return (
    <View className="rounded-xl bg-indigo-600 p-6 shadow-sm">
      <View className="mb-4 flex-row items-start justify-between">
        <Text className="text-sm text-indigo-100">Wallet Balance</Text>
        <Text className="text-xs text-indigo-200">
          Last updated: {new Date(lastUpdated).toLocaleTimeString('el-GR')}
        </Text>
      </View>

      <Text className="mb-1 text-center text-3xl font-bold text-white">
        €{balance.toLocaleString('el-GR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </Text>

      <Text className="text-center text-xs text-indigo-200">Available Balance</Text>
    </View>
  );
}
