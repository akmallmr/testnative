import React, { Component } from "react"
import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation"
import { fromBottom, fromRight, fadeIn } from "react-navigation-transitions"

import AuthNavigator from "./AuthNavigator"
import HomeNavigator from "./HomeNavigator"
import ReadQuranNavigator from "./ReadQuranNavigator"
import HijaiyahNavigator from "./HijaiyahNavigator"
import LearnNavigator from "./LearnNavigator"
import PracticeNavigator from "./PracticeNavigator"

import SplashScreen from "../screens/Splash"
import EditProfileScreen from "../screens/Home/EditProfile"

const MainNavigator = createStackNavigator(
  {
    Home: { screen: HomeNavigator },
    EditProfile: { screen: EditProfileScreen }
  },
  {
    headerMode: "none",
    initialRouteKey: "Main"
  }
)

const handleCustomTransition = ({ scenes }) => {
  const prevScene = scenes[scenes.length - 2]
  const nextScene = scenes[scenes.length - 1]

  // Custom transitions go there
  if (
    prevScene &&
    prevScene.route.routeName === "Main" &&
    nextScene.route.routeName === "ReadQuran"
  ) {
    return fromBottom(500)
  } else if (
    prevScene &&
    prevScene.route.routeName === "Main" &&
    nextScene.route.routeName === "Hijaiyah"
  ) {
    return fadeIn(300)
  }

  return fromRight(500)
}

const MainNavigatorModal = createStackNavigator(
  {
    Main: { screen: MainNavigator },
    Learn: { screen: LearnNavigator },
    Practice: { screen: PracticeNavigator },
    ReadQuran: { screen: ReadQuranNavigator },
    Hijaiyah: { screen: HijaiyahNavigator }
  },
  {
    headerMode: "none",
    transitionConfig: nav => handleCustomTransition(nav)
  }
)

const RootNavigator = createSwitchNavigator(
  {
    Splash: { screen: SplashScreen },
    Auth: { screen: AuthNavigator },
    Main: { screen: MainNavigatorModal }
  },
  {
    headerMode: "none",
    initialRouteKey: "Auth"
  }
)

export default createAppContainer(RootNavigator)
