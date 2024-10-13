import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Welcome = ({navigation}) => {
  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="w-full bg-cyan-500 py-4 items-center">
        <Text className="text-white text-xl font-bold text-center">
          Welcome to Online Human Health Risks Assessment & Management Tool
        </Text>
      </View>

      {/* Main Content */}
      <View className="flex-1 justify-center items-center">
        {/* Assessment Button */}
        <TouchableOpacity
          className="absolute bottom-20 bg-cyan-500 rounded-full py-3 px-20 mb-1"
          onPress={() => navigation.navigate('Assessment')}>
          <Text className="text-white text-lg">Assessment</Text>
        </TouchableOpacity>

        {/* Others Button */}
        <TouchableOpacity
          className="absolute bottom-0 bg-cyan-500 rounded-full py-3 px-20 mb-4"
          onPress={() => navigation.navigate('Others')}>
          <Text className="text-white text-lg"> Others </Text>
        </TouchableOpacity>
      </View>

      {/* Footer with Icons */}
      <View className="flex-row justify-between items-center p-4 bg-cyan-500">
        {/* Home Button */}
        <TouchableOpacity
          className="items-center"
          onPress={() => navigation.navigate('Home')}>
          <Icon name="home-outline" size={30} color="white" />
          <Text className="text-white mt-2">Home</Text>
        </TouchableOpacity>

        {/* Account Button */}
        <TouchableOpacity
          className="items-center"
          onPress={() => navigation.navigate('MyAccount')}>
          <Icon name="person-outline" size={30} color="white" />
          <Text className="text-white mt-2">My Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
