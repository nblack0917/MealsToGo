import React from "react";
import { View, Text } from "react-native";

import { SafeViewContainer } from "../../utils/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { MenuCard } from '../components/restaurant-menu-componet'

export const RestaurantDetailScreen = ({ route, navigation }) => {
  const { restaurant } = route.params;

  return (
    <SafeViewContainer>
      <RestaurantInfoCard restaurant={restaurant} />
      <MenuCard />
    </SafeViewContainer>
  );
};
