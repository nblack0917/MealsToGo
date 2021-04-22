import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState } from "react";

import { RestaurantsScreen } from "./Features/screens/restaurants.screen";

export default function App() {

  return (
    <>
      <RestaurantsScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
