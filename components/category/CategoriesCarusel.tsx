import { Link } from "expo-router";
import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

type Category = {
  id: string | number;
  name: string;
  icon?: string;
  imageUrl?: string;
};

type Props = {
  categories: Category[];
};

const CategoriesCarousel: React.FC<Props> = ({ categories }) => {
  return (
    <View className="mt-6">
      <FlatList
        horizontal
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        renderItem={({ item }) => (
          <Link
            href={{
              // /category/[id]
              pathname: "/category/Category",
              params: { id: item.id.toString() }
            }}
            asChild
          >
            <TouchableOpacity className="bg-gray-100 rounded-2xl p-4 mr-3 items-center w-24">
              {/* <Image
                source={{ uri: item.imageUrl }}
                className="w-16 h-16 rounded-full"
              /> */}
              <Text className="text-2xl">{item.icon}</Text>
              <Text className="mt-2 text-sm font-medium">{item.name}</Text>
            </TouchableOpacity>
          </Link>
        )}
      />
    </View>
  );
};

export default CategoriesCarousel;
