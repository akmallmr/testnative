import React, { Component } from "react"
import { View, ActivityIndicator } from "react-native"

import { SafeAreaView, withNavigation } from "react-navigation"

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
      selectedSubject: null,
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
          const subjectItem = {
            key: "subject-" + i,
            title: data.title,
            img: `http://app.islamicmindplus.com/uploads/${data.thumbnail}`,
            data: []
          }
          data.data.map(subjectData => {
            subjectItem.data = [
              ...subjectItem.data,
              {
                key: subjectData.id,
                contentId: subjectData.content_id,
                title: subjectData.title
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

  _itemPress(data) {
    const { selectedSubject } = this.state
    const otherContent = selectedSubject.data.filter(
      e => e.contentId > data.contentId
    )

    this.props.navigation.navigate("SubjectDetail", {
      contentId: data.contentId,
      otherContent: otherContent
    })
  }

  render() {
    const { selectedSubject, subject } = this.state
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
