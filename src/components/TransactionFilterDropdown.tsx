import { useState } from 'react';
import { View, Text, Pressable, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const filterOptions = [
  { label: 'All', value: 'all', icon: 'filter-list' },
  { label: 'Credit', value: 'credit', icon: 'call-received' },
  { label: 'Debit', value: 'debit', icon: 'call-made' }
];

export default function TransactionFilterDropdown({
                                                    selectedFilter,
                                                    onSelectFilter
                                                  }: {
  selectedFilter: string;
  onSelectFilter: (filter: 'all' | 'credit' | 'debit') => void;
}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Pressable
        className="bg-gray-100 rounded-lg px-3 py-2 flex-row items-center ml-2"
        onPress={() => setShowModal(true)}
      >
        <Icon name="filter-list" size={20} color="#6b7280" />
      </Pressable>

      <Modal
        transparent
        visible={showModal}
        animationType="fade"
        onRequestClose={() => setShowModal(false)}
      >
        <View className="flex-1 bg-black/50 justify-center items-center p-4">
          <View className="bg-white rounded-lg w-full max-w-xs p-4">
            <View className="flex-row justify-between items-center mb-4">
              <Text className="font-medium text-lg">Filter Transactions</Text>
              <Pressable onPress={() => setShowModal(false)}>
                <Icon name="close" size={24} color="#6b7280" />
              </Pressable>
            </View>

            {filterOptions.map(option => (
              <Pressable
                key={option.value}
                className={`py-3 px-2 rounded-lg flex-row items-center ${
                  selectedFilter === option.value ? 'bg-indigo-50' : ''
                }`}
                onPress={() => {
                  onSelectFilter(option.value as 'all' | 'credit' | 'debit');
                  setShowModal(false);
                }}
              >
                <Icon
                  name={option.icon}
                  size={20}
                  color={selectedFilter === option.value ? '#6366f1' : '#6b7280'}
                  style={{ marginRight: 8 }}
                />
                <Text
                  className={`${
                    selectedFilter === option.value
                      ? 'text-indigo-600 font-medium'
                      : 'text-gray-700'
                  }`}
                >
                  {option.label}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>
      </Modal>
    </>
  );
}
