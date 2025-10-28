import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';

export default function TestDeepLink() {
  const testDeepLink = (storeId: string) => {
    Linking.openURL(`miapp://store/${storeId}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Probar Deep Links</Text>
      
      <TouchableOpacity 
        style={styles.button}
        onPress={() => testDeepLink('abc123')}
      >
        <Text style={styles.buttonText}>Tienda ABC123</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.button}
        onPress={() => testDeepLink('xyz789')}
      >
        <Text style={styles.buttonText}>Tienda XYZ789</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#3b82f6',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    width: 200,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
  },
});