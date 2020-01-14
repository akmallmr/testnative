import React, { Component } from "react"
import { View } from "react-native"

import { SafeAreaView, withNavigation } from "react-navigation"

import {
  ListView,
  ListItemStar,
  Header,
  SearchModal
} from "../../../../components"

import styles from "./styles"

class Subject extends Component {
  constructor(props) {
    super(props)

    this.state = {
      disabled: false
    }
  }

  _onPress() {
    _ROOT.click()
    this.setState({ disabled: true })
    setTimeout(() => {
      this.setState({ disabled: false })
    }, 300)
  }

  _itemPress(data) {
    const { onCloseBtnPress } = this.props
    this._onPress()
    onCloseBtnPress && onCloseBtnPress(data)
  }

  render() {
    const { onCloseBtnPress, lang, data, subjectName } = this.props

    return (
      <SafeAreaView forceInset={{ top: "always" }} style={styles.container}>
        <View style={{ height: 4 }} />
        <View style={styles.backColor}>
          <View style={styles.learnContainer}>
            <View style={styles.navContainer}>
              <Header
                isSmall={true}
                leftBtn="search"
                rightBtn="close"
                title={subjectName}
                alfa={lang.alfaType}
                rightBtnPress={() => onCloseBtnPress && onCloseBtnPress()}
                leftBtnPress={() => this.refs.search.toggleModal(true)}
              />
            </View>
            <View style={{ flex: 1 }}>
              {data && data.length ? (
                <View style={styles.contentContainer}>
                  <ListView
                    keyExtractor={e => "content-" + e.contentId}
                    data={data}
                    extraData={this.state.disabled}
                    renderItem={({ item, id }) => (
                      <ListItemStar
                        disabled={this.state.disabled}
                        star={item.star}
                        alfa={lang.alfaType}
                        text={item.title}
                        onPress={() => this._itemPress(item)}
                      />
                    )}
                  />
                </View>
              ) : (
                <View style={styles.contentContainer} />
              )}
            </View>
          </View>
        </View>

        <SearchModal
          ref="search"
          type="list"
          data={data && data.length ? data : {}}
          lang={lang}
          title={lang.other[4]}
          onCardDataPress={id => {
            this._itemPress(data.find(i => i.contentId === id))
            this.refs.search.toggleModal(false)
          }}
          onCloseBtnPress={() => this.refs.search.toggleModal(false)}
        />
      </SafeAreaView>
    )
  }
}

export default withNavigation(Subject)
