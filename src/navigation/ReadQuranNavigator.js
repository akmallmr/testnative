import React from "react"
import { createStackNavigator } from "react-navigation"

import SuraList from "../screens/Quran"
import ReadQuran from "../screens/Quran/ReadQuran"

const ReadQuranNavigator = createStackNavigator(
  {
    SuraList: { screen: SuraList },
    ReadQuran: { screen: ReadQuran }
  },
  {
    headerMode: "none",
    initialRouteKey: "SuraList",
    navigationOptions: {
      gesturesEnabled: false
    }
  }
)

export default ReadQuranNavigator
