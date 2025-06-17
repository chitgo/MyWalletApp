import { View, ScrollView, RefreshControl, Text } from 'react-native';
import { useState, useEffect } from 'react';
import { fetchTransactions } from '../api/mockApi';
import TransactionItem from '../components/TransactionItem';
import SearchInput from '../components/SearchInput';
import TransactionFilterDropdown from '../components/TransactionFilterDropdown';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function TransactionsScreen() {
  const [refreshing, setRefreshing] = useState(false);
  const [filter, setFilter] = useState<'all' | 'credit' | 'debit'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [transactions, setTransactions] = useState<any[]>([]);

  const loadTransactions = async () => {
    try {
      const data = await fetchTransactions(filter);
      setTransactions(data);
    } catch (error) {
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await loadTransactions();
    setRefreshing(false);
  };

  useEffect(() => {
    loadTransactions();
  }, [filter]);

  const filteredTransactions = transactions.filter(tx =>
    tx.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalIncome = filteredTransactions
    .filter(tx => tx.type === 'credit')
    .reduce((sum, tx) => sum + tx.amount, 0);

  const totalExpenses = filteredTransactions
    .filter(tx => tx.type === 'debit')
    .reduce((sum, tx) => sum + tx.amount, 0);

  return (
    <ScrollView
      className="bg-gray-50 flex-1"
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
      }
    >
      <View className="p-4">
        <View className="flex-row mb-4">
          <SearchInput
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Search transactions..."
          />
          <TransactionFilterDropdown
            selectedFilter={filter}
            onSelectFilter={setFilter}
          />
        </View>

        {/* Totals Section */}
        <View className="bg-white rounded-lg p-4 mb-4 flex-row justify-between">
          <View className="items-center">
            <View className="flex-row items-center mb-1">
              <Icon name="call-received" size={16} color="#10b981" />
              <Text className="text-gray-500 ml-1">Income</Text>
            </View>
            <Text className="text-green-500 font-bold">
              €{totalIncome.toFixed(2)}
            </Text>
          </View>

          <View className="items-center">
            <View className="flex-row items-center mb-1">
              <Icon name="call-made" size={16} color="#ef4444" />
              <Text className="text-gray-500 ml-1">Expenses</Text>
            </View>
            <Text className="text-red-500 font-bold">
              €{totalExpenses.toFixed(2)}
            </Text>
          </View>
        </View>

        {filteredTransactions.length === 0 ? (
          <View className="bg-white rounded-lg p-8 items-center justify-center">
            <Text className="text-gray-500">No transactions found</Text>
          </View>
        ) : (
          filteredTransactions.map((tx) => (
            <TransactionItem key={tx.id} transaction={tx} />
          ))
        )}
      </View>
    </ScrollView>
  );
}
