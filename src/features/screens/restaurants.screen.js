import React, { useState, useContext } from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import { ActivityIndicator } from "react-native-paper";

import { SafeViewContainer } from "../../utils/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../components/spacer/spacer.component";
import { Search } from "../components/search.components";

import { RestaurantsContext } from "../../services/restaurants/restaurants.context";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;

const LoadingView = styled.View`
  position: absolute;
  top: 40%;
  left: 50%;
`;

const Loading = styled(ActivityIndicator)`
  margin-left: -40px;
`;

const LoadingIndicator = ({ isLoading }) => {
  return (
    <LoadingView>
      <Loading animating={isLoading} size={100} color={"red"} />
    </LoadingView>
  );
};

export const RestaurantsScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);

  return (
    <SafeViewContainer>
      <Search />
      {isLoading ? (
        <LoadingIndicator isLoading={isLoading} />
      ) : (
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => {
            // console.log(item)
            return (
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      )}
    </SafeViewContainer>
  );
};
