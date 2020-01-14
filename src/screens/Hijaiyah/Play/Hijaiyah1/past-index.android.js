import React, { Component } from "react"
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Image,
  ImageBackground,
  SafeAreaView
} from "react-native"
import * as Animatable from 'react-native-animatable'
import Sound from 'react-native-sound'
import { Button, HelpModal, ResultModal, BoardScore, Header } from "../../components/index"
import { widthPercentageToDP, heightPercentageToDP } from "../../../../utils/Responsive"
import { ImagesPath, SoundsPath, HIJAIYAH } from "../../../../constants/index"
import styles from "./styles"

const { HURUF, COLOR } = HIJAIYAH
const getAnimationY = (fromOpacity, toOpacity, fromPos, toPos) => {
  return {
    from: { opacity: fromOpacity, translateY: fromPos },
    to: { opacity: toOpacity, translateY: toPos }
  }
}
const getAnimationX = (fromOpacity, toOpacity, fromPos, toPos) => {
  return {
    from: { opacity: fromOpacity, translateX: fromPos },
    to: { opacity: toOpacity, translateX: toPos }
  }
}

const STYLE_ITEM = {
  "1": { "f": 1.3, "lh": 2 }, //alif
  "2": { "f": 1.3, "lh": 1.08 }, //ba
  "3": { "f": 1.3, "lh": 1.25 }, //ta
  "4": { "f": 1.3, "lh": 1.25 }, //sa
  "5": { "f": 1.15, "lh": 0.87 }, //jim
  "6": { "f": 1.1, "lh": 0.85 }, //kha
  "7": { "f": 1.05, "lh": 0.85 }, //kho
  "8": { "f": 1.2, "lh": 1.2 }, //dal
  "9": { "f": 1.1, "lh": 1.22 }, //zal
  "10": { "f": 1.2, "lh": 1 }, //ra
  "11": { "f": 1.1, "lh": 1 }, //zain
  "12": { "f": 1.2, "lh": 1 }, //sin
  "13": { "f": 1, "lh": 1 }, //syin
  "14": { "f": 1.1, "lh": 1 }, //sad
  "15": { "f": 1.1, "lh": 1 },//tad
  "16": { "f": 1.3, "lh": 1.3 }, //to
  "17": { "f": 1.3, "lh": 1.5 }, //do
  "18": { "f": 1, "lh": 0.8 }, //ain
  "19": { "f": 0.95, "lh": 0.85 }, //gain
  "20": { "f": 1.2, "lh": 1.3 },  //fa
  "21": { "f": 1.3, "lh": 1.2 }, //kof
  "22": { "f": 1.4, "lh": 1.4 }, // kaf
  "23": { "f": 1.25, "lh": 1.2 }, // lam
  "24": { "f": 1.3, "lh": 1 }, //mim
  "25": { "f": 1.3, "lh": 1.15 }, //nun 
  "26": { "f": 1.4, "lh": 1.05 }, //wau
  "27": { "f": 2, "lh": 1.9 }, //ha
  "28": { "f": 1.3, "lh": 1.5 },  //lam alif
  "29": { "f": 2, "lh": 1.87 }, //hamjah
  "30": { "f": 1.2, "lh": 1  } //ya
}

