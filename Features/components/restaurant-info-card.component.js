import React from "react";
import { StyleSheet, Text } from "react-native";
import styled from "styled-components/native";
import { Card,  Paragraph } from "react-native-paper";

const Title = styled.Text`
  padding: 16px;
  color: red;
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
    <Card elevation={5} style={styles.card}>
      <Card.Content />
      <Card.Cover key={name} source={{ uri: photos[0] }} style={styles.cover} />
      <Title style={styles.title}>{name}</Title>
      <Text style={styles.address}>{address}</Text>
    </Card>
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
