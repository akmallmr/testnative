import React, { Component } from "react"
import { View, TouchableOpacity, Text } from "react-native"

import styles from "./styles"

export default class TabsMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listTab: props.listTab ? props.listTab : ["Tab 1", "Tab 2"]
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.listTab !== prevState.listTab) {
      return { listTab: nextProps.listTab }
    } else return null
  }

  render() {
    const { activeTab, onTabSwitch, alfa, disabled } = this.props
    const { listTab } = this.state

    return (
      <View style={styles.container}>
        {listTab.map((data, index) => {
          return (
            <TouchableOpacity
              key={`tab${index}`}
              disabled={activeTab === index || disabled }
              activeOpacity={0.7}
              style={[styles.tab, activeTab === index && styles.tabActive]}
              onPress={() => {
                _ROOT.click()
                onTabSwitch && onTabSwitch(index)
              }}
            >
              <Text
                style={[
                  styles[`tabText${alfa ? alfa : "Latin"}`],
                  activeTab === index && styles.tabTextActive
                ]}
              >
                {data}
              </Text>
            </TouchableOpacity>
          )
        })}
      </View>
    )
  }
}
