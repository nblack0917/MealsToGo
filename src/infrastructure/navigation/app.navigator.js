import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeViewContainer } from "../../utils/safe-area.component";

import { Ionicons } from "@expo/vector-icons";

import { RestaurantsNavigator } from "./restaurants.navigator";

const Tab = createBottomTabNavigator();

const MapScreen = () => {
  return (
    <SafeViewContainer>
      <Text>Map!</Text>
    </SafeViewContainer>
  );
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ color, size }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

const RestaurantsTabScreen = () => {
  return <RestaurantsNavigator />;
};

const SettingsScreen = () => {
  return (
    <SafeViewContainer>
      <Text>Settings!</Text>
    </SafeViewContainer>
  );
};

const TAB_ICON = {
  Restaurants: "restaurant-outline",
  Map: "map-outline",
  Settings: "settings-outline",
};

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={createScreenOptions}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Restaurants" component={RestaurantsTabScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export const AppNavigator = (params) => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};
