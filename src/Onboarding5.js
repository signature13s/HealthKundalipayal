import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';

const Onboarding5 = ({navigation}) => {

  return (
    <View className="flex-1 bg-gray-100 justify-center items-center p-4">
      
      {/* Title */}
      <Text className="absolute top-0 text-center mt-10 text-3xl font-bold text-gray-700 ">
        Exercise/Music Therapy</Text>


      {/* Logo 
      <Image 
        source={require('../assets/health_kundli_logo.png')} // Ensure you have this image in your assets folder
        className="w-24 h-24 mb-6"
      />*/}

      {/* Buttons: Skip and Next */}
      <TouchableOpacity className="absolute bottom-0 mb-8 w-full bg-cyan-500 px-6 py-3 rounded-full"
      onPress={() => navigation.navigate('Onboarding6')}>
            <Text className="text-center text-white">Skip</Text>
          </TouchableOpacity>

        {/* Next Button */}
        <TouchableOpacity 
          className="absolute bottom-0 mb-20 absolute right-0 mr-8  px-4 py-1.5 rounded-full" 
          onPress={() => navigation.navigate('Onboarding6')}
        >
          <Text className="text-gray-700">Next></Text>
        </TouchableOpacity>

        <TouchableOpacity 
          className="absolute bottom-0 mb-20 absolute left-0 ml-8  px-4 py-1.5 rounded-full" 
          onPress={() => navigation.navigate('Onboarding4')}
        >
           <Text className="text-gray-700"> Previous</Text>
        </TouchableOpacity>
      
    </View>
  );
};

export default Onboarding5;
