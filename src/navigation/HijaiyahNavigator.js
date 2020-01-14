import React from "react"
import { createStackNavigator } from "react-navigation"
import { fadeIn } from "react-navigation-transitions"

import Hijaiyah from "../screens/Hijaiyah"

import Iqra from "../screens/Hijaiyah/Iqra"
import IqraHijaiyah1 from "../screens/Hijaiyah/Iqra/Hijaiyah1"
import IqraHijaiyah2 from "../screens/Hijaiyah/Iqra/Hijaiyah2"
import IqraHarakat1 from "../screens/Hijaiyah/Iqra/Harakat1"
import IqraHarakat2 from "../screens/Hijaiyah/Iqra/Harakat2"
import IqraTanwin1 from "../screens/Hijaiyah/Iqra/Tanwin1"
import IqraTanwin2 from "../screens/Hijaiyah/Iqra/Tanwin2"

import Play from "../screens/Hijaiyah/Play"
import PlayHijaiyah1 from "../screens/Hijaiyah/Play/Hijaiyah1"
import PlayHijaiyah2 from "../screens/Hijaiyah/Play/Hijaiyah2"
import PlayHarakat1 from "../screens/Hijaiyah/Play/Harakat1"
import PlayHarakat2 from "../screens/Hijaiyah/Play/Harakat2"
import PlayTanwin1 from "../screens/Hijaiyah/Play/Tanwin1"
import PlayTanwin2 from "../screens/Hijaiyah/Play/Tanwin2"

const IqraNavigator = createStackNavigator(
  {
    Iqra: { screen: Iqra },
    Hijaiyah1: { screen: IqraHijaiyah1 },
    Hijaiyah2: { screen: IqraHijaiyah2 },
    Harakat1: { screen: IqraHarakat1 },
    Harakat2: { screen: IqraHarakat2 },
    Tanwin1: { screen: IqraTanwin1 },
    Tanwin2: { screen: IqraTanwin2 }
  },
  {
    headerMode: "none",
    transitionConfig: () => fadeIn(1000)
  }
)

const PlayNavigator = createStackNavigator(
  {
    Play: { screen: Play },
    Hijaiyah1: { screen: PlayHijaiyah1 },
    Hijaiyah2: { screen: PlayHijaiyah2 },
    Harakat1: { screen: PlayHarakat1 },
    Harakat2: { screen: PlayHarakat2 },
    Tanwin1: { screen: PlayTanwin1 },
    Tanwin2: { screen: PlayTanwin2 }
  },
  {
    headerMode: "none",
    transitionConfig: () => fadeIn(1000)
  }
)

const HijaiyahNavigator = createStackNavigator(
  {
    Hijaiyah: { screen: Hijaiyah },
    Iqra: { screen: IqraNavigator },
    Play: { screen: PlayNavigator },
  },
  {
    headerMode: "none",
    transitionConfig: () => fadeIn(1000),
    navigationOptions: {
      gesturesEnabled: false
    }
  }
)

export default HijaiyahNavigator
