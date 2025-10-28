import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { AuthToggle } from '../../components/auth/AuthToggle';
import { STORE_CONFIG } from '../../config/store.config';

export default function LoginScreen() {
  return (
    <ScrollView style={styles.container}>
      <AuthToggle storeId={STORE_CONFIG.STORE_ID} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
});