import AdBanner from "@/components/adBanner/AdBanner";
import CategoriesCarousel from "@/components/category/CategoriesCarusel";
import MainCategories from "@/components/category/MainCategories";
import Headers from "@/components/Headers";
import PromotionsSection from "@/components/promotionsSection/PromotionsSection";
import useCategory from "@/hooks/useCategory.hook";
import React from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
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
  const { category, loading, error } = useCategory();

  if (loading)
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <ActivityIndicator size="large" color="#e74423" />
      </View>
    );

  if (error)
    return (
      <View className="flex-1 items-center justify-center p-4 bg-white">
        {/* Contenedor de notificación para el error */}
        <View className="bg-red-500 rounded-xl p-6 shadow-md items-center justify-center">
          <Text className="text-white text-lg font-semibold text-center">
            {error}
          </Text>
        </View>
      </View>
    );

  return (
    <SafeAreaView className="flex-1 bg-background mx-4">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Headers />
        <PromotionsSection />
        <AdBanner />
        {/* categorias  */}
        <MainCategories />
        {/* Carrusel de categorías */}
        <CategoriesCarousel categories={categories} />

        {/* componente de boton de ejemplo */}
        {/* <CustomButton
          className="w-40"
          color="primary"
          onPress={() => router.push("/category/Category")}
        >
          Categorias
        </CustomButton> */}

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
