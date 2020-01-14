import React, { Component } from "react"
import { View, StatusBar, ImageBackground, SafeAreaView } from "react-native"
import Sound from "react-native-sound"
import { HelpModal, ResultModal, BoardScore, Header } from "../components/index"
import {
  ImagesPath,
  SoundsPath,
  HIJAIYAH,
  Languages
} from "../../../../constants/index"
import styles from "./styles"
import JManHero from "./JManHero"

import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as HijaiyahActions from "../../../../models/hijaiyah/actions"
import { Alert } from "../../../../components"

const { HURUF } = HIJAIYAH
const NUM_OF_STAR = [90, 140, 180]

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

class Hijaiyah1 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      question: [],
      questionSelection: -1,
      time: 60,
      score: 0,
      star: 0,
      selected: -1,
      state: 0,
      started: false,
      // Modal
      help: false,
      result: false
    }

    this.ticker
    this.textBuble
  }

  componentDidMount() {
    // this.start()
    setTimeout(() => this.setState({ help: true }), 1500)
  }

  componentWillUnmount() {
    clearInterval(this.ticker)
  }

  start = () => {
    Promise.all([this.tick(), this.nextGuess()]).then(() =>
      this.setState({ started: true })
    )
  }

  stop = () => {
    console.log(this)
  }

  restart = () => {
    Promise.all([
      this.setState({ score: 0, time: 60, help: false, result: false })
    ]).then(this.start)
  }

  back = () => {
    this.setState({ help: false, result: false }, () =>
      this.props.navigation.pop()
    )
  }

  twit = () => {
    let { question, questionSelection, result } = this.state
    if (result) return false
    let itemSelected = question[questionSelection]
    let sound = SoundsPath.hijaiyah[itemSelected.id]
    this.textBuble && this.textBuble.jello(1500)

    const s = new Sound(sound, e => {
      if (e) {
        console.log("error", e)
        this.setState({ popup: false })
      } else {
        s.setVolume(10)
        s.play(() => s.stop().release())
      }
    })
  }

  tick = () => {
    this.ticker = setInterval(() => {
      let { help, time } = this.state
      if (help) return false

      let nextTime = time - 1
      this.setState({ time: nextTime })

      if (nextTime < 1) {
        return this.onTimeIsUp()
      }
    }, 1000)
  }

  onTimeIsUp = () => {
    clearInterval(this.ticker)
    setTimeout(() => {
      let { score } = this.state
      let star = this.getNumStar(score)
      this.setState({ star: star, result: true, help: false }, () => {
        this.props.setDataScore("hijaiyah1", { score, star })
        clearInterval(this.ticker)
      })
    }, 1000)
  }

  getNumStar = score => {
    let star = 0
    NUM_OF_STAR.map((e, i) => {
      if (score >= e) star = i + 1
    })
    return star
  }

  nextGuess = () => {
    let getQuestion = HURUF.sort(() => 0.5 - Math.random()).slice(25, 30)
    if (this.state.time < 1) return
    this.setState(
      prevState => ({
        question: getQuestion,
        questionSelection: getRandom(1, 5),
        selected: -1,
        state: 0
      }),
      this.twit
    )
  }

  choiceAnswer = idx => {
    let { questionSelection } = this.state
    let answer = questionSelection === idx

    this.setState(
      prevState => {
        let state = answer ? 1 : 2
        let nextScore = answer ? prevState.score + 10 : prevState.score - 5
        return {
          selected: idx,
          state,
          score: nextScore > 0 ? nextScore : 0
        }
      },
      () => {
        this.soundChoice(answer, () => {
          if (answer) {
            this.nextGuess()
          } else {
            this.setState({
              selected: -1,
              state: 0
            })
          }
        })
      }
    )
  }

  soundChoice = (answer, _callback) => {
    const s = new Sound(
      SoundsPath[answer ? "right_result" : "wrong_result"],
      e => {
        if (e) {
          console.log("error", e)
        } else {
          s.play(() => {
            s.stop().release()
            _callback && _callback()
          })
        }
      }
    )
  }

  render() {
    let {
      question,
      questionSelection,
      time,
      score,
      star,
      state,
      selected,
      started
    } = this.state
    let { help, result } = this.state
    let LANGUAGE = Languages[this.props.lang]

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar hidden={true} />
        <ImageBackground
          style={{ flex: 1 }}
          source={ImagesPath.img.play.background.hijaiyah}
          resizeMode={"cover"}
        >
          <Header
            headerSource={ImagesPath.img.play.topBoard.guesshijaiyah1}
            leftButton={{
              source: ImagesPath.img.iqra.backIcon,
              onPress: () => {
                clearInterval(this.ticker)
                this.refs.alert.toggleShow(true)
              }
            }}
            rightButton={{
              source: ImagesPath.img.iqra.helpIcon,
              onPress: () => this.setState({ help: true })
            }}
          />

          <BoardScore time={time} score={score} />

          <View style={styles.wrapper}>
            <JManHero
              refText={element => (this.textBuble = element)}
              question={question}
              questionSelection={questionSelection}
              selectedList={selected}
              started={started}
              state={state}
              onPress={this.twit}
              choiceAnswer={this.choiceAnswer}
            />
          </View>
        </ImageBackground>

        <HelpModal
          source={ImagesPath.img.play.helpImage.hijaiyah1}
          text={LANGUAGE.play.help.hijaiyah1}
          visible={help}
          close={() =>
            this.setState({ help: false }, () => !started && this.start())
          }
        />

        <ResultModal
          visible={result}
          restart={this.restart}
          gamelist={this.back}
          report={() => this.props.navigation.push("ScoreBoard")}
          close={() =>
            this.setState({ help: false }, () => !started && this.start())
          }
          score={score}
          star={star}
          language={this.props.lang}
        />
        <Alert
          ref="alert"
          alfa={LANGUAGE.alfaType}
          title={LANGUAGE.hijaiyahPlay.alert[0].title}
          desc={LANGUAGE.hijaiyahPlay.alert[0].desc}
          leftBtnText={LANGUAGE.hijaiyahPlay.alert[0].confirmBtn}
          rightBtnText={LANGUAGE.hijaiyahPlay.alert[0].cancleBtn}
          onLeftBtnPress={() => this.props.navigation.goBack()}
          onRightBtnPress={() => {
            this.tick()
            this.refs.alert.toggleShow(false)
          }}
          canCloseWrapper={false}
        />
      </SafeAreaView>
    )
  }
}

const mapStateToProps = state => ({
  hijaiyah: state.hijaiyah,
  lang: state.langSetting.lang
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(HijaiyahActions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hijaiyah1)
