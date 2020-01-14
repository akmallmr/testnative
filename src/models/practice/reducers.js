import createReducer from "../utils/createReducer"
import * as types from "./types"

const initialState = {
  contentId: null,
  question: []
}

export const practiceData = createReducer(initialState, {
  [types.SET_QUESTION](state, payload) {
    return {
      ...state,
      contentId: payload.contentId,
      question: payload.question
    }
  }
})
