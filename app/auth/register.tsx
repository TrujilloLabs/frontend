import React from 'react';
import { View, ScrollView } from 'react-native';
import { RegisterForm } from '../../components/auth/RegisterForm';

export default function RegisterScreen() {
  return (
    <ScrollView className="flex-1 bg-gray-100">
      <View className="flex-1 justify-center px-4 py-8">
        <RegisterForm />
      </View>
    </ScrollView>
  );
}