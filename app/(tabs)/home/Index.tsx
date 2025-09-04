import { Link } from "expo-router";
import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const categories = [
  { id: "1", name: "Farmacia", icon: "💊" },
  { id: "2", name: "Tiendas", icon: "🛍️" },
  { id: "3", name: "ChatGPT", icon: "🤖" },
  { id: "4", name: "Express", icon: "🛒" },
  { id: "5", name: "technics", icon: "💻" },
  { id: "6", name: "Mascotas", icon: "🐶" }
];

const promos = [
  { id: "p1", image: "https://picsum.photos/400/200?1", title: "Promo fútbol" },
  {
    id: "p2",
    image: "https://picsum.photos/400/200?2",
    title: "2x1 en Mercado"
  },
  {
    id: "p3",
    image: "https://picsum.photos/400/200?3",
    title: "Descuentos Express"
  }
];

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Dirección */}
        <View className="px-4 pt-2">
          <Text className="text-gray-600 text-sm">La Estrella</Text>
          <Text className="text-lg font-bold">CL 75 SUR # 46 A - 14</Text>
        </View>

        {/* Buscador */}
        <View className="px-4 mt-3">
          <View className="bg-gray-100 rounded-xl p-3">
            <Text className="text-gray-500">🔍 ¿Qué quieres hoy?</Text>
          </View>
        </View>

        {/* Carrusel Promos */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mt-4 pl-4"
        >
          {promos.map((promo) => (
            <View key={promo.id} className="mr-4">
              <Image
                source={{ uri: promo.image }}
                className="w-80 h-40 rounded-2xl"
              />
              <Text className="mt-2 font-semibold">{promo.title}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Publicidad */}
        <View className="px-4 mt-6 bg-yellow-100 rounded-2xl p-4">
          <Text className="text-lg font-bold">ChatGPT Plus</Text>
          <Text className="text-orange-500 font-semibold">
            Gratis por 6 meses
          </Text>
          <Text className="text-gray-600">Ahorra $20 USD al mes</Text>
          <TouchableOpacity className="mt-3 bg-orange-500 py-2 px-4 rounded-xl">
            <Text className="text-white text-center font-bold">Lo quiero</Text>
          </TouchableOpacity>
        </View>

        {/* Categorías principales */}
        <View className="px-4 mt-6 flex-row justify-between">
          <TouchableOpacity className="flex-1 bg-red-100 rounded-2xl p-6 mr-2 items-center">
            <Text className="text-4xl">🍔</Text>
            <Text className="mt-2 font-semibold">Restaurantes</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 bg-green-100 rounded-2xl p-6 ml-2 items-center">
            <Text className="text-4xl">🛒</Text>
            <Text className="mt-2 font-semibold">Mercado</Text>
          </TouchableOpacity>
        </View>

        {/* Carrusel de categorías */}
        <View className="mt-6">
          <FlatList
            horizontal
            data={categories}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 16 }}
            renderItem={({ item }) => (
              // href={`/category/${item.id}`}
              <Link href="/category/Category" asChild>
                <TouchableOpacity className="bg-gray-100 rounded-2xl p-4 mr-3 items-center w-24">
                  <Text className="text-2xl">{item.icon}</Text>
                  <Text className="mt-2 text-sm font-medium">{item.name}</Text>
                </TouchableOpacity>
              </Link>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
