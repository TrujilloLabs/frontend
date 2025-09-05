import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#e74423",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          position: "absolute",
          bottom: 5,
          left: 20,
          right: 20,
          elevation: 5,
          backgroundColor: "#fff",
          borderRadius: 20, // 🔥 Bordes redondeados
          height: 100,
          //   shadowColor: "#e74423",
          shadowColor: "#000",
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: 5 },
          shadowRadius: 5
        }
        // tabBarShowLabel: false  // si quieres solo iconos
      }}
    >
      <Tabs.Screen
        name="home/Index"
        options={{
          title: "Inicio",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="offers/Index"
        options={{
          title: "Ofertas",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="pricetag-outline" size={size} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="favorites/Index"
        options={{
          title: "Favoritos",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" size={size} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="profile/Index"
        options={{
          title: "Cuenta",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          )
        }}
      />
    </Tabs>
  );
}
