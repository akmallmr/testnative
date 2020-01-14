import React, { Component } from "react"
import {
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  FlatList,
  TextInput
} from "react-native"
import { withNavigation } from "react-navigation"

import { ListItem, Header } from "../../../../components/index"
import { SURAH as suraList } from "../../../../constants/index"

import styles from "./styles"

class SearchModal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchText: "",
      data: []
    }
  }

  search = (keyword = "") => {
    let data = []
    _ROOT.click()
    if (keyword) {
      keyword = keyword.toLowerCase()
      data = suraList.filter((e, i) => {
        let matchText = new RegExp(keyword, "g")
        let matchs = e.name.toLowerCase().match(matchText)
        return matchs
      })
    }

    this.setState({ data })
  }

  render() {
    let { close, lang } = this.props
    let { data, searchText } = this.state

    return (
      <SafeAreaView style={styles.container}>
        <View style={{ height: 4 }} />
        <View style={styles.backColor}>
          <View style={styles.content}>
            <View style={styles.navContainer}>
              <Header
                alfa={lang.alfaType}
                isSmall={true}
                leftBtn="none"
                rightBtn="close"
                title={lang.other[3]}
                titleColor="#fff"
                rightBtnPress={() => close()}
              />
            </View>

            <View style={styles.searchWrapper}>
              <View style={styles.searchIconWrapper}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => this.search(searchText)}
                  style={styles.searchIcon}
                >
                  <Image
                    style={styles.imageContain}
                    source={require("../../../../assets/images/icons/icon-search.png")}
                  />
                </TouchableOpacity>
              </View>
              <View style={{ flex: 1 }}>
                <TextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  underlineColorAndroid="rgba(0,0,0,0)"
                  onChangeText={text => this.setState({ searchText: text })}
                  value={searchText}
                  style={styles.searchText}
                  returnKeyType="search"
                  onSubmitEditing={() => this.search(searchText)}
                />
              </View>
            </View>

            <View style={styles.contentWrapper}>
              <FlatList
                keyExtractor={e => "sura-search-" + e.key}
                style={{ flex: 1 }}
                contentContainerStyle={styles.contentList}
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={({ item }) => (
                  <ListItem
                    text={item.name}
                    onPress={() =>
                      Promise.all([close()]).then(() =>
                        this.props.navigation.navigate("ReadQuran", item)
                      )
                    }
                  />
                )}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    )
  }
}

export default withNavigation(SearchModal)
