import React, { Component } from "react"
import {
  View,
  TouchableOpacity,
  FlatList,
  ActivityIndicator
} from "react-native"

import {
  SafeAreaView,
  withNavigation,
  NavigationEvents
} from "react-navigation"
import { Image, Text } from "react-native-animatable"

import {
  ListView,
  ListItemStar,
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
      selectedId: null,
      subject: []
    }
  }

  _getLevel(softReload) {
    _PRACTICE.props.getSaveProfile(res => {
      const { levelId } = this.props
      let listCompeleteQuiz = res.completed_quizzes

      if (softReload) {
        // Terjadi jika kembali dari kuis
        const { subject, activeSubject, selectedId } = this.state
        const selectedData = subject[activeSubject].data.find(
          i => i.contentId === selectedId
        )
        const completeQuiz = listCompeleteQuiz.find(
          e =>
            e.level_id === levelId &&
            e.pivot.content_id === selectedData.contentId
        )

        this.setState({
          subject: subject.map((item, idx) => ({
            ...item,
            data:
              idx === activeSubject
                ? item.data.map(item2 => ({
                    ...item2,
                    star:
                      item2.contentId === selectedId
                        ? completeQuiz
                          ? completeQuiz.pivot.bintang
                          : 0
                        : item2.star
                  }))
                : item.data
          }))
        })
      } else {
        _PRACTICE.props.getSubjectV2(levelId, res => {
          if (res === 400) {
            this.refs.networkConnection.toggleShow(true)
          } else {
            res.data.result.map((data, idx) => {
              const { subject } = this.state
              const keyNames = Object.keys(data)
              const subjectItem = {
                key: idx,
                subject: keyNames[0],
                data: []
              }
              data[keyNames[0]].map((levelData, index) => {
                const completeQuiz = listCompeleteQuiz.find(
                  e =>
                    e.level_id === levelId &&
                    e.pivot.content_id === levelData.content_id
                )
                subjectItem.data = [
                  ...subjectItem.data,
                  {
                    key: index,
                    contentId: levelData.content_id,
                    title: levelData.title,
                    star: completeQuiz ? completeQuiz.pivot.bintang : 0
                  }
                ]
              })
              this.setState({ subject: [...subject, subjectItem] })
            })
          }
        })
      }
    })
  }

  componentDidMount() {
    this._getLevel()
  }

  reloadPage() {
    setTimeout(() => {
      this._getLevel()
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
    this._onPress()
    const { subject, activeSubject } = this.state
    const title = subject[activeSubject].data.find(e => e.contentId === id)
      .title
    _PRACTICE.props.getSubjectContent(id, res => {
      if (res.status) {
        if (res.httpStatus === 200) {
          if (res.data.result.quizzes.length) {
            this.setState({ selectedId: id })
            _PRACTICE.props.setQuestion(id, res.data)
            this.props.navigation.navigate("SubjectDetail", {
              subjectTitle: title
            })
          } else {
            this.refs.alert.toggleShow(true)
          }
        } else if (res.httpStatus === 500) {
          this.refs.networkConnection.toggleShow(true)
        }
      } else {
        this.refs.networkConnection.toggleShow(true)
      }
    })
  }

  render() {
    const { activeSubject, subject, disabled } = this.state
    const { onCloseBtnPress, lang, levelName } = this.props

    return (
      <SafeAreaView forceInset={{ top: "always" }} style={styles.container}>
        <NavigationEvents onDidFocus={() => this._getLevel(true)} />
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
                          <ListItemStar
                            alfa={lang.alfaType}
                            disabled={disabled}
                            star={item.star}
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
          ref="alert"
          alfa={lang.alfaType}
          isSingleBtn={true}
          title={lang.practice.alert[0].title}
          desc={lang.practice.alert[0].desc}
          btnText={lang.auth.alert.btn}
          onBtnPress={() => this.refs.alert.toggleShow(false)}
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
