import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styled } from "nativewind";

const Login = ({navigation}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View className="flex-1 items-center justify-center bg-cyan-400">
      <Text className="text-3xl font-bold text-white mb-10">Welcome</Text>
      <View className="bg-white shadow-lg rounded-lg px-6 py-10 w-80">
        <Text className="text-center text-2xl font-bold text-cyan-600 mb-4">
          Log In
        </Text>

        <View className="space-y-6">
          <View>
            <TextInput
              placeholder="Enter your email or mobile no."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-cyan-500"
            />
          </View>

          <View className="relative">
            <TextInput
              placeholder="Enter your password"
              secureTextEntry={!passwordVisible}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-cyan-500"
            />
            <TouchableOpacity
              onPress={() => setPasswordVisible(!passwordVisible)}
              className="absolute right-3 top-3"
            >
              <Text className="text-gray-500">
                {passwordVisible ? "🙈" : "👁️"}
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity className="w-full bg-cyan-500 px-6 py-3 rounded-lg">
            <Text className="text-center text-white"
            onPress={() => navigation.navigate("Welcome")}>
              Log in</Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-between mt-4">
          <TouchableOpacity>
            <Text className="text-cyan-600 text-sm"
             onPress={() => navigation.navigate("Register")}>
              Register now
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="text-cyan-600 text-sm">Forgot password? Reset</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
