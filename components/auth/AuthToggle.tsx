import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';

export const AuthToggle: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.toggleContainer}>
        <View style={styles.toggleWrapper}>
          <TouchableOpacity
            style={[styles.toggleButton, isLogin && styles.activeButton]}
            onPress={() => setIsLogin(true)}
          >
            <Text style={[styles.toggleText, isLogin ? styles.activeText : styles.inactiveText]}>
              Iniciar Sesión
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[styles.toggleButton, !isLogin && styles.activeButton]}
            onPress={() => setIsLogin(false)}
          >
            <Text style={[styles.toggleText, !isLogin ? styles.activeText : styles.inactiveText]}>
              Registrarse
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      
      {isLogin ? <LoginForm /> : <RegisterForm />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  toggleContainer: {
    marginBottom: 24,
  },
  toggleWrapper: {
    flexDirection: 'row',
    backgroundColor: '#e5e7eb',
    borderRadius: 8,
    padding: 4,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 6,
  },
  activeButton: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  toggleText: {
    textAlign: 'center',
    fontWeight: '600',
  },
  activeText: {
    color: '#2563eb',
  },
  inactiveText: {
    color: '#6b7280',
  },
});