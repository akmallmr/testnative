import React from "react"
import { createStackNavigator } from "react-navigation"

import Practice from "../screens/Practice"
import SubjectDetail from "../screens/Practice/SubjectDetail"

const PracticeNavigator = createStackNavigator(
  {
    Practice: { screen: Practice },
    SubjectDetail: { screen: SubjectDetail }
  },
  {
    headerMode: "none",
    initialRouteKey: "Practice",
    navigationOptions: {
      gesturesEnabled: false
    }
  }
)

export default PracticeNavigator
