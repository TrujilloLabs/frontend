import React from 'react';
import { ScrollView } from 'react-native';
import { AuthToggle } from '../../components/auth/AuthToggle';

export default function LoginScreen() {
  return (
    <ScrollView className="flex-1 bg-gray-100">
      <AuthToggle />
    </ScrollView>
  );
}