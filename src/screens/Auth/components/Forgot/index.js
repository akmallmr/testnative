import React, { Component } from "react"
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  TextInput
} from "react-native"

import * as Animatable from "react-native-animatable"

import * as Validasi from "../Validasi"

import { ImagesPath}  from "../../../../constants"
import styles from "./styles"

const hide = { 0: { opacity: 0 }, 1: { opacity: 0 } }

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 0,
      lang: props.lang,
      otpCode: null,
      isSubmit: false,
      isLoading: false,
      forgotInput: [
        {
          step: 0,
          name: "emailStep",
          input: [
            {
              id: 0,
              name: "email",
              value: "",
              keyType: "email-address",
              secure: null,
              rule: ["require", "validEmail"],
              error: null
            }
          ]
        },
        {
          step: 1,
          name: "otpStep",
          input: [
            {
              id: 0,
              name: "otpCode",
              value: "",
              keyType: "default",
              secure: null,
              rule: ["require-4"],
              error: null
            }
          ]
        },
        {
          step: 2,
          name: "passwordStep",
          input: [
            {
              id: 0,
              name: "password",
              value: "",
              keyType: "default",
              secure: true,
              rule: ["require", "min-6"],
              error: null
            },
            {
              id: 1,
              name: "repassword",
              value: "",
              keyType: "default",
              secure: true,
              rule: ["require", "min-6", "sameValue"],
              error: null
            }
          ]
        }
      ]
    }
    this.submit = this.submit.bind(this)
  }

  resetData() {
    this.setState({
      step: 0,
      otpCode: null,
      isSubmit: false,
      isLoading: false,
      forgotInput: [
        {
          step: 0,
          name: "emailStep",
          input: [
            {
              id: 0,
              name: "email",
              value: "",
              keyType: "email-address",
              secure: null,
              rule: ["require", "validEmail"],
              error: null
            }
          ]
        },
        {
          step: 1,
          name: "otpStep",
          input: [
            {
              id: 0,
              name: "otpCode",
              value: "",
              keyType: "default",
              secure: null,
              rule: ["require"],
              error: null
            }
          ]
        },
        {
          step: 2,
          name: "passwordStep",
          input: [
            {
              id: 0,
              name: "password",
              value: "",
              keyType: "default",
              secure: true,
              rule: ["require"],
              error: null
            },
            {
              id: 1,
              name: "repassword",
              value: "",
              keyType: "default",
              secure: true,
              rule: ["require", "sameValue"],
              error: null
            }
          ]
        }
      ]
    })
    this.refs.content.scrollToIndex({ animated: false, index: "0" })
  }

  removeEmojis(string){
    // emoji regex from the emoji-regex library
    const regex = /\uD83C\uDFF4(?:\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74)\uDB40\uDC7F|\u200D\u2620\uFE0F)|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDB0-\uDDB3])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDB0-\uDDB3]))|\uD83D\uDC69\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDB0-\uDDB3])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|(?:(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)\uFE0F|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDD6-\uDDDD])(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83D\uDC69\u200D[\u2695\u2696\u2708])\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC68(?:\u200D(?:(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D[\uDC66\uDC67])|\uD83C[\uDFFB-\uDFFF])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDB0-\uDDB3])|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDB5\uDDB6\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF9]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD70\uDD73-\uDD76\uDD7A\uDD7C-\uDDA2\uDDB0-\uDDB9\uDDC0-\uDDC2\uDDD0-\uDDFF])|(?:[#*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF9]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD70\uDD73-\uDD76\uDD7A\uDD7C-\uDDA2\uDDB0-\uDDB9\uDDC0-\uDDC2\uDDD0-\uDDFF])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDB5\uDDB6\uDDB8\uDDB9\uDDD1-\uDDDD])/g
  
    return string.replace(regex, '')
  }

  _changeText(text, id) {
    const { step } = this.state

    this.setState(prevState => ({
      forgotInput: prevState.forgotInput.map((obj, index) =>
        step === index
          ? Object.assign(obj, {
              step: obj.step,
              name: obj.step,
              input: obj.input.map((data, i) =>
                id === i
                  ? Object.assign(data, {
                      id: data.id,
                      name: data.name,
                      value: this.removeEmojis(text.replace(/\s+$/, "")),
                      keyType: data.keyType,
                      secure: data.secure,
                      rule: data.rule,
                      error: data.error
                    })
                  : data
              )
            })
          : obj
      )
    }))
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.lang !== prevState.lang) {
      return { lang: nextProps.lang, isSubmit: false }
    } else return null
  }

  submit() {
    const { sendOTPCode, resetPassword } = _ROOTSCREEN.props
    const { onSubmit, onSubmitSuccess, onStepChange } = this.props
    const { step, forgotInput, isLoading, lang, otpCode } = this.state
    let error = false

    if (!isLoading) {
      onSubmit && onSubmit()
      this.setState({ isLoading: true, isSubmit: false })
      forgotInput[step].input.map((obj, i) => {
        for (let index = 0; index < obj.rule.length; index++) {
          const rule = obj.rule[index].split("-")[0]
          const param = obj.rule[index].split("-")[1]
          let isValid = null

          if (rule === "sameValue") {
            isValid = Validasi["sameValue"](obj.value, forgotInput[step].input[i - 1].value)
          } else {
            isValid = Validasi[rule](obj.value.replace(" ", ""), param)
          }

          if (!isValid) {
            this.state.forgotInput[step].input[i].error = lang.auth.error[rule](
              lang.auth.textInput[obj.name].toLowerCase(),
              param
            )
            error = true
            break
          } else {
            this.state.forgotInput[step].input[i].error = null
          }
        }
      })

      if (!error) {
        const { textInput, error } = lang.auth
        let isError = false
        
        if (step === 0) {
          sendOTPCode(forgotInput[0].input[0].value, res => {
            if(res.status) {
              if (res.httpStatus === 200) {
                setTimeout(() => this.setState({ isSubmit: true }), 1)
                setTimeout(() => {
                  this.refs.content.scrollToIndex({ animated: true, index: "1" })
                  this.setState({ step: 1, isLoading: false, isSubmit: false, otpCode: res.data.result })
                  onStepChange && onStepChange(step)
                }, 500)
              } else if (res.httpStatus === 404) {
                isError = true
                forgotInput[0].input[0].error = error.notFound(textInput.email.toLowerCase())
              } else if (res.httpStatus === 500) {
                isError = true
                forgotInput[0].input[0].error = error.server()
              } 
            } else {
              isError = true
              forgotInput[0].input[0].error = error.server()
            }

            if(isError) {
              onStepChange && onStepChange()
              setTimeout(() => this.setState({ isSubmit: true, isLoading: false }), 1)
            } 
          })
        } else if (step === 1) {
          if (forgotInput[1].input[0].value === otpCode) {
            setTimeout(() => this.setState({ isSubmit: true }), 1)
            setTimeout(() => {
              this.refs.content.scrollToIndex({ animated: true, index: "2" })
              this.setState({ step: 2, isLoading: false, isSubmit: false })
              onStepChange && onStepChange(step)
            }, 500)
          } else {
            forgotInput[1].input[0].error = error.incorrect(textInput.otpCode.toLowerCase())
            onStepChange && onStepChange()
            setTimeout(() => this.setState({ isSubmit: true, isLoading: false }), 1)
          }
        } else if (step === 2) {
          resetPassword(forgotInput[0].input[0].value, forgotInput[1].input[0].value, forgotInput[2].input[0].value, forgotInput[2].input[1].value, res => {
            if (res.status) {
              if (res.httpStatus === 200) {
                setTimeout(() => this.setState({ isSubmit: true }), 1)
                setTimeout(() => {        
                  onStepChange && onStepChange()
                  onSubmitSuccess && onSubmitSuccess("success")
                }, 500)
              } else if (res.httpStatus === 500) {
                isError = true
                forgotInput[2].input[0].error = " "
                forgotInput[2].input[1].error = error.server()
              }
            } else {
              isError = true
              forgotInput[2].input[0].error = " "
              forgotInput[2].input[1].error = error.server()
            }

            if(isError) {
              onStepChange && onStepChange()
              setTimeout(() => this.setState({ isSubmit: true, isLoading: false }), 1)
            }
          })
        }
      } else {
        onStepChange && onStepChange()
        setTimeout(() => this.setState({ isSubmit: true, isLoading: false }), 1)
      }
    }
  }

  _renderOTPBox() {
    let otp = this.state.forgotInput[1].input[0].value.split("")
    let input = []

    for (let i = 0; i < 4; i++) {
      input.push(
        <View key={`otp${i}`} style={[styles.inputBar, styles.inputOTP]}>
          <TextInput
            ref={ref => (this[`otpInput${i}`] = ref)}
            autoCapitalize="none"
            style={[styles.input, styles.inputOTPText, { flex: 1 }]}
            maxLength={1}
            autoCorrect={false}
            underlineColorAndroid="rgba(0,0,0,0)"
            returnKeyType={i < 3 ? "next" : "done"}
            value={!otp[i] || otp[i] === " " ? "" : otp[i]}
            onChangeText={text => {
              const code = text.replace(/\s+$/, "")
              otp[i] = code ? code : " "
              this._changeText(otp.join().replace(/,/g, ""), 0)

              if (i < 3 && this[`otpInput${i + 1}`].props.value == "") {
                this[`otpInput${i + 1}`].focus()
              }
            }}
            onFocus={a => {
              if (
                i &&
                this[`otpInput${i - 1}`].props.value == "" &&
                this[`otpInput${i}`].props.value == ""
              )
                this[`otpInput${i - 1}`].focus()
            }}
            onSubmitEditing={() => {
              if (i < 3) {
                this[`otpInput${i + 1}`].focus()
              } else {
                this.submit()
              }
            }}
          />
        </View>
      )
    }
    return input
  }

  _renderItems = ({ item, index }) => {
    const { lang, isSubmit, step } = this.state

    return (
      <View style={styles.listItem}>
        {item.input.map((data, i) => {
          return (
            <View key={data.id}>
              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <Text style={styles[`inputText${lang.alfaType}`]}>
                  {index === 1 ? 
                    lang.auth.title[3] :
                    lang.auth.textInput[data.name]
                  }
                </Text>
                <View style={styles.inputStatus}>
                  <Animatable.Image
                    useNativeDriver={true}
                    animation={isSubmit ? "tada" : hide}
                    source={data.error ? ImagesPath.icon.wrong : ImagesPath.icon.check}
                    style={styles.img}
                  />
                </View>
              </View>
              {index === 1 ? (
                <View style={styles.inputOTPContainer}>
                  {this._renderOTPBox()}
                </View>
              ) : (
                <View style={styles.inputBar}>
                  <TextInput
                    ref={ref => (this[item.name + i] = ref)}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType={data.keyType}
                    secureTextEntry={data.secure}
                    returnKeyType={
                      i + 1 === item.input.length ? "send" : "next"
                    }
                    value={data.value}
                    underlineColorAndroid="rgba(0,0,0,0)"
                    style={styles.input}
                    onChangeText={text => this._changeText(text, data.id)}
                    onSubmitEditing={() =>
                      i + 1 === item.input.length
                        ? this.submit()
                        : this[item.name + (i + 1)].focus()
                    }
                  />
                </View>
              )}
              <Animatable.Text
                animation={isSubmit ? "bounceIn" : hide}
                useNativeDriver={true}
                style={styles[`inputError${lang.alfaType}`]}
              >
                {data.error ? data.error : " "}
              </Animatable.Text>
            </View>
          )
        })}
      </View>
    )
  }

  render() {
    const { lang, step, forgotInput } = this.state
    const { onClose } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles[`headerText${lang.alfaType}`]}>
            {lang.auth.title[step]}
          </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              _ROOT.click()
              onClose && onClose()
            }}
            style={styles.closeBtn}
          >
            <Image source={ImagesPath.icon.close} style={styles.img} />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <FlatList
            ref="content"
            scrollEnabled={false}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            pagingEnabled={true}
            keyExtractor={(item, index) => index.toString()}
            data={forgotInput}
            extraData={this.state}
            renderItem={this._renderItems}
          />
        </View>
      </View>
    )
  }
}
