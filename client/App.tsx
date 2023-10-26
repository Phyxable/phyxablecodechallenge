import "react-native-gesture-handler";
import React, { useEffect } from "react";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useColorScheme } from "react-native";
import DrawerNavigation from "./navigation/DrawerNavigation";
import TabNavigation from "./navigation/TabNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { FontAwesome } from "@expo/vector-icons";
import { SplashScreen } from "expo-router";
import useOrientation from "./hooks/useOrientation";

export default function App() {
  const [loaded, error] = useFonts({
    SpaceMono: require("./assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });
  SplashScreen.preventAutoHideAsync();
  const { isDrawer } = useOrientation();
  const colorScheme = useColorScheme();
  const NavigatorToRender: any =
    isDrawer ? <DrawerNavigation /> : <TabNavigation />;

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        {NavigatorToRender}
      </ThemeProvider>
    </NavigationContainer>
  );
}
