import * as types from "./types"
import API from "../../utils/Api.New"

export function getProfile(_callback){
  return (dispatch, getState) => {
    const token = getState().authData.token
    API.get("details", token).then(res => {
      _callback(res.data)
    })
  }
}

export function getSaveProfile(_callback){
  return (dispatch, getState) => {
    _callback(getState().authData.detail)
  }
}

export function checkCredential(user, pass, _callback){
  return (dispatch, getState) => {
    const param = {
      username: user,
      password: pass
    }
    API.post("login", param).then(res => {
      _callback(res)
    })
  }
}

export function createAccount(user, email, pass, conf_pass, _callback) {
  return (dispatch, getState) => {
    const param = {
      username: user,
      email: email,
      password: pass,
      confirm_password: conf_pass
    }
    API.post("signup", param).then(res => {
      _callback(res)
    })
  }
}

export function sendOTPCode(email, _callback) {
  return (dispatch, getState) => {
    API.get(`sendresetcode/${email}`).then(res => {
      _callback(res)
    })
  }
}

export function resetPassword(email, reset_code, password, conf_pass, _callback){
  return (dispatch, getState) => {
    const param =  {
      email: email,
      reset_code: reset_code,
      password: password,
      confirm_password: conf_pass
    }
    API.post("resetpassword", param).then(res => {
      _callback(res)
    })
  }
}

export const setToken = (token) => {
  return {
    type: types.SET_TOKEN,
    token
  }
}

export const setProfile = (detail) => {
  return {
    type: types.SET_PROFILE,
    detail
  }
}
