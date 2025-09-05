import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

const Headers = () => {
  return (
    <View style={styles.container}>
      {/* Dirección */}
      <View style={styles.addressContainer}>
        {/* <Text style={styles.addressText}>La Estrella</Text> */}

        <Ionicons name="location" size={20} color="#e74423" />
        <Text style={styles.addressText}>Enviar a: Calle 123 #45- 67 - </Text>
        <TouchableOpacity>
          <Ionicons name="chevron-down" size={16} color="black" />
        </TouchableOpacity>
      </View>
      {/* Sección de Alerta */}
      <View style={styles.alertContainer}>
        <Ionicons name="information-circle-outline" size={20} color="orange" />
        <Text style={styles.alertText}>
          ¡Cuidado! Te encuentras lejos de la dirección seleccionada
        </Text>
        <TouchableOpacity>
          <Ionicons name="close-circle-outline" size={20} color="black" />
        </TouchableOpacity>
      </View>

      {/* Buscador */}
      <View style={styles.searchContainer}>
        <Ionicons
          name="search"
          size={20}
          color="gray"
          style={{ marginRight: 8 }}
        />
        <TextInput
          placeholder="¿Qué quieres hoy?"
          placeholderTextColor="gray"
          style={styles.input}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: "#f1f0de"
  },
  addressContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },
  addressText: {
    marginLeft: 6,
    fontSize: 14,
    fontWeight: "bold"
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    // backgroundColor: "#f1f0de",
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 60
    // borderWidth: 2 // grosor del borde
    // borderColor: "#878483" // color del borde
    // paddingVertical: 10
  },
  input: {
    flex: 1,
    fontSize: 14
  },
  alertContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fffbe5", // Un amarillo claro para la alerta
    padding: 10,
    borderRadius: 8,
    marginBottom: 10
  },
  alertText: {
    flex: 1,
    marginLeft: 8,
    marginRight: 8,
    fontSize: 12
  }
});

export default Headers;
