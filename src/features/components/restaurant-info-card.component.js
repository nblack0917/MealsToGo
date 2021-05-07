import React from "react";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";

import { Spacer } from "../../components/spacer/spacer.component";
import { Text } from "../../components/typography/text.component";
import star from "../../../assets/star";
import open from "../../../assets/open";

import {
  Icon,
  RestaurantCard,
  RestaurantCardCover,
  Info,
  RatingRow,
  RatingEnd,
  Rating,
} from "./restaurant-info-card.styles";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Place to Eat",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg",
    ],
    address = "123 Fake Street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.ceil(rating)));

  return (
    <RestaurantCard elevation={5}>
      <Card.Content />
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Rating>
          <RatingRow>
            {ratingArray.map((_, i) => (
              <SvgXml
                xml={star}
                width={20}
                height={20}
                key={`star-${placeId}-${i}`}
              />
            ))}
          </RatingRow>
          <RatingEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large" />
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            <Spacer position="left" size="large" />
            <Icon source={{ uri: icon }} />
          </RatingEnd>
        </Rating>
        <Text variant="caption">{address}</Text>
      </Info>
    </RestaurantCard>
  );
};
