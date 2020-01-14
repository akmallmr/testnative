import React from "react"
import { Provider } from "react-redux"
import store from "./src/models/store"
import { createAppContainer } from "react-navigation"
import AppNavigator from "./src/navigation/router"
import Sound from "react-native-sound"
import { SoundsPath } from "./src/constants"

export default class Root extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      netStatus: null
    }
    _ROOT = this
  }

  click = () => {
    const s = new Sound(SoundsPath.click, e => {
      if (e) {
        console.log("error", e)
      } else {
        s.play(() => s.stop().release())
      }
    })
  }

  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    )
  }
}
