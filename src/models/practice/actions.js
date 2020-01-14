import * as types from "./types"
import API from "../../utils/Api.New"

export function removeCompleteQuiz(id, _callback){
  return (dispatch, getState) => {
    const token = getState().authData.token
    const param = {
      content_id: id
    }

    API.post("removefromcompletedquiz", param, token).then(res => {
      _callback(res)
    })
  }
}

export function addCompleteQuiz(id, answers, _callback){
  return (dispatch, getState) => {
    const token = getState().authData.token
    const correct = answers.filter(a => a.valid === 1).length
    const wrong = answers.length - correct
    const star = correct ? Math.round(correct / answers.length * 3) : 0
    const param = {
      content_id: id,
      total_benar: correct,
      total_salah: wrong,
      bintang: star
    }

    API.post("addtocompletedquiz", param, token).then(res => {
      _callback(res)
    })
  }
}

export const setQuestion = (contentId, question) => {
  return {
    type: types.SET_QUESTION,
    contentId,
    question
  }
}
