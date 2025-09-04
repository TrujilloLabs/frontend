import { Redirect } from "expo-router";
import React from "react";
// import { useRouter } from "expo-router";
// import { NativeStackScreenProps } from "@react-navigation/native-stack";

const App = () => {
  return <Redirect href="/home/Index" />;
  // <SafeAreaView className="flex-1 items-center justify-center bg-white">
  //   <View className="mt-5 mx-2.5">
  //     <Text className="text-3xl text-secondary-200 font-work-black">
  //       Hola mundo!
  //     </Text>
  //     <Text
  //       className="text-3xl text-tertiary"
  //       style={{ fontFamily: "WorkSans-Black" }}
  //     >
  //       Diego Trujillo
  //     </Text>

  //     <Link href="/products/ProductScreen">Productos</Link>
  //     <Text
  //       className="text-3xl text-tertiary"
  //       style={{ fontFamily: "WorkSans-Black" }}
  //     >
  //       Diego Trujillo
  //     </Text>
  //     <Text
  //       className="text-3xl text-tertiary"
  //       style={{ fontFamily: "WorkSans-Black" }}
  //     >
  //       Diego Trujillo
  //     </Text>

  //     <Pressable
  //       onPress={() => router.push("/products/ProductScreen")}
  //       className="bg-primary px-6 py-3 rounded-lg active:opacity-80"
  //     >
  //       <Text className="text-white font-bold text-lg">Presióname</Text>
  //     </Pressable>
  //   </View>
  // </SafeAreaView>
  // <AppNavigator />
  // );
};

export default App;
