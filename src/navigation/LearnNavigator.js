import React from "react"
import { createStackNavigator } from "react-navigation"

import Learn from "../screens/Learn"
import SubjectDetail from "../screens/Learn/SubjectDetail"
import Practice from "../screens/Practice/SubjectDetail"

const LearnNavigator = createStackNavigator(
  {
    Learn: { screen: Learn },
    SubjectDetail: { screen: SubjectDetail },
    Practice: { screen: Practice }
  },
  {
    headerMode: "none",
    initialRouteKey: "Learn",
    navigationOptions: {
      gesturesEnabled: false
    }
  }
)

export default LearnNavigator
