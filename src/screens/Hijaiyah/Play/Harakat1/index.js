import React, { Component } from "react"
import {
  View,
  StatusBar,
  Image,
  ImageBackground,
  SafeAreaView
} from "react-native"
import Sound from "react-native-sound"
import {
  Button,
  HelpModal,
  ResultModal,
  BoardScore,
  Header,
  AlertModal
} from "../components/index"
import {
  widthPercentageToDP,
  heightPercentageToDP
} from "../../../../utils/Responsive"
import {
  ImagesPath,
  SoundsPath,
  HIJAIYAH,
  Languages
} from "../../../../constants/index"

import styles from "./styles"
import PaperBig from "./PaperBig"

import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as HijaiyahActions from "../../../../models/hijaiyah/actions"
import { Alert } from "../../../../components"

const { HARAKAT_TYPE } = HIJAIYAH
const FILTER = [28, 29]
const HURUF = HIJAIYAH.HURUF.filter(e => !FILTER.includes(e.id))
const NUM_OF_STAR = [75, 100, 125]

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

const ListHarakat = props => {
  let { selectedList, onSelected, state } = props
  const choice = [
    ImagesPath.img.iqra.harakat.fathah.normal,
    ImagesPath.img.iqra.harakat.kasrah.normal,
    ImagesPath.img.iqra.harakat.dammah.normal
  ]

  return (
    <View
      style={{
        flexDirection: "row-reverse",
        justifyContent: "center",
        marginTop: heightPercentageToDP(3),
        height: heightPercentageToDP(10.5)
      }}
    >
      {choice.map((e, i) => (
        <Button
          key={"HijaiyahList-" + i}
          disabled={state !== 0}
          onPress={() => onSelected(i)}
          style={{
            width: widthPercentageToDP(25),
            height: widthPercentageToDP(25) * 0.736,
            maxHeight: heightPercentageToDP(10.5),
            maxWidth: heightPercentageToDP(10.5) * 1.358695652173913,
            marginHorizontal: heightPercentageToDP(1),
            opacity: state !== 0 && selectedList !== i ? 0 : 1
          }}
        >
          <Image source={e} style={styles.buttonImg} />
        </Button>
      ))}
    </View>
  )
}

class Harakat1 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      question: {},
      harokat: "fathah",
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

  start = () => {
    Promise.all([this.tick(), this.nextGuess()]).then(() =>
      this.setState({ started: true })
    )
  }

  restart = () => {
    this.setState(
      { score: 0, time: 60, help: false, result: false },
      this.start
    )
  }

  back = () => {
    this.setState({ help: false, result: false }, () =>
      this.props.navigation.pop()
    )
  }

  twit = () => {
    let { question, harokat } = this.state
    let sound = SoundsPath.harakat[HARAKAT_TYPE[harokat]][question.id]

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
        this.props.setDataScore("harokat1", { score, star })
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
    let getQuestion = HURUF.sort(() => 0.5 - Math.random())[1]
    if (this.state.time < 1) return
    this.setState(
      prevState => ({
        question: getQuestion,
        harokat: getRandom(0, 3),
        selected: -1,
        state: 0
      }),
      this.twit
    )
  }

  choiceAnswer = idx => {
    let { harokat } = this.state
    let answer = harokat === idx

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
    let { question, time, score, star, state, selected, started } = this.state
    let { help, result, alert } = this.state
    let LANGUAGE = Languages[this.props.lang]

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar hidden={true} />
        <ImageBackground
          style={{ flex: 1 }}
          source={ImagesPath.img.play.background.harokat}
          resizeMode={"cover"}
        >
          <Header
            headerSource={ImagesPath.img.play.topBoard.guessharokat}
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

          {started && <BoardScore time={time} score={score} />}

          {started && (
            <View style={styles.wrapper}>
              <PaperBig
                question={question}
                state={state}
                selected={selected}
                twit={this.twit}
              />

              <ListHarakat
                onSelected={this.choiceAnswer}
                selectedList={selected}
                state={state}
              />

              <Button
                disabled={state !== 0 || time < 1}
                onPress={this.twit}
                style={{
                  width: widthPercentageToDP(20.5),
                  height: widthPercentageToDP(20.5),
                  maxWidth: heightPercentageToDP(11),
                  maxHeight: heightPercentageToDP(11),
                  marginTop: heightPercentageToDP(4.5),
                  alignSelf: "center"
                }}
              >
                <Image
                  source={ImagesPath.img.play.soundIcon}
                  style={styles.buttonImg}
                />
              </Button>
            </View>
          )}
        </ImageBackground>

        <HelpModal
          source={ImagesPath.img.play.helpImage.harakat1}
          text={LANGUAGE.play.help.harokat1}
          visible={help}
          close={() =>
            this.setState({ help: false }, () => !started && this.start())
          }
        />

        <ResultModal
          visible={result}
          restart={this.restart}
          gamelist={this.back}
          report={this.restart}
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
)(Harakat1)
