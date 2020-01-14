import React, { Component } from "react"
import {
  Text,
  View,
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
  "1": { "f": 1.3, "lh": 1.3 }, //alif
  "2": { "f": 1.3, "lh": 1.2 }, //ba
  "3": { "f": 1.3, "lh": 1.25 }, //ta 
  "4": { "f": 1.3, "lh": 1.25 }, //sa
  "5": { "f": 1.15, "lh": 1   }, //jim
  "6": { "f": 1.1, "lh": 1}, //kha
  "7": { "f": 1.05, "lh": 1 }, //kho
  "8": { "f": 1.2, "lh": 1.2 }, //dal
  "9": { "f": 1.1, "lh": 1.22 }, //zal
  "10": { "f": 1.2, "lh": 1 }, //ro
  "11": { "f": 1.1, "lh": 1 }, //zaim
  "12": { "f": 1.2, "lh": 1 }, //sin
  "13": { "f": 1, "lh": 1 }, //syin
  "14": { "f": 1.1, "lh": 1 }, //sad
  "15": { "f": 1.1, "lh": 1.1 }, //to 
  "16": { "f": 1.3, "lh": 1.3 }, //do
  "17": { "f": 1.3, "lh": 1.3 }, //go
  "18": { "f": 1, "lh": 1 }, //ain
  "19": { "f": 0.95, "lh": 1 }, //ghin
  "20": { "f": 1.2, "lh": 1.3 }, //fa
  "21": { "f": 1.3, "lh": 1.2 }, //kof
  "22": { "f": 1.4, "lh": 1.4 }, //kaf
  "23": { "f": 1.25, "lh": 1.2 }, //lam
  "24": { "f": 1.3, "lh": 1 }, //mim
  "25": { "f": 1.3, "lh": 1.15 }, //nun
  "26": { "f": 1.4, "lh": 1.15 }, //wau
  "27": { "f": 2, "lh": 1.5 }, //ha
  "28": { "f": 1.3, "lh": 1.3 },// lam alif
  "29": { "f": 2, "lh": 1.5 }, //hamjah
  "30": { "f": 1.2, "lh": 1.07  } // ya
}

function getRandom(min, max){
	return Math.floor(Math.random() * (max - min) + min);
}

const ListHijaiyah = (props) => {
  let { state, question, selected , onPress, refText, started } = props
  const choice = [ 
    ImagesPath.img.play.trueChoice,
    ImagesPath.img.play.falseChoice,
  ]

  return (
    <View style={{ height: widthPercentageToDP(27.4), flexDirection: 'row', justifyContent: 'center', marginTop: widthPercentageToDP(21) }}>
      {
        question.map((e, i) => (
          <Button 
            key={`PlayHijaiyah1Item-${i}`}
            disabled={state !== 0}
            onPress={()=>onPress(i)} 
            style={{ 
              width: widthPercentageToDP(27.4), 
              height: widthPercentageToDP(27.4), 
              // maxWidth: 114, 
              // maxHeight: 114, 
              marginHorizontal: widthPercentageToDP(1.8),
              opacity: (state === 0 || selected === i) ? 1 : 0,
            }} 
          >
            <ImageBackground source={ImagesPath.img.play.paper} style={styles.buttonImg} >
            <Text 
              style={{
                textAlign: 'center',
                fontFamily: 'Uthman',
                fontSize: widthPercentageToDP(14) * STYLE_ITEM[e.id].f,
                lineHeight: widthPercentageToDP(16 * 1.4166666666666667) * STYLE_ITEM[e.id].lh,
                color: COLOR[e.id % 6],
                textAlignVertical: 'center',
                left: -5
              }}>{`${e.arb+' '}`}</Text>
            </ImageBackground>
            {
              choice.map((e, i) => (
                <Image 
                  key={'Choice-'+(i+1)}
                  source={e} 
                  style={{
                    width: widthPercentageToDP(15),
                    height: widthPercentageToDP(15),
                    position: 'absolute',
                    bottom: -widthPercentageToDP(7),
                    left: widthPercentageToDP(7),
                    opacity: state === i + 1 ? 1 : 0,
                    resizeMode: 'contain',
                  }} 
                />
              ))
            }
          </Button>
        ))
      }
    </View>
  )
}

export default class Hijaiyah1 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      question: [],
      questionSelection: -1,
      time: 60,
      score: 0,
      selected: 1,
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
    let getQuestion = HURUF.sort(() => .5 - Math.random()).slice(23,26)
    this.setState((prevState) => ({
      question: getQuestion,
      questionSelection: getRandom(1, 3),
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
            headerSource={ImagesPath.img.play.topBoard.guesshijaiyah2} 
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

            <ListHijaiyah
              state={state}
              question={question}
              selected={selected}
              onPress={this.choiceAnswer} 
            />

            <Button 
              onPress={this.twit} 
              style={{ 
                width: widthPercentageToDP(20.5), 
                height: widthPercentageToDP(20.5), 
                // maxWidth: 86, 
                // maxHeight: 86, 
                marginTop: widthPercentageToDP(13.5), 
                alignSelf: 'center' 
              }}
            >
              <Image source={ImagesPath.img.play.soundIcon} style={styles.buttonImg} />
            </Button>

          </View>

        </ImageBackground>

        <HelpModal 
          source={ImagesPath.img.play.helpImage.hijaiyah2} 
          text={`Choose Hijaiyah which according\nto sound you heard.`} 
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

