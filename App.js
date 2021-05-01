import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { theme } from "./src/infrastructure/theme";
import { Ionicons } from "@expo/vector-icons";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { SafeViewContainer } from "./src/utils/safe-area.component";
import { RestaurantsScreen } from "./src/features/screens/restaurants.screen";
import { RestaurantsContext, RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context"

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "restaurant-outline",
  Map: "map-outline",
  Settings: "settings-outline",
};

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
  return <RestaurantsScreen />;
};

const SettingsScreen = () => {
  return (
    <SafeViewContainer>
      <Text>Settings!</Text>
    </SafeViewContainer>
  );
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

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsContextProvider>
            <NavigationContainer>
              <MyTabs />
            </NavigationContainer>
            <ExpoStatusBar style="auto" />
        </RestaurantsContextProvider> 
      </ThemeProvider>
    </>
  );
}
