import API from "../../utils/Api.New"

export function getHomeVideoId(_callback) {
  return (dispatch, getState) => {
    const langID = parseInt(getState().langSetting.lang.split("lang")[1])
    API.get(`contentforhome/?language_id=${langID}`).then(res => {
      _callback(res)
    })
  }
}
