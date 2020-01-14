import React, { Component } from "react"
import { View, ActivityIndicator } from "react-native"

import {
  SafeAreaView,
  withNavigation,
  NavigationEvents
} from "react-navigation"

import {
  CardList,
  Header,
  SearchModal,
  Alert,
  Modal
} from "../../../../components"
import Content from "../Content"

import styles from "./styles"

class Subject extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedId: null,
      selectedSubject: null,
      subject: []
    }
  }

  _getLevel(fromQuiz) {
    _PRACTICE.props.getSaveProfile(res => {
      const { levelId } = this.props
      let listCompeleteQuiz = res.completed_quizzes

      if (fromQuiz && this.state.subject.length) {
        // Terjadi jika kembali dari kuis
        const { selectedId, selectedSubject } = this.state
        const selectedData = selectedSubject.data.find(
          i => i.contentId === selectedId
        )
        const completeQuiz = listCompeleteQuiz.find(
          e =>
            e.level_id === levelId &&
            e.pivot.content_id === selectedData.contentId
        )

        this.setState({
          subject: this.state.subject.map(item => ({
            ...item,
            data:
              item.key === selectedSubject.key
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
          })),
          selectedSubject: {
            ...selectedSubject,
            data: selectedSubject.data.map(item2 => ({
              ...item2,
              star:
                item2.contentId === selectedId
                  ? completeQuiz
                    ? completeQuiz.pivot.bintang
                    : 0
                  : item2.star
            }))
          }
        })
      } else {
        _PRACTICE.props.getSubjectV2(levelId, res => {
          if (res === 400) {
            this.refs.networkConnection.toggleShow(true)
          } else {
            res.data.result.map((data, idx) => {
              const { subject } = this.state
              const subjectItem = {
                key: "subject-" + idx,
                title: data.title,
                img: `http://app.islamicmindplus.com/uploads/${data.thumbnail}`,
                data: []
              }
              data.data.map((levelData, index) => {
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

  _itemPress(data) {
    _PRACTICE.props.getSubjectContent(data.contentId, res => {
      if (res.status) {
        if (res.httpStatus === 200) {
          if (res.data.result.quizzes.length) {
            this.setState({ selectedId: data.contentId })
            _PRACTICE.props.setQuestion(data.contentId, res.data)
            this.props.navigation.navigate("SubjectDetail", {
              subjectTitle: data.title
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
    const { subject, selectedSubject } = this.state
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
            <View style={{ flex: 1 }}>
              {subject.length ? (
                <View style={styles.contentContainer}>
                  <CardList
                    data={subject}
                    alfa={lang.alfaType}
                    onDataPress={data => {
                      this.setState({ selectedSubject: data }, () => {
                        this.refs.content.toggleModal(true)
                      })
                    }}
                  />
                </View>
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
          data={subject.length ? subject : {}}
          lang={lang}
          title={lang.other[4]}
          onCardDataPress={data => {
            this.setState({ selectedSubject: data }, () => {
              this.refs.search.toggleModal(false)
              this.refs.content.toggleModal(true)
            })
          }}
          onCloseBtnPress={() => this.refs.search.toggleModal(false)}
        />

        <Modal ref="content">
          <Content
            lang={lang}
            subjectName={selectedSubject ? selectedSubject.title : ""}
            data={selectedSubject ? selectedSubject.data : []}
            onCloseBtnPress={data => {
              if (data) {
                this._itemPress(data)
              } else {
                this.refs.content.toggleModal(false)
              }
            }}
          />
        </Modal>

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
