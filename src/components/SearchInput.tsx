import { useState } from 'react';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function SearchInput({value, onChangeText, placeholder = 'Search...',}: {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View
      className={`flex-1 flex-row items-center rounded-lg px-3 py-2 bg-gray-100 ${
        isFocused ? 'border-2 border-blue-500' : 'border border-gray-200'
      }`}
    >
      <Icon name="search" size={20} color="#6b7280" />
      <TextInput
        className="ml-2 flex-1 text-gray-700"
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#9ca3af"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
}
