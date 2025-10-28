import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { AuthToggle } from '../../../components/auth/AuthToggle';

export default function StoreLoginScreen() {
  const { storeId } = useLocalSearchParams<{ storeId: string }>();

  return (
    <ScrollView style={styles.container}>
      <AuthToggle storeId={storeId} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
});