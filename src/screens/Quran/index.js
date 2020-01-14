import React, { Component } from "react"
import {
  StyleSheet,
  View,
  StatusBar,
  Modal,
  SafeAreaView,
  Platform
} from "react-native"

import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import Metrics from "../../utils/Metrics"
import { widthPercentageToDP } from "../../utils/Responsive"
import Color from "../../styles/colors"

import { SURAH as suraList } from "../../constants/index"
import { SearchModal } from "./components/index"
import { ListView, ListItem, Header } from "../../components"
import { actionCreators } from "../../models"

import * as Languages from "../../constants/languages"

class SuraList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchModal: false,
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

  render() {
    const { lang } = this.props
    const Lang = Languages[lang]
    let { searchModal, disabled } = this.state

    return (
      <SafeAreaView style={styles.container}>
        <View style={{ height: 4 }} />
        <StatusBar
          backgroundColor={Color.primary.green}backgroundColor={Platform.OS === "android" ? '#405D1B' : "#81BA37"}
          barStyle="light-content"
        />

        <View style={styles.containerWrapper}>
          <View style={styles.content}>
            <View style={styles.navContainer}>
              <Header
                alfa={Lang.alfaType}
                isSmall={true}
                leftBtn="search"
                rightBtn="close"
                title={Lang.other[2]}
                leftBtnPress={() => this.setState({ searchModal: true })}
                rightBtnPress={() => this.props.navigation.pop()}
              />
            </View>

            <View
              style={{
                flex: 1,
                borderRadius: widthPercentageToDP(4),
                backgroundColor: Color.primary.darkPaleGreen,
                overflow: "hidden"
              }}
            >
              <ListView
                keyExtractor={e => "sura-" + e.key}
                data={suraList}
                contentContainerStyle={{
                  paddingTop: widthPercentageToDP(3),
                  paddingBottom: widthPercentageToDP(2)
                }}
                extraData={disabled}
                renderItem={({ item }) => (
                  <ListItem
                    disabled={disabled}
                    text={item.name}
                    onPress={() =>{
                      this._onPress()
                      this.props.navigation.navigate("ReadQuran", item)
                    }}
                  />
                )}
              />
            </View>
          </View>
        </View>

        {/* { searchModal && <View style={styles.bg} /> } */}

        <Modal onRequestClose={() => this.setState({ searchModal: false })} visible={searchModal} transparent={true} animationType={"slide"}>
          <SearchModal lang={Lang} close={() => this.setState({ searchModal: false })} />
        </Modal>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.primary.green
  },
  bg: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#000",
    opacity: 0.15
  },

  statusBar: {
    height: 20,
    backgroundColor: Color.primary.green
  },
  containerWrapper: {
    flex: 1,
    backgroundColor: Color.primary.green
  },

  navContainer: {
    marginVertical: widthPercentageToDP(2)
  },

  content: {
    flex: 1,
    backgroundColor: Color.primary.paleGreen,
    borderTopLeftRadius: widthPercentageToDP(5),
    borderTopRightRadius: widthPercentageToDP(5),
    paddingHorizontal: Metrics.screenWidth * 0.04,
    paddingBottom: Metrics.screenWidth * 0.04
  },

  headerWrapper: {
    flexDirection: "row",
    height: Metrics.screenWidth * 0.12,
    justifyContent: "center",
    alignItems: "center"
  },
  headerTitle: {
    textAlign: "center",
    fontSize: Metrics.screenWidth * 0.06,
    fontFamily: Platform.OS === "android" ? "PoetsenoneRegular" : "poetsenone-regular"
  },

  contentWrapper: {
    flex: 1,
    backgroundColor: Color.primary.darkPaleGreen,
    borderRadius: 15
  }
})

const mapStateToProps = state => ({
  lang: state.langSetting.lang
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SuraList)