import React, { Component } from "react"
import { View, TouchableOpacity, TextInput, Modal } from "react-native"

import { Image } from "react-native-animatable"
import { SafeAreaView } from "react-navigation"

import { ListView, ListItem, Header, CardList } from "../"
import { ImagesPath } from "../../constants"

import styles from "./styles"

class SearchModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      q: "",
      data: [],
      isShowing: false,
      disabled: false
    }
  }

  toggleModal(isShowing) {
    this.setState({ isShowing })
  }

  _changeText(dataName, data) {
    this.setState({
      [dataName]: data.replace(/\s+$/, "")
    })
  }

  _search = (keyword = "") => {
    let data = []
    _ROOT.click()
    if (keyword) {
      keyword = keyword.toLowerCase()
      data = this.props.data.filter((e, i) => {
        let matchText = new RegExp(keyword, "g")
        let matchs = e["title"].toLowerCase().match(matchText)
        return matchs
      })
    }

    this.setState({ data })
  }

  _onPress() {
    _ROOT.click()
    this.setState({ disabled: true })
    setTimeout(() => {
      this.setState({ disabled: false })
    }, 300)
  }

  _onPressSearchBtn(q) {
    this.refs.search.bounceIn(300)
    setTimeout(() => this._search(q), 150)
  }

  render() {
    const { q, data, isShowing, disabled } = this.state
    const { onCloseBtnPress, type, onCardDataPress, lang, title } = this.props

    return (
      <Modal
        visible={isShowing}
        transparent={true}
        animationType="slide"
        onRequestClose={() => this.setState({ q: "", data: [] })}
        onDismiss={() => this.setState({ q: "", data: [] })}
      >
        <SafeAreaView
          forceInset={{ top: "always", bottom: "never" }}
          style={styles.container}
        >
          <View style={{ height: 4 }} />
          <View style={styles.backColor}>
            <View style={styles.learnContainer}>
              <View style={styles.navContainer}>
                <Header
                  isSmall={true}
                  leftBtn="none"
                  rightBtn="close"
                  title={title ? title : lang.other[1]}
                  alfa={lang.alfaType}
                  titleColor="#fff"
                  rightBtnPress={() => onCloseBtnPress && onCloseBtnPress()}
                />
              </View>
              <View style={styles.searchBarContainer}>
                <TouchableOpacity
                  disabled={disabled}
                  activeOpacity={0.7}
                  onPress={() => this._onPressSearchBtn(q)}
                  style={styles.searchBarImg}
                >
                  <Image
                    ref="search"
                    source={ImagesPath.icon.search}
                    style={styles.img}
                  />
                </TouchableOpacity>
                <TextInput
                  autoCapitalize="none"
                  returnKeyType="search"
                  underlineColorAndroid="rgba(0,0,0,0)"
                  autoCorrect={false}
                  style={styles.searchBarInput}
                  value={q}
                  onChangeText={text => this._changeText("q", text)}
                  onSubmitEditing={() => this._search(q)}
                />
              </View>
              <View style={styles.contentContainer}>
                {type === "list" ? (
                  <ListView
                    keyExtractor={(item, index) => index.toString()}
                    data={data}
                    contentContainerStyle={{ backgroundColor: "transparent" }}
                    renderItem={({ item }) => (
                      <ListItem
                        text={item.title}
                        onPress={() => {
                          this._onPress()
                          onCardDataPress && onCardDataPress(item.contentId)
                        }}
                      />
                    )}
                  />
                ) : (
                  <CardList
                    data={data}
                    onDataPress={data =>
                      onCardDataPress && onCardDataPress(data)
                    }
                  />
                )}
              </View>
            </View>
          </View>
        </SafeAreaView>
      </Modal>
    )
  }
}

export default SearchModal