const JManHero = (props) => {
  let { state, question, onPress, refText, started } = props
  const jBoy = [ 
    ImagesPath.img.play.jBoy.answer, 
    ImagesPath.img.play.jBoy.answerTrue, 
    ImagesPath.img.play.jBoy.answerFalse 
  ]
  const choice = [ 
    ImagesPath.img.play.trueChoice,
    ImagesPath.img.play.falseChoice,
  ]
  const getWidth = (percen = 100) => {
    return (widthPercentageToDP(79.18) > 328.7 ? 328.7 : widthPercentageToDP(79.18)) * percen / 100 
  }

  return (
    <View 
      style={{ 
        width: getWidth(), 
        height: getWidth() * 1.4102564102564104,
      }}
    >
      {
        jBoy.map((e, i) => (
          <Image 
            key={'jBoyHijaiyah-'+i}
            source={e} 
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              flex: 1,
              width: null,
              height: null,
              resizeMode: 'contain',
              opacity: state === i ? 1 : 0
            }} 
          />
        ))
      }

      { started &&
        <ImageBackground 
          source={ImagesPath.img.play.bubbleIcon} 
          resizeMode={'contain'} 
          style={{
            width: getWidth(44),
            height: getWidth(44) * .8645833333333334,
            position: 'absolute',
            top: getWidth(16.5),
            right: -(getWidth(10)),
            // overflow: 'hidden',
            flexDirection: 'row'
          }}
        >
          <View style={{ position: 'absolute', left: '14%', right: 0, top: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity disabled={state !== 0} onPress={onPress}>
                <Animatable.Text ref={(element) => refText(element)} style={[styles.hijaiyahText, {
                    textAlign: 'center',
                    fontFamily: 'Uthman',
                    fontSize: getWidth(20) * STYLE_ITEM[question.id].f,
                    lineHeight: getWidth(22 * 1.4166666666666667) * STYLE_ITEM[question.id].lh,
                    color: COLOR[question.id % 6],
                    textAlignVertical: 'center',
                    left: -5
                }]}>{`${question.arb+' '}`}</Animatable.Text>
              </TouchableOpacity>
          </View>
          {
            choice.map((e, i) => (
              <Image 
                key={'Choice-'+(i+1)}
                source={e} 
                style={{
                  width: getWidth(21),
                  height: getWidth(21),
                  position: 'absolute',
                  bottom: -getWidth(10.5),
                  left: getWidth(10),
                  opacity: state === i + 1 ? 1 : 0,
                  resizeMode: 'contain',
                }} 
              />
            ))
          }
        </ImageBackground>
      }
    </View>
  )
}

const ListHuruf = (props) => {
  let { state, question, choiceAnswer, selectedList } = props
  const getWidth = (percen = 100) => {
    return (widthPercentageToDP(90) > 373 ? 373 : widthPercentageToDP(90)) * percen / 100 
  }
  return (
    <Animatable.View 
      animation={'zoomIn'}
      style={{
        position: 'absolute',
        alignSelf: 'center',
        width: getWidth(),
        height: getWidth() * .2674897119341564,
        bottom: getWidth(30),
        paddingHorizontal: getWidth(4),
        borderRadius: getWidth(7),
        overflow: 'hidden',
        flexDirection: 'row'
      }}
    >
      <View style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, backgroundColor: '#FFF', opacity: .85, }} />
      {
        question.map((e, idx) => (
          <TouchableOpacity 
            key={'ListHurufItem-'+e.id} 
            disabled={state !== 0}
            onPress={() => choiceAnswer(idx)} 
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center', opacity: ((state === 0) || (selectedList === idx)) ? 1 : .3}}
          >
            <Text 
            style={{
              textAlign: 'center',
              fontFamily: 'Uthman',
              fontSize: getWidth(14) * STYLE_ITEM[e.id].f,
              lineHeight: getWidth(15 * 1.4166666666666667) * STYLE_ITEM[e.id].lh,
              color: COLOR[e.id % 6],
              textAlignVertical: 'center'
            }}>{`${e.arb+' '}`}</Text>
          </TouchableOpacity>
        ))
      }
    </Animatable.View>
  )
}

function getRandom(min, max){
	return Math.floor(Math.random() * (max - min) + min);
}

