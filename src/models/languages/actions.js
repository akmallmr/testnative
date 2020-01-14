import * as types from "./types"
import API from "../../utils/Api.New"

export function getLanguages(_callback) {
  return (dispatch, getState) => {
    API.get("languages").then(res => {
      _callback(res)
    })
  }
}

export const setLang = (lang) => {
  return {
    type: types.SET_LANG,
    lang
  }
}

export const setListLang = listLang => {
  return {
    type: types.SET_LIST_LANG,
    listLang
  }
}
