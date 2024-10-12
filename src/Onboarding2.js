import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';

const Onboarding2 = ({navigation}) => {

  return (
    <View className="flex-1 bg-gray-100 justify-center items-center p-4">
      
      {/* Title */}
      <Text className="absolute top-0 mt-10 text-3xl font-bold text-gray-700 ">About this app</Text>

      {/* Description */}
      <Text className="absolute middle flex-1 text-center text-gray-600 ">
        This app is designed and developed to enable you for taking health risk assessment & diet management. 
        It is an attempt to predict your health risks on the basis of lifestyle inputs. 
        However, it is not to be considered an alternative of professional doctor's consultations.
      </Text>

      <Image
        source={require('../assets/logo.png')}
        resizeMode="contain"
        className="absolute top-0 mt-20 h-30 w-30 mb-4 flex-col"/>



      {/* Buttons: Skip and Next */}
      <TouchableOpacity className="absolute bottom-0 mb-8 w-full bg-cyan-500 px-6 py-3 rounded-full"
      onPress={() => navigation.navigate('Onboarding3')}>
            <Text className="text-center text-white">Skip</Text>
          </TouchableOpacity>

        {/* Next Button */}
        <TouchableOpacity 
          className="absolute bottom-0 mb-20 absolute right-0 mr-8  px-4 py-1.5 rounded-full" 
          onPress={() => navigation.navigate('Onboarding3')}
        >
          <Text className="text-gray-700">Next></Text>
        </TouchableOpacity>
      
    </View>
  );
};

export default Onboarding2;
