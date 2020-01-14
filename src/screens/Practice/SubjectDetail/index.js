import React, { Component } from "react"
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StatusBar,
  Platform,
  SafeAreaView
} from "react-native"

import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import * as Animatable from "react-native-animatable"
import Sound from "react-native-sound"

import { Header, Alert } from "../../../components"
import { Result, Button, QuestionIndex } from "../components"
import { SoundsPath, ImagesPath } from "../../../constants/index"
import * as Languages from "../../../constants/languages"

import { actionCreators } from "../../../models"
import styles from "./styles"

class SubjectDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      disabled: false,
      numStar: 0,
      currQuest: 0,
      isEnough: true,
      questions: [...props.questions.result.quizzes],
      answers: [],
      isStar: false,
      isSubmit: false
    }

    _PRACTICE = this
  }

  static navigationOptions = {
    gesturesEnabled: false
  }

  checkSound(typeSound) {
    const pSound = new Sound(SoundsPath[typeSound], e => {
      if (e) {
        console.log("error", e)
      } else {
        pSound.play(() => pSound.stop().release())
      }
    })
  }

  componentWillMount() {
    const { questions } = this.state
    let newAnswers = []
    for (let i = 0; i < questions.length; i++) {
      newAnswers.push({ valid: null, value: [] })
    }
    this.setState({ answers: newAnswers })
  }

  _getKeyExtractor(item, index) {
    return index.toString()
  }

  _changeQuestion(id) {
    this.refs.questions.scrollToIndex({ animated: true, index: id.toString() })
    this.setState({ currQuest: id })
    this.refs.answers.fadeInDown(800)
    this.refs.numQuestion.tada()
  }

  _tryAgain() {
    const { questions } = this.state
    let newAnswers = []
    this.refs.result.toggleShow(false)
    this._changeQuestion(0)
    for (let i = 0; i < questions.length; i++) {
      newAnswers.push({ valid: null, value: [] })
    }
    this.setState({ answers: newAnswers, numStar: 0 })
  }

  _startBounceIn(name) {
    this.refs[name].bounceIn(500)
  }

  _onPressBtnAnswer(id) {
    const { currQuest, isEnough } = this.state
    if (!isEnough) {
      this.refs.enoughAnswer.slideOutDown(1000)
      this.setState({ isEnough: true })
    }

    this._startBounceIn("btn" + id)
    this.setState(prevState => ({
      answers: prevState.answers.map((obj, index) =>
        currQuest === index
          ? Object.assign(obj, {
              valid: null,
              value: this._findAnswer(id)
                ? this._deleteAnswer(id)
                : [...obj.value, id]
            })
          : obj
      )
    }))
  }

  _onPressImgBtnAnswer(id) {
    _ROOT.click()
    this.setState({ disabled: true })
    this._onPressBtnAnswer(id)
    setTimeout(() => {
      this.setState({ disabled: false })
    }, 300)
  }

  _onBackButtonPress() {
    const fill = this.state.answers.filter(a => a.value.length !== 0)
    if (fill.length) {
      this.refs.alert.toggleShow(true)
    } else {
      this.props.navigation.goBack()
    }
  }

  _checkAnswer() {
    const { currQuest, questions, answers } = this.state
    const answer = answers[currQuest].value
    let valid = true

    if (this._correctAnswer() > 1 && answer.length < 2) {
      this.setState({ isEnough: true })
      this.checkSound("wrong_result")
      setTimeout(() => {
        this.setState({ isEnough: false })
        this.refs.enoughAnswer.slideInUp(500)
      }, 1)
    } else {
      answer.map((item, i) => {
        if (valid) valid = questions[currQuest].answers[item].valid
      })
      if (answer.length !== this._correctAnswer()) valid = false

      this.setState(prevState => ({
        answers: prevState.answers.map((obj, index) =>
          currQuest === index
            ? Object.assign(obj, { valid: valid, value: obj.value })
            : obj
        ),
        numStar: valid ? prevState.numStar + 1 : prevState.numStar
      }))
    }
  }

  _submitAnswers() {
    const { contentId } = this.props
    const { answers } = this.state
    this.setState({isSubmit: true})
    this.props.addCompleteQuiz(contentId, answers, res => {
      if (res.status) {
        if (res.httpStatus === 200) {
          this.refs.result.toggleShow(true, answers)
          this.props.getProfile(res => {
            this.props.setProfile(res.result)
          })
        } else if (res.httpStatus === 500) {
          this.refs.networkConnection.toggleShow(true)
        }
      } else {
        this.refs.networkConnection.toggleShow(true)
      }
      this.setState({isSubmit: false})
    })
  }

  _reloadPage() {
    setTimeout(() => {
      this._submitAnswers()
    }, 1000)
  }

  _findAnswer(id) {
    const { answers, currQuest } = this.state
    let isFind = answers[currQuest].value.find(a => a === id)
    return isFind !== undefined ? true : false
  }

  _deleteAnswer(id) {
    const { answers, currQuest } = this.state
    let isFirter = answers[currQuest].value.filter(a => a !== id)
    return isFirter
  }

  _correctAnswer() {
    const { currQuest, questions } = this.state
    const correct = questions[currQuest].answers.filter(a => a.valid !== 0)
    return correct.length
  }

  _renderStar() {
    const { numStar, questions } = this.state
    const starReq = questions.length / 3
    let star = []

    for (let i = 1; i <= 3; i++) {
      const check = numStar >= starReq * i
      star.push(
        <Animatable.View
          key={i}
          animation={check ? "bounceIn" : undefined}
          style={styles.life}
        >
          <Image
            source={
              check
                ? ImagesPath.icon.star.active
                : ImagesPath.icon.star.nonactive
            }
            style={styles.img}
            onLoad={() => {
              if (check) {
                this.state.isStar = true
                this.checkSound("star")
              }
            }}
          />
        </Animatable.View>
      )
    }

    return star
  }

  _checkAnswerSound(valid) {
    setTimeout(() => {
      if (!this.state.isStar) {
        valid
          ? this.checkSound("right_result")
          : this.checkSound("wrong_result")
      }
      this.state.isStar = false
    }, 50)
  }

  _renderItem = ({ item }) => {
    const { lang } = this.props
    const Lang = Languages[lang]

    return (
      <View style={styles.questionBackColor}>
        <View style={styles.question}>
          <View style={styles.questionLogo}>
            <Image source={ImagesPath.img.questionMark} style={styles.img} />
          </View>
          <Text style={styles[`questionText${Lang.alfaType}`]}>
            {item.question_description}
          </Text>
        </View>
      </View>
    )
  }

  render() {
    const { lang } = this.props
    const { questions, answers, currQuest, isEnough, disabled } = this.state
    const Lang = Languages[lang]
    const answer = answers[currQuest]
    const question = questions[currQuest]
    const isAnswerNull = answer.value.length === 0 && answer.valid === null
    const imgUrl = "http://app.islamicmindplus.com/uploads/"
    const isJawi = Lang.alfaType === "Jawi"
    const subjectTitle = this.props.navigation.getParam("subjectTitle", null)

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
              leftBtn="back"
              rightBtn="none"
              title={subjectTitle}
              isTextSmall={true}
              alfa={Lang.alfaType}
              titleColor="#fff"
              leftBtnPress={() => this._onBackButtonPress()}
            />
          </View>
          <Animatable.View animation="fadeIn" style={styles.lifeContainer}>
            {this._renderStar()}
          </Animatable.View>
          <View style={styles.contentContainer}>
            <View style={styles.content}>
              {/* Question Indicator */}
              <View>
                <QuestionIndex answers={answers} />
              </View>

              <Animatable.View
                delay={questions.length > 10 ? 1000 : question.length * 100}
                animation={"bounceIn"}
                style={styles.mainContent}
              >
                {/* Question */}
                <View style={{ zIndex: 1 }}>
                  <View style={styles.frame}>
                    <Animatable.Text
                      useNativeDriver={true}
                      ref="numQuestion"
                      style={styles.frameText}
                    >
                      {currQuest + 1 + " / " + questions.length}
                    </Animatable.Text>
                  </View>
                  <View>
                    <FlatList
                      ref="questions"
                      showsHorizontalScrollIndicator={false}
                      contentContainerStyle={styles.questionContainer}
                      horizontal={true}
                      data={questions}
                      extraData={this.state.isEnough}
                      keyExtractor={this._getKeyExtractor}
                      renderItem={this._renderItem}
                      pagingEnabled={true}
                      scrollEnabled={false}
                    />

                    <View style={styles.enoughAnswerContainer}>
                      <Animatable.View
                        animation="slideOutDown"
                        duration={1}
                        ref="enoughAnswer"
                        style={styles.enoughAnswerBackColor}
                      >
                        <View style={styles.enoughAnswer}>
                          <Text
                            style={styles[`enoughAnswerText${Lang.alfaType}`]}
                          >
                            {Lang.practice.error}
                          </Text>
                        </View>
                      </Animatable.View>
                    </View>
                  </View>
                </View>

                {/* Answers */}
                <Animatable.View
                  useNativeDriver={true}
                  easing="ease-out-back"
                  ref="answers"
                  style={[
                    styles.btnGroupContainer,
                    question.type === "bergambar" && styles.imgBtnGroupContainer
                  ]}
                >
                  {question.answers.map((item, i) => {
                    return question.type === "text" ? (
                      <Animatable.View
                        useNativeDriver={true}
                        ref={"btn" + i}
                        style={styles.btnGroup}
                        key={i}
                        animation={
                          !this._findAnswer(i) && !isEnough
                            ? "shake"
                            : undefined
                        }
                      >
                        <Button
                          disabled={answer.valid !== null}
                          onPress={() => this._onPressBtnAnswer(i)}
                          customChild={true}
                          backButtonStyle={styles.btnGroupBackBtn}
                          buttonStyle={styles.btnGroupBtn}
                          color={
                            this._findAnswer(i) ||
                            (item.valid === 1 && answer.valid !== null)
                              ? answer.valid !== null
                                ? item.valid === 1
                                  ? "green"
                                  : "red"
                                : "blue"
                              : "white"
                          }
                        >
                          <View
                            style={{
                              flexDirection: isJawi ? "row-reverse" : "row",
                              width: "100%"
                            }}
                          >
                            <View style={styles.optionIndex}>
                              <Text
                                style={[
                                  styles[`btnGroupText${Lang.alfaType}`],
                                  {
                                    color:
                                      this._findAnswer(i) ||
                                      (item.valid === 1 &&
                                        answer.valid !== null)
                                        ? "white"
                                        : "black"
                                  }
                                ]}
                              >
                                {Lang.practice.options[i]}
                              </Text>
                            </View>
                            <View
                              style={
                                styles[`option${isJawi ? "Right" : "Left"}`]
                              }
                            >
                              <Text
                                style={[
                                  styles[`btnGroupText${Lang.alfaType}`],
                                  {
                                    color:
                                      this._findAnswer(i) ||
                                      (item.valid === 1 &&
                                        answer.valid !== null)
                                        ? "white"
                                        : "black"
                                  }
                                ]}
                              >
                                {item.answer_description}
                              </Text>
                            </View>
                          </View>
                          {answer.valid !== null &&
                            (this._findAnswer(i) || item.valid === 1) && (
                              <Animatable.View
                                useNativeDriver={true}
                                style={[
                                  styles.btnGroupStatus,
                                  isJawi ? { right: 0 } : { left: 0 }
                                ]}
                                animation={
                                  answer.valid !== null ? "bounceIn" : undefined
                                }
                              >
                                <Image
                                  style={styles.img}
                                  source={
                                    ImagesPath.icon.answer[
                                      item.valid
                                        ? "correctCircle"
                                        : "wrongCircle"
                                    ]
                                  }
                                />
                              </Animatable.View>
                            )}
                        </Button>
                      </Animatable.View>
                    ) : (
                      <Animatable.View
                        key={i}
                        useNativeDriver={true}
                        ref={"btn" + i}
                        animation={
                          !this._findAnswer(i) && !isEnough
                            ? "shake"
                            : undefined
                        }
                        style={[
                          styles.imgBtnGroup,
                          styles[`imgBtnGroup${i % 2}`]
                        ]}
                      >
                        <TouchableOpacity
                          disabled={disabled || answer.valid !== null}
                          activeOpacity={0.7}
                          onPress={() => this._onPressImgBtnAnswer(i)}
                          style={{ flex: 1 }}
                        >
                          <View
                            style={[
                              styles.imgBtnBack,
                              this._findAnswer(i) && styles.imgBtnBackActive,
                              (this._findAnswer(i) || item.valid === 1) &&
                                answer.valid !== null &&
                                (item.valid === 1
                                  ? styles.imgBtnBackTrue
                                  : styles.imgBtnBackFalse)
                            ]}
                          >
                            <View
                              style={[
                                styles.imgBtn,
                                this._findAnswer(i) && styles.imgBtnActive,
                                (this._findAnswer(i) || item.valid === 1) &&
                                  answer.valid !== null &&
                                  (item.valid === 1
                                    ? styles.imgBtnTrue
                                    : styles.imgBtnFalse)
                              ]}
                            >
                              {i % 2 === 0 && (
                                <View style={styles.imgBtnAnswerRight}>
                                  <Image
                                    source={{ uri: imgUrl + item.img_filename }}
                                    style={styles.img}
                                  />
                                </View>
                              )}

                              <Animatable.View
                                style={styles.imgBtnStatus}
                                animation={
                                  answer.valid !== null ? "bounceIn" : undefined
                                }
                              >
                                {answer.valid !== null &&
                                  (this._findAnswer(i) || item.valid === 1) && (
                                    <Image
                                      style={styles.img}
                                      source={
                                        ImagesPath.icon.answer[
                                          item.valid
                                            ? "correctCircle"
                                            : "wrongCircle"
                                        ]
                                      }
                                    />
                                  )}
                              </Animatable.View>

                              {i % 2 === 1 && (
                                <View style={styles.imgBtnAnswerLeft}>
                                  <Image
                                    source={{ uri: imgUrl + item.img_filename }}
                                    style={styles.img}
                                  />
                                </View>
                              )}
                            </View>
                          </View>
                        </TouchableOpacity>
                      </Animatable.View>
                    )
                  })}
                </Animatable.View>
              </Animatable.View>
            </View>
          </View>

          <View style={styles.btnContainer}>
            <Button
              color="darkOrange"
              disabled={isAnswerNull || this.state.isSubmit}
              style={[
                styles.btn,
                { color: isAnswerNull || this.state.isSubmit ? "rgba(255,255,255,0.5)" : "#fff" }
              ]}
              alfa={Lang.alfaType}
              onPress={() =>
                answer.valid !== null
                  ? currQuest + 1 !== questions.length
                    ? this._changeQuestion(currQuest + 1)
                    : this._submitAnswers()
                  : this._checkAnswer()
              }
            >
              {answer.valid !== null
                ? Lang.practice.button[1].toUpperCase()
                : Lang.practice.button[0].toUpperCase()}
            </Button>
          </View>
        </View>
        <Result
          ref="result"
          lang={Lang}
          answers={answers}
          onLeftBtnPress={() => this._tryAgain()}
          onRightBtnPress={() => this.props.navigation.goBack()}
        />
        <Alert
          ref="alert"
          alfa={Lang.alfaType}
          title={Lang.practice.alert[1].title}
          desc={Lang.practice.alert[1].desc}
          leftBtnText={Lang.surah.alert.btn[0]}
          rightBtnText={Lang.surah.alert.btn[1]}
          onLeftBtnPress={() => this.props.navigation.goBack()}
          onRightBtnPress={() => this.refs.alert.toggleShow(false)}
          canCloseWrapper={false}
        />
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
            this._reloadPage()
          }}
        />
      </SafeAreaView>
    )
  }
}

const mapStateToProps = state => ({
  contentId: state.practiceData.contentId,
  questions: state.practiceData.question,
  lang: state.langSetting.lang
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubjectDetail)
