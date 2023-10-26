import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabOneScreen from "../app/(tabs)";
import TabBookScreen from "../app/(tabs)/TabBookScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={TabOneScreen} />
      <Tab.Screen name="Books" component={TabBookScreen} />
    </Tab.Navigator>
  );
}
