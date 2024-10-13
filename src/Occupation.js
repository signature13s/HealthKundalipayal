import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

const OccupationProvided = [
  { id: '1', name: 'Agriculture Worker' },
  { id: '2', name: 'Cement Factory Worker' },
  { id: '3', name: 'Automobile Worker' },
  { id: '4', name: 'Flax Worker' },
  { id: '5', name: 'Laboratory Worker' },
  { id: '6', name: 'Health Worker' },
  { id: '7', name: 'Stone Crusher/Sand Miner' },
  { id: '8', name: 'Labourer' },
  { id: '9', name: 'Paint Maker' },
  { id: '10', name: 'Distribution of Petroleum' },
  { id: '11', name: 'Sweeper' },
  { id: '12', name: 'Taxi Driver/Rickshaw Puller' },
  { id: '13', name: 'Policeman/Traffic Police' },
];

const Occupation = ({navigation}) => {
 
  const renderItem = ({ item }) => (
    <TouchableOpacity
      className="bg-gray-200 p-4 mb-2 rounded-lg"
      onPress={() => alert(`Selected: ${item.name}`)} // Replace alert with navigation or else needed
    >
      <Text className="text-lg">{item.name}</Text>
    </TouchableOpacity>
  );

  return (
      <View className="flex-1 bg-white">
        {/* Header */}
        <View className="bg-cyan-500 py-4">
          <Text className="text-center text-white text-xl font-bold">Occupation based assessment</Text>
        </View>

        {/* List of Occupation */}
        <FlatList
          data={OccupationProvided}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={{ padding: 16 }}
        />
      </View>
  );
};

export default Occupation;
