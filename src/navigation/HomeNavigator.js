import React from "react"
import { createStackNavigator } from "react-navigation"

import Home from "../screens/Home"

const HomeNavigator = createStackNavigator(
  {
    Home: { screen: Home }
  },
  {
    headerMode: "none",
    initialRouteKey: "Home"
  }
)

export default HomeNavigator
