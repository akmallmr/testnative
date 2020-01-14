import * as types from "./types"
import ASM from "../../utils/ASM"

export function fetchData() {
  return (dispatch, getState) => {
    ASM.getData('hijaiyah').then((res) => {
      dispatch(setScore(JSON.parse(res)))
    })
  }
}

export function setDataScore(key, nextValue) {
  return (dispatch, getState) => {
    let hijaiyahData = getState().hijaiyah
    console.log({hijaiyahData})
    hijaiyahData[key] = {
      score: nextValue.score > hijaiyahData[key].score ? nextValue.score : hijaiyahData[key].score,
      star: hijaiyahData[key].star + nextValue.star
    }
    
    ASM.setData('hijaiyah', hijaiyahData).then(() => {
      console.log({hijaiyahData})
      dispatch(setScore({[key]: hijaiyahData[key]}))  
    })
  }
}

const setScore = (data) => {
  return {
    type: types.SET_SCORE,
    data
  }
}