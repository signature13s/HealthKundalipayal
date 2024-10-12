import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styled } from 'nativewind';

// Assuming the logo is in your assets folder
const Onboarding1 = ({ navigation }) => {
  return (
    <View className="flex-1 items-center justify-center bg-white p-6">
      {/* Logo */}
      {/*<Image
        source={require('./assets/healthkundli.png')} // Path to your logo image
        className="w-48 h-48 mb-6"
        resizeMode="contain"
      /> *}

      {/* Title */}
      <Text className="text-lg text-center font-bold text-black mb-10">
        FUNDED BY GOVERNMENT OF UTTAR PRADESH
      </Text>

      {/* Contributors List */}
      <View className="space-y-2">
        <Text className="text-center text-gray-900 mb-3">
          Prof. Mukesh Pandey{'\n'}(Hon'ble Vice Chancellor){'\n'}(Bundelkhand University, Jhansi)
        </Text>
        <Text className="text-center text-gray-900 mb-3">
          Dr. Lavkush Dwivedi{'\n'}(Principal Investigator)
        </Text>
        <Text className="text-center text-gray-900 mb-3">
          Dr. Anupam Vyas{'\n'}(Co- Principal Investigator)
        </Text>
        <Text className="text-center text-gray-900 mb-3">
          Ms. Rajul Gupta{'\n'}(Project Assistant)
        </Text>
      </View>

      {/* Get Started Button */}
      <TouchableOpacity
        className="w-full bg-cyan-500 py-4 rounded-full mt-8 flex items-center justify-center"
        onPress={() => navigation.navigate('Language')} // Navigate to Register screen
      >
        <Text className="text-white font-bold text-lg">Get started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Onboarding1;
