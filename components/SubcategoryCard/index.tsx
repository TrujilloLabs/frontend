import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
  id: string;
  name: string;
  icon?: string;
  imageUrl?: string;
}

const SubcategoryCard: React.FC<Props> = ({ id, name, icon, imageUrl }) => {
  const router = useRouter();

  const handlePress = () => {
    // 🚨 Pasar el ID como un parámetro en la URL
    router.push({
      pathname: "/category/Idex",
      params: { subcategoryId: id }
    });
  };
  // console.log("Imagwen", icon);
  return (
    <View>
      <TouchableOpacity
        style={styles.subcategoryCard}
        onPress={handlePress}
        className="items-center mr-4"
      >
        <View className="rounded-full w-16 h-16 items-center justify-center">
          {icon ? (
            <Image
              // style={styles.imagenCategory}
              source={{ uri: icon }}
              // source={iconImage}
              className="w-full h-full"
              resizeMode="cover"
            />
          ) : (
            // <Text className="text-4xl">{icon}</Text>
            <Ionicons name="medkit-outline" size={30} color="#000" />
          )}
        </View>
      </TouchableOpacity>
      <Text className="text-xs text-center mt-2 font-medium">{name}</Text>
    </View>
  );
};

export default SubcategoryCard;

const styles = StyleSheet.create({
  subcategoryCard: {
    // backgroundColor: "#eb0e0e",
    // backgroundColor: "#f7f2f2",
    // borderRadius: 50,
    padding: 14,
    alignItems: "center",
    marginRight: 10
    // height: 100,
    // width: 100,
    // maxWidth: 100,
    // maxHeight: 100
  },
  imagenCategory: {
    borderRadius: 100,
    padding: 15,
    alignItems: "center",
    marginRight: 10,
    height: 80,
    width: 80
  }
});
