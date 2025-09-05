import { useFonts } from "expo-font";
import * as NavigationBar from "expo-navigation-bar";
import { SplashScreen, Stack } from "expo-router";
import React from "react";
import "./global.css";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "WorkSans-Black": require("../assets/fonts/WorkSans-Black.ttf"),
    "WorkSans-BlackItalic": require("../assets/fonts/WorkSans-BlackItalic.ttf"),
    "WorkSans-Bold": require("../assets/fonts/WorkSans-Bold.ttf"),
    "WorkSans-BoldItalic": require("../assets/fonts/WorkSans-BoldItalic.ttf"),
    "WorkSans-ExtraBold": require("../assets/fonts/WorkSans-ExtraBold.ttf"),
    "WorkSans-ExtraBoldItalic": require("../assets/fonts/WorkSans-ExtraBoldItalic.ttf"),
    "WorkSans-ExtraLight": require("../assets/fonts/WorkSans-ExtraLight.ttf"),
    "WorkSans-ExtraLightItalic": require("../assets/fonts/WorkSans-ExtraLightItalic.ttf"),
    "WorkSans-Italic": require("../assets/fonts/WorkSans-Italic.ttf"),
    "WorkSans-Light": require("../assets/fonts/WorkSans-Light.ttf"),
    "WorkSans-LightItalic": require("../assets/fonts/WorkSans-LightItalic.ttf"),
    "WorkSans-Medium": require("../assets/fonts/WorkSans-Medium.ttf"),
    "WorkSans-MediumItalic": require("../assets/fonts/WorkSans-MediumItalic.ttf"),
    "WorkSans-Regular": require("../assets/fonts/WorkSans-Regular.ttf"),
    "WorkSans-SemiBold": require("../assets/fonts/WorkSans-SemiBold.ttf"),
    "WorkSans-SemiBoldItalic": require("../assets/fonts/WorkSans-SemiBoldItalic.ttf"),
    "WorkSans-Thin": require("../assets/fonts/WorkSans-Thin.ttf"),
    "WorkSans-ThinItalic": require("../assets/fonts/WorkSans-ThinItalic.ttf")
  });

  React.useEffect(() => {
    if (error) {
      console.warn(error);
      throw error;
    }
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }

    // Color de fondo de la barra
    // Fondo con tu color corporativo
    // NavigationBar.setBackgroundColorAsync("#e74423");

    // Color de los botones (icónicos de Android)
    NavigationBar.setButtonStyleAsync("dark"); // 👈 "light" = blanco, "dark" = negro
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" />
      <Stack.Screen name="(tabs)" />
      {/* <Stack.Screen name="index" /> */}
    </Stack>
    // return <Slot />;
  );
};

export default RootLayout;
