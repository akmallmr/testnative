import createReducer from "../utils/createReducer"
import * as types from "./types"

const initialState = {
  lang: 'lang1',
  listLang: [
    {id: 0, code: 'lang1'},
    {id: 1, code: 'lang13'},
    {id: 2, code: 'lang14'},
    {id: 3, code: 'lang15'},
  ]
}

export const langSetting = createReducer(initialState, {
  [types.SET_LANG](state, payload) {
    return {
      ...state,
      lang: payload.lang
    }
  },

  [types.SET_LIST_LANG](state, payload){
    return {
      ...state,
      listLang: payload.listLang
    }
  }
})
