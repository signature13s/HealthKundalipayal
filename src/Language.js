import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, } from 'react-native';
import { styled } from 'nativewind';
import CheckBox from '@react-native-community/checkbox';

const Language = ({ navigation }) => {
  const [isHindiSelected, setHindiSelected] = useState(false);
  const [isEnglishSelected, setEnglishSelected] = useState(true); // Default selected language

  return (
    <View className="flex-1 items-center justify-center bg-white p-6">
      <Image
        source={require('../assets/logo.png')}
        resizeMode="stretch"
        className="h-30 w30 mb-6 mt-10 "/>


      {/* Title */}
      <Text className="text-xl font-bold text-black mb-8">Select language</Text>

      {/* Language Selection */}
      <View className="space-y-4 mb-8">
        {/* Hindi Checkbox */}
        <View className="flex-row items-center">
          <CheckBox
            value={isHindiSelected}
            onValueChange={setHindiSelected}
            className="mr-4"
          />
          <Text className="text-lg text-black">Hindi</Text>
        </View>

        {/* English Checkbox */}
        <View className="flex-row items-center">
          <CheckBox
            value={isEnglishSelected}
            onValueChange={setEnglishSelected}
            className="mr-4"
          />
          <Text className="text-lg text-black">English</Text>
        </View>
      </View>

      {/* Next Button */}
      <TouchableOpacity
        className="w-full bg-cyan-500 py-4 rounded-full"
        onPress={() => navigation.navigate('Onboarding2')} // Navigate to Onboarding2
      >
        <Text className="text-white font-bold text-lg text-center">Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Language;
