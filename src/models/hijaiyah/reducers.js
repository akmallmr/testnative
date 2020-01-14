import createReducer from "../utils/createReducer"
import * as types from "./types"

const initialState = {
  hijaiyah1: { score: 0, star: 0 },
  hijaiyah2: { score: 0, star: 0 },
  harokat1: { score: 0, star: 0 },
  harokat2: { score: 0, star: 0 },
  tanwin1: { score: 0, star: 0 },
  tanwin2: { score: 0, star: 0 },
}

export const hijaiyah = createReducer(initialState, {
  [types.SET_SCORE](state, payload) {
    return {
      ...state,
      ...payload.data
    }
  }
})
 