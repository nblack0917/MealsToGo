import React, { useState } from "react";
import { StyleSheet, StatusBar, SafeAreaView, Text, View } from "react-native";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const SafeViewContainer = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchbarContainer = styled(View)`
  padding: 16px;
`;

const ListViewContainer = styled(View)`
  flex: 1;
  padding: 16px;
  background-color: powderblue;
`;

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SafeViewContainer>
      <SearchbarContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchbarContainer>
      <ListViewContainer>
        <RestaurantInfoCard />
      </ListViewContainer>
    </SafeViewContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  searchbar: {
    // backgroundColor: "green",
    padding: 16,
  },
  listView: {
    flex: 1,
    backgroundColor: "powderblue",
    padding: 16,
  },
});
