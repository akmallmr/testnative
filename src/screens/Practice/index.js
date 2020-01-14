import React, { Component } from "react"
import {
  View,
  StatusBar,
  SafeAreaView,
  Platform,
  ActivityIndicator
} from "react-native"

import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import {
  Header,
  Modal,
  SearchModal,
  Alert,
  ListView,
  ListItem
} from "../../components"
import { Subject } from "./components"

import * as Languages from "../../constants/languages"
import { actionCreators } from "../../models"

import styles from "./styles"

class Practice extends Component {
  constructor(props) {
    super(props)
    this.state = {
      level: [],
      selectedID: 0
    }

    _PRACTICE = this
  }

  componentDidMount() {
    this.props.getLevelV2(res => {
      if (res === 400) {
        this.refs.networkConnection.toggleShow(true)
      } else {
        this.setState({ level: res.data.result })
      }
    })
  }

  reloadPage() {
    setTimeout(() => {
      this.componentDidMount()
    }, 1000)
  }

  _toggleModal(name, visible) {
    this.refs[name].toggleModal(visible)
  }

  render() {
    const { lang } = this.props
    const { selectedID, level } = this.state
    const Lang = Languages[lang]

    return (
      <SafeAreaView style={styles.container}>
        <View style={{ height: 4 }} />
        <StatusBar
          backgroundColor={Platform.OS === "android" ? "#405D1B" : "#81BA37"}
          barStyle="light-content"
        />
        <View style={styles.learnContainer}>
          <View style={styles.navContainer}>
            <Header
              isSmall={true}
              leftBtn="backRed"
              rightBtn="search"
              title={Lang.other[0]}
              alfa={Lang.alfaType}
              leftBtnPress={() => this.props.navigation.navigate("Home")}
              rightBtnPress={() => this._toggleModal("search", true)}
            />
          </View>
          <View style={styles.contentContainer}>
            {level.length ? (
              <ListView
                keyExtractor={e => "level-" + e.id}
                data={level}
                renderItem={({ item, index }) => (
                  <ListItem
                    alfa={Lang.alfaType}
                    text={Lang.darjahName[item.id - 1]}
                    onPress={() => {
                      _ROOT.click()
                      this.setState({ selectedID: index }, () =>
                        this._toggleModal("subject", true)
                      )
                    }}
                  />
                )}
              />
            ) : (
              <ActivityIndicator
                size="large"
                color="#fff"
                style={styles.loading}
              />
            )}
          </View>
        </View>

        <SearchModal
          ref="search"
          type="list"
          data={level.map((item, idx) => ({
            contentId: idx,
            title: Lang.darjahName[item.id - 1]
          }))}
          lang={Lang}
          onCardDataPress={id => {
            this.setState({ selectedID: id }, () => {
              this._toggleModal("subject", true)
              this._toggleModal("search", false)
            })
          }}
          onCloseBtnPress={() => {
            this._toggleModal("search", false)
          }}
        />

        <Modal ref="subject">
          <Subject
            lang={Lang}
            levelId={level.length ? level[selectedID].id : null}
            levelName={
              level.length ? Lang.darjahName[level[selectedID].id - 1] : null
            }
            langId={parseInt(this.props.lang.split("lang")[1])}
            onCloseBtnPress={() => this._toggleModal("subject", false)}
          />
        </Modal>

        <Alert
          ref="networkConnection"
          canCloseWrapper={false}
          isSingleBtn={true}
          alfa={Lang.alfaType}
          title={Lang.errorNetwork.title}
          desc={Lang.errorNetwork.desc}
          btnText={Lang.errorNetwork.btn}
          onBtnPress={() => {
            this.refs.networkConnection.toggleShow(false)
            this.reloadPage()
          }}
        />
      </SafeAreaView>
    )
  }
}

const mapStateToProps = state => ({
  lang: state.langSetting.lang,
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Practice)
