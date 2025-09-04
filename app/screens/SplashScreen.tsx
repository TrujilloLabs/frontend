import React from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/logo/logo.png")} // pon tu logo aquí en assets
        style={styles.logo}
      />
      <Text style={styles.title}>Mi Tienda</Text>
      <ActivityIndicator size="large" color="#fff" style={{ marginTop: 20 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#222",
    backgroundColor: "#f1f0de",
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: -30,
    resizeMode: "contain"
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    //estilo del texto
    fontFamily: "ui-rounded bold",
    color: "#e74423"
  }
});
