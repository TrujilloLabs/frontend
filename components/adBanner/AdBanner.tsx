import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const AdBanner = () => {
  return (
    <View style={styles.container}>
      {/* Contenido del banner (texto e imagen) */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>ChatGPT Plus</Text>
        <Text style={styles.subtitle}>Gratis por 6 meses</Text>
        <Text style={styles.description}>Ahorra $20 USD al mes</Text>
      </View>
      <Image
        source={{ uri: "https://via.placeholder.com/60" }} // Reemplaza con la URL de tu logo "ProBlack"
        style={styles.logo}
      />

      {/* Botón */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Lo quiero</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#333", // Color de fondo del banner
    borderRadius: 10,
    padding: 20,
    // marginHorizontal: 16,
    marginBottom: 20
  },
  textContainer: {
    flex: 1
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff"
  },
  subtitle: {
    fontSize: 16,
    color: "#ccc",
    marginTop: 5
  },
  description: {
    fontSize: 12,
    color: "#aaa",
    marginTop: 5
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: "contain"
  },
  button: {
    backgroundColor: "#ff9900",
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginLeft: 15
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold"
  }
});

export default AdBanner;
