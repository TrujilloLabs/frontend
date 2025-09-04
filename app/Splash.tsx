import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      // redirige al index después de 2 segundos
      router.replace("/");
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require("../assets/logo/logo.png")} // 👈 coloca tu logo en assets/
        style={styles.logoImage}
        resizeMode="contain"
      />

      {/* Nombre de la tienda */}
      <Text style={styles.title}>Pizza</Text>

      {/* Loader */}
      <ActivityIndicator size="large" color="#000" style={{ marginTop: 20 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#fff"
    backgroundColor: "#f1f0de"
  },
  logoImage: {
    width: 250, // ajusta tamaño del logo
    height: 250,
    marginBottom: -30
  },
  title: {
    fontSize: 32,
    // fontWeight: "bold",
    color: "#e74423",
    fontFamily: "WorkSans-BlackItalic"
    // color: "#000"
  }
});
