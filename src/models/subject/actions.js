import * as types from "./types"
import API from "../../utils/Api.New"

export function getLevel(id, _callback) {
  return (dispatch, getState) => {
    const langID = parseInt(getState().langSetting.lang.split("lang")[1])
    const param = {
      language_id: langID
    }

    API.post(`subject/${id}`, param).then(res => {
      _callback(res)
    })
  }
}

export function getSubjectContent(id, _callback) {
  return (dispatch, getState) => {
    const langID = parseInt(getState().langSetting.lang.split("lang")[1])
    const param = {
      language_id: langID
    }

    API.post(`content/${id}`, param).then(res => {
      _callback(res)
    })
  }
}

export function getSubject(_callback) {
  return (dispatch, getState) => {
    API.get("subjects").then(res => {
      if (res.httpStatus === 200) {
        const langID = parseInt(getState().langSetting.lang.split("lang")[1])
        let subject = []
        res.data.result.map((data, i) => {
          const content = data.title.find(e => e.id === langID)
          if (content) {
            subject = [
              ...subject,
              {
                id: i,
                id_subject: content.pivot.subject_id,
                id_lang: content.pivot.language_id,
                title: content.pivot.title,
                img: `http://app.islamicmindplus.com/uploads/${
                  data.img_filename
                }`
              }
            ]
          }
        })
        _callback(subject)
      } else {
        _callback(400)
      }
    })
  }
}

export const setSubject = subject => {
  return {
    type: types.SET_SUBJECT,
    subject
  }
}
