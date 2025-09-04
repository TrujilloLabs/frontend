import React from "react";
import { Text, View } from "react-native";

const ProfileScreen = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-bold">Profile</Text>
      <Text className="text-gray-600 mt-2">A qui va el perfil</Text>
    </View>
  );
};

export default ProfileScreen;
