import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ProductScreen = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-background">
      <View>
        <Text className="text-primary text-3xl">ProductScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default ProductScreen;
