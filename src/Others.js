import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';

const Others = () => {
  // List data for the options
  const options = [
    { label: 'HelpLine Number', key: '1' },
    { label: 'Fitness Diary', key: '2' },
    { label: 'Exercise & Yoga', key: '3' },
    { label: 'Women\'s Health Diary', key: '4' },
    { label: 'Music Therapy', key: '5' },
    { label: 'Calorie/ Diet Chart', key: '6' },
  ];

  // Render item function for FlatList
  const renderItem = ({ item }) => (
    <TouchableOpacity className="flex-row items-center mb-4 bg-white rounded-lg shadow-md p-4">
      <Image
       source={require('../assets/logo.png')}
       className="w-10 h-10 mr-4"
      />
      <Text className="text-lg font-semibold">{item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-gray-200">
        <View className="flex-row items-center justify-between bg-cyan-500 p-4">
        <Text className="text-xl font-semibold text-white">Others</Text>
    </View>
      <FlatList
        data={options}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        contentContainerStyle={{ padding: 18 }}
      />
    </View>
  );
};

export default Others;
