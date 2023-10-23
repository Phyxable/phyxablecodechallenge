import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabOneScreen from "../app/(tabs)";

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
    </Drawer.Navigator>
  );
}
