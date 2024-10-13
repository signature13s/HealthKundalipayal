import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
//import { Ionicons } from '@expo/vector-icons'; // Icons (Expo)
//import { className } from 'tailwindcss-react-native';

const MyAccount = ({ navigation }) => {
  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center justify-between bg-teal-400 p-4">
        <TouchableOpacity onPress={() => navigation.goBack()} className="p-2">
          <Icon name="arrow-back" size={28} color="white" />
        </TouchableOpacity>
        <Text className="absolute left-0 ml-10 text-2xl font-semibold text-white">Profile</Text>
        {/*<View className="w-6"></View> {/* Placeholder for balance */}
      </View>

      <ScrollView className="bg-white">
        {/* Profile Avatar and Edit Button */}
        <View className="bg-cyan-500 items-center py-6">
          <Image
          source={require('../assets/logo.png')} 
            className="w-24 h-24 rounded-full mb-4"
          />
          <Text className="text-xl font-semibold text-white">Rajul Gupta</Text>
          <Text className="text-sm text-white mb-4">guptarajul@gmail.com</Text>
          <TouchableOpacity className="bg-purple-500 px-6 py-2 rounded-full">
            <Text className="text-white text-base">Edit Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Account Information Section */}
        <View className="p-4">
          <Text className="text-xl font-semibold mb-4">Account Info</Text>

          {/* Name */}
          <View className="flex-row items-center bg-gray-200 p-4 mb-3 rounded-lg">
            <Icon name="person" size={24} color="gray" className="mr-3" />
            <Text className="text-base">Name: Rajul Gupta</Text>
          </View>

          {/* Mobile */}
          <View className="flex-row items-center bg-gray-200 p-4 mb-3 rounded-lg">
            <Icon name="call" size={24} color="gray" className="mr-3" />
            <Text className="text-base">Mobile: 8081472855</Text>
          </View>

          {/* Email */}
          <View className="flex-row items-center bg-gray-200 p-4 mb-3 rounded-lg">
            <Icon name="mail" size={24} color="gray" className="mr-3" />
            <Text className="text-base">Email: guptarajul@gmail.com</Text>
          </View>

          {/* Age */}
          <View className="flex-row items-center bg-gray-200 p-4 mb-3 rounded-lg">
            <Icon name="people" size={24} color="gray" className="mr-3" />
            <Text className="text-base">Age: 19-35 Young Adult</Text>
          </View>

          {/* Gender */}
          <View className="flex-row items-center bg-gray-200 p-4 mb-3 rounded-lg">
            <Icon name="male-female" size={24} color="gray" className="mr-3" />
            <Text className="text-base">Gender: Female</Text>
          </View>

          {/* State */}

          <View className="flex-row items-center bg-gray-200 p-4 mb-3 rounded-lg">
            <Icon name="home" size={24} color="gray" className="mr-3" />
            <Text className="text-base">State: Uttar Pradesh</Text>
          </View>

          {/* City */}

          <View className="flex-row items-center bg-gray-200 p-4 mb-3 rounded-lg">
            <Icon name="home" size={24} color="gray" className="mr-3" />
            <Text className="text-base">City: Jhansi</Text>
          </View>

          {/* Blood Group */}

          <View className="flex-row items-center bg-gray-200 p-4 mb-3 rounded-lg">
            <Icon name="water" size={24} color="gray" className="mr-3" />
            <Text className="text-base">Blood Group: B+</Text>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View className="flex-row justify-around bg-teal-400 py-3">
        <TouchableOpacity className="items-center">
          <Icon name="home" size={32} color="white" />
          <Text className="text-white text-sm">Home</Text>
        </TouchableOpacity>

        <TouchableOpacity className="items-center">
          <Icon name="person" size={32} color="white" />
          <Text className="text-white text-sm">My Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MyAccount;
