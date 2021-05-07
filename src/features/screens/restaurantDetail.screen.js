import React from "react";
import { View, Text } from "react-native";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

export const RestaurantDetailScreen = ({ route, navigation }) => {
  const { restaurant } = route.params;

  return (
    <View>
      <RestaurantInfoCard restaurant={restaurant} />
      
    </View>
  );
};
