import React, { Component } from "react"
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  Platform
} from "react-native"

import styles from "./styles"
import Metrics from "../../../../utils/Metrics"

export default class WordTab extends Component {
  render() {
    let { data, state, nextPrevWord, playAudio } = this.props
    let { selectedAya, selectedWord, isPlaying } = state
    let { sura, aya, word, ar, en, id, trans } = data[selectedAya - 1][
      selectedWord
    ]
    // console.log(this.props)

    return (
      <View style={styles.tabContent}>
        <View style={styles.ayahContainer}>
          <View style={{ flex: 1 }} />
          <View style={styles.ayahWrapper}>
            {data[selectedAya - 1].map((item, idxWord) => {
              let { sura, aya, word, ar } = item
              let wordSelected = idxWord === selectedWord
              if (Platform.OS === "android") {
                //return data for android
                return (
                  <Text
                    onPress={() => nextPrevWord("GOTO", idxWord)}
                    key={`item-aya-word-${sura}-${aya}-${word}`}
                    style={[
                      styles.itemText,
                      wordSelected ? styles.itemTextActive : {}
                    ]}
                  >
                    {ar}{" "}
                  </Text>
                )
              } else {
                //return data for ios
                return (
                  <Text
                    onPress={() => nextPrevWord("GOTO", idxWord)}
                    key={`item-aya-word-${sura}-${aya}-${word}`}
                    style={[
                      styles.itemText,
                      wordSelected ? styles.itemTextActive : {}
                    ]}
                  >
                    {ar} ￼ ￼ ￼ ￼ ￼
                  </Text>
                )
              }
            })}
            <Text> </Text>
            <ImageBackground
              source={require("../../../../assets/images/icons/icon-number-ayah.png")}
              style={styles.itemNumber}
            >
              <Text style={styles.itemNumberText}>{aya}</Text>
            </ImageBackground>
          </View>
        </View>

        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => nextPrevWord("NEXT")}
            style={styles.prevNextButton}
          >
            <Image
              style={styles.image}
              source={require("../../../../assets/images/icons/icon-prev.png")}
            />
          </TouchableOpacity>
          <View style={styles.word}>
            <Text style={styles.wordText}>{ar}</Text>
            <TouchableOpacity
              disabled={isPlaying}
              onPress={() => playAudio()}
              style={[styles.sound, { opacity: isPlaying ? 0.3 : 1 }]}
            >
              <Image
                style={styles.image}
                source={require("../../../../assets/images/icons/icon-sound.png")}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => nextPrevWord("PREV")}
            style={styles.prevNextButton}
          >
            <Image
              style={styles.image}
              source={require("../../../../assets/images/icons/icon-next.png")}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <View style={styles.wordLatin}>
            <Text style={styles.wordLatinText}>{trans}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.wordLatin}>
            <Text style={styles.wordLatinText}>{en}</Text>
          </View>
        </View>
      </View>
    )
  }
}
