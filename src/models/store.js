import { createStore, applyMiddleware, compose } from "redux"
import thunkMiddleware from "redux-thunk"
import { createLogger } from "redux-logger"
import { reducer } from "./index"

const loggerMiddleware = createLogger({
  predicate: (getState, action) => __DEV__
})

function configureStore(initState) {
  const enchancer = compose(applyMiddleware(thunkMiddleware, loggerMiddleware))
  return createStore(reducer, initState, enchancer)
}

const store = configureStore({})

export default store
