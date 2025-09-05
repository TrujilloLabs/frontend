import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
// import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const PromotionsSection = () => {
  // const navigation = useNavigation();

  const handlePress = () => {
    // Aquí puedes navegar a una pantalla de promociones completa
    // onPress={() => router.push("/products/ProductScreen")}
    // Por ejemplo: navigation.navigate('PromotionsScreen');
    console.log("Navegando a la pantalla de promociones");

    router.push("/promotion/Index");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Las mejores promos</Text>
      <Text style={styles.subtitle}>para vivir el partido</Text>
      <TouchableOpacity style={styles.linkContainer} onPress={handlePress}>
        <Text style={styles.linkText}>Ver promos</Text>
        <Ionicons name="chevron-forward" size={16} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 20,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000"
  },
  subtitle: {
    fontSize: 18,
    color: "#333",
    marginBottom: 10
  },
  linkContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  linkText: {
    fontSize: 16,
    color: "#000",
    marginRight: 5
  }
});

export default PromotionsSection;