export default class Hijaiyah1 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      question: [],
      questionSelection: -1,
      time: 60,
      score: 0,
      selected: -1,
      state: 0,
      started: false,
      // Modal
      help: false,
      result: false,
    }

    this.ticker
    this.textBuble
  }

  componentDidMount() {
    // this.start()
    setTimeout(() => this.setState({ help: true }), 1500)
  }

  start = () => {
    Promise.all([
      this.tick(),
      this.nextGuess()      
    ]).then(() => this.setState({ started: true }))
  }

  restart = () => {
    Promise.all([
      this.setState({ score: 0, time: 60, help: false, result: false })    
    ]).then(this.start)
  }

  back = () => {
    this.setState({ help: false, result: false }, () => this.props.navigation.pop())
  }

  twit = () => {
    let { question, questionSelection } = this.state
    let itemSelected = question[questionSelection]
    let sound = SoundsPath.hijaiyah[itemSelected.id]
    this.textBuble && this.textBuble.jello(1500)
    
    const s = new Sound(sound, (e) => {
      if (e) {      
        console.log('error', e);
        this.setState({ popup: false })
      } else {
        s.setVolume(10)
        s.play(() => s.stop().release());
      }
    }); 
  }

  tick = () => {
    this.ticker = setInterval(() => {
      let nextTime = this.state.time - 1
      if(nextTime < 0) {
        return this.setState({ result: true }, () => clearInterval(this.ticker))
      }
      this.setState((prevState) => ({
        time: prevState.time - 1
      }))
    }, 1000)
  }

  nextGuess = () => {
    let getQuestion = HURUF.sort(() => .5 - Math.random()).slice(25,30)
    this.setState((prevState) => ({
      question: getQuestion,
      questionSelection: getRandom(1, 5),
      selected: -1, 
      state: 0
    }), this.twit)
  }

  choiceAnswer = (idx) => {
    let { questionSelection } = this.state
    let answer = (questionSelection === idx) 

    this.setState((prevState) => {
      let state = answer ? 1 : 2
      let nextScore = answer ? prevState.score + 10 : prevState.score  - 5
      return ({ 
        selected: idx, 
        state,
        score: nextScore > 0 ? nextScore : 0
      })
    }, () => {
      this.soundChoice(answer, () => {
        if(answer) {
          this.nextGuess()
        } else {
          this.setState({ 
            selected: -1, 
            state: 0
          })
        }
      })
    })
  }

  soundChoice = (answer, _callback) => {
    const s = new Sound(SoundsPath[answer ? 'right_result' : 'wrong_result'], (e) => {
      if (e) {      
        console.log('error', e);
      } else {
        s.play(() => {
          s.stop().release()
          _callback && _callback()
        });
      }
    });
  }

  render() {
    let { question, questionSelection, time, score, state, selected, started } = this.state
    let { help, result } = this.state

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar hidden={true} />
        <ImageBackground style={{ flex: 1 }} source={ImagesPath.img.play.background.guesshijaiyah} resizeMode={'cover'}>
         
          <Header 
            headerSource={ImagesPath.img.play.topBoard.guesshijaiyah1} 
            leftButton={{
              source: ImagesPath.img.iqra.backIcon,
              onPress: () => this.props.navigation.goBack(),
            }}
            rightButton={{
              source: ImagesPath.img.iqra.helpIcon,
              onPress: ()=>this.setState({ help: true }),
            }}
          />

          <BoardScore 
            time={time}
            score={score}
          />

          <View style={styles.wrapper}>
              <JManHero
                question={question[questionSelection]}
                started={started}
                state={state}
                onPress={this.twit}
                refText={(element) => this.textBuble = element}
              />
              { started && 
                <ListHuruf
                  selectedList={selected}
                  question={question}
                  state={state} 
                  choiceAnswer={this.choiceAnswer}
                />
              }
          </View>

        </ImageBackground>

        <HelpModal 
          source={ImagesPath.img.play.helpImage.hijaiyah1} 
          text={`Choose Hijaiyah from bottom\npanel which is similiar to above.`} 
          visible={help} 
          close={()=>this.setState({ help: false }, () => !started && this.start())}
        />

        <ResultModal 
          visible={result} 
          restart={this.restart}
          gamelist={this.back}
          report={()=>{}}
          close={()=>this.setState({ help: false }, () => !started && this.start())}
          score={score}
        />

      </SafeAreaView>
    )
  }
}

