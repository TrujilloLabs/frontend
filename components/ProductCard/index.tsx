import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

interface Props {
  product: {
    id: string;
    name: string;
    priceCop: number;
    // 🚨 AÑADIR 'null' a los tipos de priceUsd
    priceUsd?: number | null;
    imageUrl?: string;
  };
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <TouchableOpacity className="flex-1 m-2 p-3 bg-white border border-gray-200 rounded-lg shadow-md items-center">
      <Image source={{ uri: product.imageUrl }} style={styles.productImage} />
      <Text className="font-bold text-lg mt-2">{`$${product.priceCop}`}</Text>
      <Text className="text-center text-sm mt-1">{product.name}</Text>
      {/* 🚨 Añadir un condicional para renderizar el precio si existe */}
      {product.priceUsd !== null && (
        <Text className="text-xs text-gray-500 mt-1">{`$${product.priceUsd}`}</Text>
      )}
      <TouchableOpacity className="absolute top-2 right-2 bg-green-500 rounded-full p-1">
        <Ionicons name="add" size={16} color="white" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  productImage: {
    width: 100,
    height: 100,
    resizeMode: "contain"
  }
});

export default ProductCard;
