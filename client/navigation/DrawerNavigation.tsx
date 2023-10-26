import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabOneScreen from "../app/(tabs)";
import TabBookScreen from "../app/(tabs)/TabBookScreen";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation({ navigation }: any) {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerPosition: "right",
        drawerType: "permanent",
      }}
    >
      <Drawer.Screen name="Home" component={TabOneScreen} />
      <Drawer.Screen name="Books" component={TabBookScreen} />
    </Drawer.Navigator>
  );
}
