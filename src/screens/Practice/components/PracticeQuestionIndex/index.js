import React, { Component } from "react"
import { FlatList, Image } from "react-native"
import { View } from "react-native-animatable"

import ImagesPath from "../../../../constants/img"

import styles from "./styles"

export default class PracticeQuestionIndex extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sectionSize: null,
      currQuest: _PRACTICE.state.currQuest
    }
  }

  _getKeyExtractor(item, index) {
    return index.toString()
  }

  _renderCircle = ({ item, index }) => {
    const { currQuest, sectionSize } = this.state
    const size = sectionSize.width / 10

    return (
      <View style={{ width: size, alignItems: "center" }}>
        <View
          delay={100 * index}
          animation={item.valid !== null ? "tada" : "bounceIn"}
          style={[
            styles.questionIndicator,
            currQuest === index && styles.questionIndicatorActive,
            item.valid !== null && { backgroundColor: "transparent" }
          ]}
        >
          {item.valid !== null && (
            <Image
              source={ImagesPath.icon.answer[item.valid ? "correct" : "wrong"]}
              style={styles.img}
              onLoadStart={() => _PRACTICE._checkAnswerSound(item.valid)}
            />
          )}
        </View>
      </View>
    )
  }

  componentDidUpdate() {
    const { currQuest } = this.state
    const nextIndex = _PRACTICE.state.currQuest
    if (currQuest !== nextIndex) {
      this.setState({ currQuest: nextIndex })
      if (nextIndex > 9)
        this.refs.scroll.scrollToIndex({
          index: nextIndex - 9
        })
    }
  }

  render() {
    const { sectionSize } = this.state
    const { answers } = this.props

    return (
      <View
        style={styles.container}
        onLayout={e => this.setState({ sectionSize: e.nativeEvent.layout })}
      >
        {sectionSize && (
          <FlatList
            ref="scroll"
            bounces={false}
            contentContainerStyle={styles.questionIndicatorContainer}
            horizontal={true}
            data={answers}
            extraData={this.state}
            showsHorizontalScrollIndicator={false}
            keyExtractor={this._getKeyExtractor}
            renderItem={this._renderCircle}
            getItemLayout={(data, index) => ({
              length: sectionSize.width / 10,
              offset: (sectionSize.width / 10) * index,
              index
            })}
          />
        )}
      </View>
    )
  }
}
