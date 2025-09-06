import { useLocalSearchParams } from "expo-router";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

const mockSubcategories = [
  { id: "1", name: "Analgesicos", icon: "💊" },
  { id: "2", name: "Vitaminas", icon: "🍊" },
  { id: "3", name: "Cuidado Personal", icon: "🧴" },
  { id: "4", name: "Bebés", icon: "🍼" },
  { id: "5", name: "Gripa y alergias", icon: "🍼" },
  { id: "6", name: "Dolor e inflamación", icon: "🍼" },
  { id: "7", name: "Bebés", icon: "🍼" }
];

const mockProducts = [
  {
    id: "101",
    name: "Paracetamol 500mg",
    price: "$10.000",
    image: "https://placehold.co/600x400@3x.png"
  },
  {
    id: "102",
    name: "Vitamina C 1g",
    price: "$12.000",
    image: "https://placehold.co/600x400@3x.png"
  },
  {
    id: "103",
    name: "Shampoo Herbal",
    price: "$25.000",
    image: "https://placehold.co/600x400@3x.png"
  },
  {
    id: "104",
    name: "Pañales X20",
    price: "$30.000",
    image: "https://placehold.co/100@2x.png"
  },
  {
    id: "105",
    name: "locones X20",
    price: "$50.000",
    image: "https://placehold.co/100@2x.png"
  }
];

export default function CategoryScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <FlatList
      data={mockProducts}
      keyExtractor={(item) => item.id}
      numColumns={2}
      columnWrapperStyle={{
        justifyContent: "space-between",
        paddingHorizontal: 10
      }}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.productCard}>
          <Image source={{ uri: item.image }} style={styles.productImage} />
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productPrice}>{item.price}</Text>
        </TouchableOpacity>
      )}
      ListHeaderComponent={
        <>
          {/* Header */}
          <Text style={styles.title}>Categoría: {id}</Text>

          {/* Subcategorías */}
          <View style={{ marginTop: 10 }}>
            <Text style={styles.sectionTitle}>Subcategorías</Text>
            <FlatList
              horizontal
              data={mockSubcategories}
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 10 }}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.subcategoryCard}>
                  <Text style={{ fontSize: 24 }}>{item.icon}</Text>
                  <Text style={styles.subcategoryText}>{item.name}</Text>
                </TouchableOpacity>
              )}
            />
          </View>

          {/* Productos title */}
          <View style={{ marginTop: 20 }}>
            <Text style={styles.sectionTitle}>Productos</Text>
          </View>
        </>
      }
    />
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "bold",
    margin: 16,
    color: "#e74423"
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginHorizontal: 16,
    marginBottom: 10
  },
  subcategoryCard: {
    backgroundColor: "#f1f0de",
    borderRadius: 12,
    padding: 15,
    alignItems: "center",
    marginRight: 10,
    width: 100
  },
  subcategoryText: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: "500"
  },
  productCard: {
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    padding: 10,
    marginBottom: 15,
    width: "48%",
    alignItems: "center"
  },
  productImage: { width: 80, height: 80, borderRadius: 10 },
  productName: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center"
  },
  productPrice: {
    marginTop: 4,
    fontSize: 14,
    fontWeight: "bold",
    color: "#e74423"
  }
});
