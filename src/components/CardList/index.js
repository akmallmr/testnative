import React, { Component } from "react"
import { Text, FlatList, TouchableOpacity, Image } from "react-native"

import { View } from "react-native-animatable"

import styles from "./styles"

export default class CardList extends Component {
  constructor(props) {
    super(props)
    this.state = { disabled: false, isMounted: false }
  }

  componentDidMount() {
    this.setState({ isMounted: true })
  }

  componentWillUnmount() {
    this.state.isMounted = false
  }

  _getKeyExtractor = (item, index) => index.toString()

  _onPress(item, id) {
    const { onDataPress } = this.props
    _ROOT.click()
    this.setState({ disabled: true })
    this[`btn${id}`].bounceIn(300)
    setTimeout(() => onDataPress && onDataPress(item), 150)
    setTimeout(() => {
      this.state.isMounted && this.setState({ disabled: false })
    }, 300)
  }

  _renderItem = ({ item, index }) => {
    const { alfa } = this.props

    return item === true ? (
      <View style={{ flex: 1 }} />
    ) : (
      <TouchableOpacity
        disabled={this.state.disabled}
        activeOpacity={0.7}
        onPress={() => this._onPress(item, index)}
        style={{ flex: 1 }}
      >
        <View
          animation="bounceIn"
          delay={200 * index}
          ref={ref => (this[`btn${index}`] = ref)}
          style={[{ flex: 1 }, styles.backColor]}
          onPress={() => this._onPress(item, id)}
        >
          <View style={styles.cardContainer}>
            <View style={styles.cardImageBackColor}>
              <View style={styles.cardImage}>
                <Image source={{ uri: item.img }} style={styles.img} />
              </View>
            </View>
            <Text style={styles[`cardTitle${alfa ? alfa : "Latin"}`]}>
              {item.title}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    const { data, alfa, ...res } = this.props
    let newData = [...data]
    if (data.length % 2 === 1) newData.push(true)

    return (
      <View style={styles.container}>
        <FlatList
          {...res}
          data={newData}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
          keyExtractor={this._getKeyExtractor}
          numColumns={2}
          renderItem={this._renderItem}
          extraData={this.state.disabled}
        />
      </View>
    )
  }
}
