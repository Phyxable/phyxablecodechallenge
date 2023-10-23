import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabOneScreen from "../app/(tabs)";
import TabTwoScreen from "../app/(tabs)/two";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={TabOneScreen} />
    </Tab.Navigator>
  );
}
