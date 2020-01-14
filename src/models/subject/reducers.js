import createReducer from "../utils/createReducer"
import * as types from "./types"

const initialState = {
  subject: []
}

export const subjectData = createReducer(initialState, {
  [types.SET_SUBJECT](state, payload) {
    return {
      ...state,
      subject: payload.subject
    }
  }
})
