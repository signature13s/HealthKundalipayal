import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

const Disease = [
  { id: '1', name: 'Diabetes' },
  { id: '2', name: 'Cancer' },
  { id: '3', name: 'Tuberculosis' },
  { id: '4', name: 'Asthma' },
  { id: '5', name: 'Stone' },
  { id: '6', name: 'Stress and Depression' },
  { id: '7', name: 'Anemia' },
  { id: '8', name: 'High Blood Pressure' },
  { id: '9', name: 'Polycystic Ovary Syndrome' },
  { id: '10', name: 'COVID-19' },
];

const DiseaseList = ({navigation}) => {
 
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
          <Text className="text-center text-white text-xl font-bold">Disease based assessment</Text>
        </View>

        {/* List of diseases */}
        <FlatList
          data={Disease}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={{ padding: 16 }}
        />
      </View>
  );
};

export default DiseaseList;
