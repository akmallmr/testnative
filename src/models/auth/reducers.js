import createReducer from "../utils/createReducer"
import * as types from "./types"

const initialState = {
  token: undefined,
  detail: []
}

export const authData = createReducer(initialState, {
  [types.SET_TOKEN](state, payload) {
    return {
      ...state,
      token: payload.token
    }
  },

  [types.SET_PROFILE](state, payload) {
    return {
      ...state,
      detail: payload.detail
    }
  }
})
