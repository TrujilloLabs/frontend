import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import ProductCard from "@/components/ProductCard";
import SubcategoryCard from "@/components/SubcategoryCard";
import { useFetchCategoryData } from "@/hooks/useFetchCategoryData";
import { Product } from "../../interfaces/index";

const CategoryDetailsScreen = () => {
  const router = useRouter();
  const {
    subcategories,
    products,
    loading,
    error,
    refreshCategory,
    isRefreshing
  } = useFetchCategoryData();

  const groupedProducts: Record<string, Product[]> = products.reduce(
    (acc, product) => {
      const subcatName = product.subcategory.name;
      if (!acc[subcatName]) {
        acc[subcatName] = [];
      }
      acc[subcatName].push(product);
      return acc;
    },
    {} as Record<string, Product[]>
  );

  const renderProductSection = ({ item: subcatName }: { item: string }) => {
    return (
      <View style={styles.productSectionContainer}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>{subcatName}</Text>
          <TouchableOpacity>
            <Text style={styles.seeMoreText}>Ver más</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={groupedProducts[subcatName]}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <ProductCard product={item} />}
        />
      </View>
    );
  };

  const renderHeader = () => {
    // Si no hay subcategorías, no renderices el carrusel
    if (subcategories.length === 0) return null;

    return (
      <FlatList
        data={subcategories}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.subcatListContainer}
        renderItem={({ item }) => (
          <SubcategoryCard id={item.id} name={item.name} icon={item.icon} />
        )}
      />
    );
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#e74423" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <View style={styles.errorBox}>
          <Text style={styles.errorText}>{error}</Text>
          <TouchableOpacity
            onPress={refreshCategory}
            style={styles.refreshButton}
          >
            <Text style={styles.refreshButtonText}>Reintentar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  // Si no hay productos, mostramos un mensaje
  if (products.length === 0) {
    return (
      <View style={styles.container}>
        <View style={styles.topHeader}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={28} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Categoría</Text>
          <View style={{ flex: 1 }} />
          <Ionicons name="search" size={28} color="black" />
        </View>
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No hay productos para mostrar.</Text>
          <TouchableOpacity
            onPress={refreshCategory}
            style={styles.refreshButton}
          >
            <Text style={styles.refreshButtonText}>Reintentar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.topHeader}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={28} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Categoría</Text>
        <View style={{ flex: 1 }} />
        <Ionicons name="search" size={28} color="black" />
      </View>

      <FlatList
        data={Object.keys(groupedProducts)}
        keyExtractor={(item) => item}
        renderItem={renderProductSection}
        ListHeaderComponent={renderHeader}
        onRefresh={refreshCategory}
        refreshing={isRefreshing}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "white"
  },
  errorBox: {
    backgroundColor: "#ef4444",
    borderRadius: 12,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: "center"
  },
  errorText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 16
  },
  refreshButton: {
    backgroundColor: "#dc2626",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8
  },
  refreshButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  topHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 16,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderColor: "#e5e7eb"
  },
  headerTitle: {
    marginLeft: 16,
    fontWeight: "bold",
    fontSize: 18
  },
  subcatListContainer: {
    paddingHorizontal: 16,
    paddingVertical: 10
  },
  productSectionContainer: {
    marginTop: 24,
    paddingHorizontal: 16
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 20
  },
  seeMoreText: {
    fontSize: 14,
    color: "#6b7280"
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  emptyText: {
    color: "#888",
    fontSize: 16,
    marginBottom: 20
  }
});

export default CategoryDetailsScreen;
