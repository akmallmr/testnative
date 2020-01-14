import API from "../../utils/Api.New"

export function getSubjectV2(id, _callback) {
  return (dispatch, getState) => {
    const langID = parseInt(getState().langSetting.lang.split("lang")[1])
    const param = {
      language_id: langID
    }

    API.post(`level/${id}`, param).then(res => {
      if (res.httpStatus === 200) {
        _callback(res)
      } else {
        _callback(400)
      }
    })
  }
}

export function getLevelV2(_callback) {
  return () => {
    API.get("levels").then(res => {
      if (res.httpStatus === 200) {
        _callback(res)
      } else {
        _callback(400)
      }
    })
  }
}
