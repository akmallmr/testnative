import { combineReducers } from "redux"
import * as LanguagesReducer from "./languages/reducers"
import * as LangAction from "./languages/actions"

import * as AuthReducer from "./auth/reducers"
import * as AuthAction from "./auth/actions"

import * as SubjectReducer from "./subject/reducers"
import * as SubjectAction from "./subject/actions"

import * as SubjectActionV2 from "./subject/actions_v2"

import * as PracticeReducer from "./practice/reducers"
import * as PracticeAction from "./practice/actions"

import * as HomeAction from "./home/actions"

import * as HijaiyahReducer from "./hijaiyah/reducers"

export const reducer = combineReducers(
  Object.assign({}, LanguagesReducer, AuthReducer, SubjectReducer, PracticeReducer, HijaiyahReducer)
)

export const actionCreators = Object.assign({}, LangAction, AuthAction, SubjectAction, SubjectActionV2, PracticeAction, HomeAction)
