import React, { useState } from "react";
import { StatusBar, SafeAreaView, FlatList } from "react-native";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";

import { SafeViewContainer } from "../../utils/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { RestaurantCard } from "../components/restaurant-info-card.styles";
import { Spacer } from "../../components/spacer/spacer.component";

const SearchbarContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;

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
      <RestaurantList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
          { name: 7 },
          { name: 8 },
          { name: 9 },
          { name: 10 },
          { name: 11 },
          { name: 12 },
          { name: 13 },
          { name: 14 },
        ]}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeViewContainer>
  );
};
