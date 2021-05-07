import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../services/location/location.context";
import { divide } from "react-native-reanimated";

const SearchbarContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Search = (params) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  return (
    <SearchbarContainer>
      <Searchbar
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchbarContainer>
  );
};
