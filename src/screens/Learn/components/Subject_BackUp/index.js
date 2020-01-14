import React, { Component } from "react"
import {
  View,
  TouchableOpacity,
  FlatList,
  ActivityIndicator
} from "react-native"

import { SafeAreaView, withNavigation } from "react-navigation"
import { Image, Text } from "react-native-animatable"

import {
  ListView,
  ListItem,
  Header,
  SearchModal,
  Alert
} from "../../../../components"
import { ImagesPath } from "../../../../constants"

import styles from "./styles"

class Subject extends Component {
  constructor(props) {
    super(props)
    this.state = {
      disabled: false,
      activeSubject: 0,
      subject: []
    }
  }

  componentDidMount() {
    const { levelId } = this.props

    _LEARN.props.getSubjectV2(levelId, res => {
      if (res === 400) {
        this.refs.networkConnection.toggleShow(true)
      } else {
        res.data.result.map((data, i) => {
          const keyNames = Object.keys(data)
          const subjectItem = {
            key: "subject-" + i,
            subject: keyNames[0],
            data: []
          }
          data[keyNames[0]].map(levelData => {
            subjectItem.data = [
              ...subjectItem.data,
              {
                key: levelData.id,
                contentId: levelData.content_id,
                title: levelData.title
              }
            ]
          })
          this.setState({
            subject: [...this.state.subject, subjectItem]
          })
        })
      }
    })
  }

  reloadPage() {
    setTimeout(() => {
      this.componentDidMount()
    }, 1000)
  }

  _onPress() {
    _ROOT.click()
    this.setState({ disabled: true })
    setTimeout(() => {
      this.setState({ disabled: false })
    }, 300)
  }

  _switchLevel(subject) {
    const { activeSubject } = this.state
    this.refs.listLevel.scrollToIndex({
      animated: true,
      index: subject.toString()
    })
    this._onPress()
    this.setState({ activeSubject: subject })
    this.refs.levelName.fadeIn()
    this.refs[subject > activeSubject ? "next" : "prev"].bounceIn(300)
  }

  _itemPress(id) {
    const { subject, activeSubject } = this.state
    const otherContent = subject[activeSubject].data.filter(
      e => e.contentId > id
    )

    this._onPress()
    this.props.navigation.navigate("SubjectDetail", {
      contentId: id,
      otherContent: otherContent
    })
  }

  render() {
    const { activeSubject, subject, disabled } = this.state
    const { onCloseBtnPress, lang, levelName } = this.props

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
                title={levelName}
                alfa={lang.alfaType}
                rightBtnPress={() => onCloseBtnPress && onCloseBtnPress()}
                leftBtnPress={() => this.refs.search.toggleModal(true)}
              />
            </View>
            <View style={[styles.headerBackColor, styles.boxShadow]}>
              <View style={styles.headerContainer}>
                <TouchableOpacity
                  disabled={!activeSubject || disabled}
                  activeOpacity={0.7}
                  onPress={() => this._switchLevel(activeSubject - 1)}
                  style={[styles.headerBtn, !activeSubject && { opacity: 0.7 }]}
                >
                  <Image
                    ref="prev"
                    source={ImagesPath.icon.left}
                    style={styles.img}
                  />
                </TouchableOpacity>
                <Text
                  ref="levelName"
                  style={styles[`headerCurrentTitle${lang.alfaType}`]}
                >
                  {subject.length ? subject[activeSubject].subject : " "}
                </Text>
                <TouchableOpacity
                  disabled={
                    !subject.length ||
                    activeSubject === subject.length - 1 ||
                    disabled
                  }
                  activeOpacity={0.7}
                  onPress={() => this._switchLevel(activeSubject + 1)}
                  style={[
                    styles.headerBtn,
                    (!subject.length ||
                      activeSubject === subject.length - 1) && {
                      opacity: 0.7
                    }
                  ]}
                >
                  <Image
                    ref="next"
                    source={ImagesPath.icon.right}
                    style={styles.img}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ flex: 1 }}>
              {subject.length ? (
                <FlatList
                  ref="listLevel"
                  scrollEnabled={false}
                  showsHorizontalScrollIndicator={false}
                  pagingEnabled={true}
                  horizontal={true}
                  keyExtractor={e => "subject-" + e.key}
                  data={subject}
                  extraData={disabled}
                  renderItem={({ item }) => (
                    <View style={styles.contentContainer}>
                      <ListView
                        keyExtractor={e => "sura-" + e.key}
                        data={item.data}
                        extraData={disabled}
                        renderItem={({ item, id }) => (
                          <ListItem
                            alfa={lang.alfaType}
                            disabled={disabled}
                            text={item.title}
                            onPress={() => this._itemPress(item.contentId)}
                          />
                        )}
                      />
                    </View>
                  )}
                />
              ) : (
                <View style={[styles.contentContainer, { flex: 1 }]}>
                  <ActivityIndicator
                    size="large"
                    color="#fff"
                    style={styles.loading}
                  />
                </View>
              )}
            </View>
          </View>
        </View>

        <SearchModal
          ref="search"
          data={subject.length ? subject[activeSubject].data : {}}
          type="list"
          lang={lang}
          onCardDataPress={id => {
            this.refs.search.toggleModal(false)
            this._itemPress(id)
          }}
          onCloseBtnPress={() => this.refs.search.toggleModal(false)}
        />
        <Alert
          ref="networkConnection"
          canCloseWrapper={false}
          isSingleBtn={true}
          alfa={lang.alfaType}
          title={lang.errorNetwork.title}
          desc={lang.errorNetwork.desc}
          btnText={lang.errorNetwork.btn}
          onBtnPress={() => {
            this.refs.networkConnection.toggleShow(false)
            this.reloadPage()
          }}
        />
      </SafeAreaView>
    )
  }
}

export default withNavigation(Subject)
