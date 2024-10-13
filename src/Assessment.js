import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styled } from "nativewind";

const Assessment = ({navigation}) => {
  return (
      <View className="flex-1 items-center justify-center bg-cyan-500">
        {/* White Box in the middle */}
        <View className="bg-white w-80 p-10 rounded-3xl shadow-lg items-center">
          {/* Logo inside the white box */}
          <Image
            source={require('../assets/logo.png')} // Replace with your logo
            className="w-24 h-24 mb-6"
            resizeMode="contain"
          />

          {/* Disease Based Assessment Button */}
          <TouchableOpacity
            className="bg-cyan-500 py-1 px-12 rounded-full mb-4"
            onPress={() => navigation.navigate('DiseaseList')}
          >
            <Text className="text-white text-center text-sm">Disease based assessment</Text>
          </TouchableOpacity>

          {/* Occupation Based Assessment Button */}
          <TouchableOpacity
            className="bg-cyan-500 py-1 px-10 rounded-full mb-4"
            onPress={() => navigation.navigate('Occupation')}
          >
            <Text className="text-white text-center text-sm">Occupation based assessment</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
};

export default Assessment;
