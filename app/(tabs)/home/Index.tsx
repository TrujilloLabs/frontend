import AdBanner from "@/components/adBanner/AdBanner";
import MainCategories from "@/components/category/MainCategories";
import Headers from "@/components/Headers";
import PromotionsSection from "@/components/promotionsSection/PromotionsSection";
import { Link } from "expo-router";
import React from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PromoCarousel from "../../../components/promotionsSection/PromoCarousel";

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
  },
  {
    id: "p4",
    image: "https://picsum.photos/400/200?4",
    title: "Descuentos Express"
  }
];

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background mx-4">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Headers />

        <PromotionsSection />
        <AdBanner />

        <MainCategories />

        {/* Publicidad */}
        {/* <View className="px-4 mt-6 bg-yellow-100 rounded-2xl p-4">
          <Text className="text-lg font-bold">ChatGPT Plus</Text>
          <Text className="text-orange-500 font-semibold">
            Gratis por 6 meses
          </Text>
          <Text className="text-gray-600">Ahorra $20 USD al mes</Text>
          <TouchableOpacity className="mt-3 bg-orange-500 py-2 px-4 rounded-xl">
            <Text className="text-white text-center font-bold">Lo quiero</Text>
          </TouchableOpacity>
        </View> */}

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
        {/* Carusel de promociones  */}
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <PromoCarousel promos={promos} />
        </ScrollView>

        {/* Carusel de promociones  */}
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <PromoCarousel promos={promos} />
        </ScrollView>

        {/* Carusel de promociones  */}
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <PromoCarousel promos={promos} />
        </ScrollView>

        {/* Carusel de promociones  */}
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <PromoCarousel promos={promos} />
        </ScrollView>

        {/* Carusel de promociones  */}
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <PromoCarousel promos={promos} />
        </ScrollView>

        {/* Carusel de promociones  */}
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <PromoCarousel promos={promos} />
        </ScrollView>

        {/* Carusel de promociones  */}
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <PromoCarousel promos={promos} />
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f0de"
  },
  scrollContent: {
    paddingBottom: 80
  }
});
