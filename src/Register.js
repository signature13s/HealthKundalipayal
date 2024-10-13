import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
//import {styled} from 'nativewind';

const Register = ({navigation}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View className="flex-1 items-center justify-center bg-cyan-400">
      <Text className="text-3xl font-bold text-white mb-8">
        Welcome User
      </Text>

      <View className="bg-white shadow-lg rounded-lg p-8 w-80">
        <Text className="text-center text-2xl font-bold text-cyan-600 mb-4">
          Sign up
        </Text>
        <View className="space-y-6">
          <TextInput
            placeholder="Enter your mobile number"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-cyan-500"
          />

          <Text className="text-gray-500 text-sm">
            You will receive an OTP for verification
          </Text>

          <TextInput
            placeholder="Enter your email id"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-cyan-500"
          />

          <View className="relative">
            <TextInput
              placeholder="Generate password"
              secureTextEntry={!passwordVisible}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-cyan-500"
            />
            <TouchableOpacity
              onPress={() => setPasswordVisible(!passwordVisible)}
              className="absolute right-3 top-3">
              <Text className="text-gray-500">
                {passwordVisible ? '🙈' : '👁️'}
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity className="w-full bg-cyan-500 py-2 rounded-md">
            <Text className="text-center text-white">Sign up</Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-center mt-4">
          <TouchableOpacity>
            <Text className="text-cyan-600 text-sm"
            onPress={() => navigation.navigate("Login")}>
              Already have an account? Log in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Register;
