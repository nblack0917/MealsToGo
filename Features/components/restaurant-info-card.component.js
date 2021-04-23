import React from "react";
import { StyleSheet, Text } from "react-native";
import styled from "styled-components/native";
import { Card, Title, Paragraph } from "react-native-paper";

const RestaurantCard = styled(Card)`
  background: #fff;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: 16px;
`;

const CardTitle = styled(Title)`
  padding: 0 0 12px 16px;
  color: ${(props) => props.theme.colors.ui.primary};
`;

const CardAddress = styled(Text)`
  padding: 0 0 16px 16px;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Place to Eat",
    icon,
    photos = [
      "https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg",
    ],
    address = "123 Fake Street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <RestaurantCard elevation={5}>
      <Card.Content />
      <RestaurantCardCover
        key={name}
        source={{ uri: photos[0] }}
        style={styles.cover}
      />
      <CardTitle>{name}</CardTitle>
      <CardAddress>{address}</CardAddress>
    </RestaurantCard>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
  },
  cover: {
    //   flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    paddingBottom: 12,
    paddingLeft: 16,
  },
  address: {
    paddingBottom: 16,
    paddingLeft: 16,
  },
});
