import React from "react"
import { createStackNavigator } from "react-navigation"

import Auth from "../screens/Auth"

const AuthNavigator = createStackNavigator(
  {
    Auth: { screen: Auth }
  },
  {
    headerMode: "none",
    initialRouteKey: "Auth"
  }
)

export default AuthNavigator
