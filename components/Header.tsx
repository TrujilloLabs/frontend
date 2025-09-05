import { Ionicons } from "@expo/vector-icons"; // O cualquier otra librería de íconos que prefieras
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      {/* Sección Superior: Dirección */}
      <View style={styles.addressContainer}>
        <Text style={styles.addressText}>La Estrella</Text>
        <Text style={styles.addressSubText}>CL 75 SUR # 46 A - 14</Text>
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

      {/* Barra de Búsqueda */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="gray" />
        <TextInput style={styles.searchInput} placeholder="¿Qué quieres hoy?" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 40, // Ajusta para el área segura de la barra de estado
    backgroundColor: "white" // O el color de fondo de tu diseño
  },
  addressContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },
  addressText: {
    fontSize: 14,
    fontWeight: "bold"
  },
  addressSubText: {
    fontSize: 14,
    marginLeft: 5
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
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f0de",
    // backgroundColor: "#f0f0f0",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10
  },
  searchInput: {
    flex: 1,
    marginLeft: 10
  }
});

export default Header;
