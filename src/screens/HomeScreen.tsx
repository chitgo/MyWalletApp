import {View,Text, ScrollView, RefreshControl } from 'react-native';
import { useState, useEffect } from 'react';
import { fetchWalletBalance, fetchTransactions, refreshWallet } from '../api/mockApi';
import BalanceCard from '../components/BalanceCard';
import TransactionItem from '../components/TransactionItem';
import QuickActions from '../components/QuickActions';
import AppHeader from '../components/AppHeader';
import TransactionFilterDropdown from '../components/TransactionFilterDropdown';

export default function HomeScreen() {
  const [refreshing, setRefreshing] = useState(false);
  const [balance, setBalance] = useState(0);
  const [lastUpdated, setLastUpdated] = useState('');
  const [transactions, setTransactions] = useState<any[]>([]);
  const [filter, setFilter] = useState<'all' | 'credit' | 'debit'>('all');

  const loadData = async () => {
    try {
      const [balanceData, transactionsData] = await Promise.all([
        fetchWalletBalance(),
        fetchTransactions(filter, 10)
      ]);
      setBalance(balanceData.balance);
      setLastUpdated(balanceData.lastUpdated);
      setTransactions(transactionsData);
    } catch (error) {
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    try {
      const { balance, recentTransactions, lastUpdated } = await refreshWallet();
      setBalance(balance);
      setLastUpdated(lastUpdated);
      setTransactions(recentTransactions);
    } catch (error) {
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [filter]);

  return (
    <ScrollView
      className="bg-gray-50 flex-1 p-4"
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
      }
    >
      <AppHeader />
      <BalanceCard balance={balance} lastUpdated={lastUpdated} />
      <QuickActions />

      <View className="mt-6">
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-lg font-semibold">Recent Transactions</Text>
          <TransactionFilterDropdown
            selectedFilter={filter}
            onSelectFilter={setFilter}
          />
        </View>
        {transactions.length === 0 ? (
          <Text className="text-gray-500">No transactions found</Text>
        ) : (
          transactions.map((tx) => (
            <TransactionItem key={tx.id} transaction={tx} />
          ))
        )}
      </View>
    </ScrollView>
  );
}
