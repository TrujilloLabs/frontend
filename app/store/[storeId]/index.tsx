import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { AuthToggle } from '../../../components/auth/AuthToggle';

export default function StoreScreen() {
  const { storeId } = useLocalSearchParams<{ storeId: string }>();
  const [isValidStore, setIsValidStore] = useState<boolean | null>(null);

  useEffect(() => {
    validateStore();
  }, [storeId]);

  const validateStore = async () => {
    try {
      // TODO: Validar que la tienda existe
      console.log('Validating store:', storeId);
      setIsValidStore(true);
    } catch (error) {
      console.error('Store validation failed:', error);
      setIsValidStore(false);
    }
  };

  if (isValidStore === null) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#3b82f6" />
        <Text style={styles.loadingText}>Validando tienda...</Text>
      </View>
    );
  }

  if (!isValidStore) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorTitle}>Tienda no encontrada</Text>
        <Text style={styles.errorText}>El código de tienda no es válido</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.storeTitle}>Bienvenido a la tienda</Text>
      <Text style={styles.storeId}>ID: {storeId}</Text>
      <AuthToggle storeId={storeId} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: '#6b7280',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  errorTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#dc2626',
    marginBottom: 8,
  },
  errorText: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
  },
  storeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 60,
    marginBottom: 8,
  },
  storeId: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: 32,
  },
});