// import React from "react";
// import { Text, TouchableOpacity, View } from "react-native";

// const MainCategories = () => {
//   return (
//     <View className="px-4 mt-6 flex-row justify-between">
//       {/* Restaurante */}
//       <TouchableOpacity className="flex-1 bg-red-100 rounded-2xl p-6 mr-2 items-center">
//         <Text className="text-4xl">🍔</Text>
//         <Text className="mt-2 font-semibold">Restaurantes</Text>
//       </TouchableOpacity>

//       {/* Mercado */}
//       <TouchableOpacity className="flex-1 bg-green-100 rounded-2xl p-6 ml-2 items-center">
//         <Text className="text-4xl">🛒</Text>
//         <Text className="mt-2 font-semibold">Mercado</Text>
//       </TouchableOpacity>

//     </View>
//   );
// };

// export default MainCategories;

import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

type Category = {
  id: string | number;
  name: string;
  icon?: string;
  imageUrl?: string;
  bgColor?: "";
};

type Props = {
  categories: Category[];
};

const MainCategories: React.FC<Props> = ({ categories }) => {
  const handlePress = (category: Category) => {
    // 🚨 Navega a la pantalla de subcategorías y productos
    // router.push("/category/Idex");
    router.push({
      pathname: "/category/Idex",
      params: { categoryId: category.id }
    });
  };
  return (
    <View className="px-4 mt-6 flex-row flex-wrap gap-x-4">
      {categories.map((category) => (
        <TouchableOpacity
          key={category.id}
          onPress={() => handlePress(category)}
          className="rounded-2xl p-6 mb-4 items-center bg-red-100 "
          style={{
            // backgroundColor: category.bgColor,
            width: "48%" // 🚨 Ajuste del ancho para dejar espacio
          }}
        >
          <Text className="text-5xl">{category.imageUrl || "🍔"}</Text>
          <Text className="mt-2 font-semibold text-center">
            {category.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default MainCategories;
