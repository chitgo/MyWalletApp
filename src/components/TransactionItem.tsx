import { View, Text, Animated, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Transaction } from '../api/mockApi';
import { useRef, useEffect } from 'react';

export default function TransactionItem({ transaction }: { transaction: Transaction }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  const typeConfig = {
    credit: {
      color: '#10b981',
      bgColor: '#ecfdf5',
      icon: 'arrow-downward',
      label: 'CREDIT',
    },
    debit: {
      color: '#ef4444',
      bgColor: '#fef2f2',
      icon: 'arrow-upward',
      label: 'DEBIT',
    },
  };

  const config = typeConfig[transaction.type];

  const categoryColors = {
    food: '#f59e0b',
    shopping: '#3b82f6',
    bills: '#ef4444',
    other: '#6b7280',
  };

  const categoryColor = categoryColors[transaction.category.toLowerCase()] || categoryColors.other;

  return (
    <Animated.View
      style={{ opacity: fadeAnim }}
      className="mb-4 flex-row items-center rounded-2xl bg-white p-4 shadow-md"
    >
      <View
        className="mr-4 h-12 w-12 items-center justify-center rounded-xl"
        style={{ backgroundColor: config.bgColor, borderWidth: 1, borderColor: config.color + '20' }}
      >
        <Icon name={config.icon} size={24} color={config.color} />
      </View>

      <View className="flex-1">
        <View className="flex-row justify-between">
          <View>
            <Text className="font-semibold text-lg text-gray-900">{transaction.description}</Text>
            <View className="flex-row items-center mt-1">
              <View
                className="rounded-full px-2 py-1"
                style={{ backgroundColor: categoryColor + '20' }}
              >
                <Text
                  className="text-xs font-medium capitalize"
                  style={{ color: categoryColor }}
                >
                  {transaction.category}
                </Text>
              </View>
            </View>
          </View>

          <View className="items-end">
            <View
              className="mb-2 rounded-full px-3 py-1"
              style={{ backgroundColor: config.bgColor }}
            >
              <Text className="text-xs font-semibold" style={{ color: config.color }}>
                {config.label}
              </Text>
            </View>

            <Text
              className="font-bold text-lg"
              style={{ color: config.color }}
            >
              {transaction.type === 'credit' ? '+' : '-'}€{transaction.amount.toFixed(2)}
            </Text>
          </View>
        </View>

        {/* Date at bottom */}
        <Text className="mt-2 text-sm text-gray-500">
          {new Date(transaction.date).toLocaleDateString('el-GR', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          })}
        </Text>
      </View>
    </Animated.View>
  );
}
