import { View, Text, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import { fetchCards, Card } from '../api/mockApi';

export default function CardsScreen() {
  const [cards, setCards] = useState<Card[]>([]);

  const loadCards = async () => {
    try {
      const data = await fetchCards();
      setCards(data);
    } catch (error) {
      console.error('Error loading cards:', error);
    }
  };

  useEffect(() => {
    loadCards();
  }, []);

  return (
    <ScrollView className="bg-gray-50 flex-1 p-4">
      {cards.length > 0 && (
        <View
          className="rounded-xl p-6 h-48 justify-between mb-6"
          style={{ backgroundColor: cards[0].color }}
        >
          <View>
            <Text className="text-white text-sm">Main Card</Text>
            <Text className="text-white text-lg mt-2">•••• •••• •••• {cards[0].last4}</Text>
          </View>
          <View className="flex-row justify-between items-center">
            <Text className="text-white">{cards[0].name}</Text>
            <Text className="text-white">{cards[0].expiry}</Text>
          </View>
        </View>
      )}

      <Text className="text-lg font-semibold mt-2 mb-4">Your Cards</Text>
      {cards.map((card) => (
        <View
          key={card.id}
          className="bg-white rounded-lg p-4 mb-3 flex-row justify-between items-center"
        >
          <View>
            <Text className="font-medium">
              {card.type === 'credit' ? 'Credit Card' : 'Debit Card'}
            </Text>
            <Text className="text-gray-500 text-sm mt-1">
              •••• •••• •••• {card.last4}
            </Text>
          </View>
          <Text className="text-indigo-500 font-medium">Details</Text>
        </View>
      ))}
    </ScrollView>
  );
}
