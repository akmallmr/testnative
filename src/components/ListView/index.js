import React from "react"
import { View, FlatList } from "react-native"

import styles from "./styles"

export default class ListView extends FlatList {
  render() {
    return (
      <View style={styles.container} >
        <FlatList
          style={{ flex: 1 }} 
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
          {...this.props}
        />
      </View>
    )
  }
}
