import React, { Component } from "react"
import { View, Image, StatusBar } from "react-native"

import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import { ImagesPath } from "../../constants"
import { actionCreators } from "../../models"
import Sound from "react-native-sound"
import { SoundsPath } from "../../constants/index"
import { Alert } from "../../components"
import * as Languages from "../../constants/languages"

import ASM from "../../utils/ASM"

class Splash extends Component {
  goToNextScreen() {
    this.props.getLanguages(res => {
      if (res.status) {
        if (res.httpStatus === 200) {
          let listLang = []
          let defaultLang = null
          res.data.result.map((data, i) => {
            listLang = [...listLang, { id: i, code: `lang${data.id}` }]
            defaultLang = data.is_default ? `lang${data.id}` : defaultLang
          })
          this.props.setListLang(listLang)

          ASM.multiGet(["auth", "language"]).then(res => {
            const auth = JSON.parse(res.auth)
            const lang = JSON.parse(res.language)

            if (lang) {
              this.props.setLang(lang.lang)
            } else {
              this.props.setLang(defaultLang)
            }

            if (auth && auth.token) {
              this.props.setToken(auth.token)
              this.props.navigation.navigate("Main")
            } else {
              this.props.navigation.navigate("Auth")
            }
          })
        } else if (res.httpStatus === 500) {
          this.refs.networkConnection.toggleShow(true)
        }
      } else {
        this.refs.networkConnection.toggleShow(true)
      }
    })
  }

  componentDidMount = () => {
    const s = new Sound(SoundsPath.opening, e => {
      if (e) {
        console.log("error", e)
      } else {
        s.play(() => s.stop(status => this.goToNextScreen()).release())
      }
    })
  }

  render() {
    const Lang = Languages[this.props.lang]

    return (
      <View style={{ flex: 1, backgroundColor: "#6AA615" }}>
        <StatusBar backgroundColor="#6AA615" barStyle="light-content" />
        <View style={{ flex: 1 }}>
          <Image
            source={ImagesPath.img.splash}
            style={{
              flex: 1,
              width: null,
              height: null,
              resizeMode: "contain"
            }}
          />
        </View>
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
            this.componentDidMount()
          }}
        />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  lang: state.langSetting.lang
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash)
