const baseurl = "http://app.islamicmindplus.com/api/"

const Api = {
  login(uname, pass) {
    const url = `${baseurl}login`

    let details = {
      username: uname,
      password: pass
    }

    let formBody1 = []
    for (let property in details) {
      let encodedKey = encodeURIComponent(property)
      let encodedValue = encodeURIComponent(details[property])
      formBody1.push(encodedKey + "=" + encodedValue)
    }

    formBody1 = formBody1.join("&")
    return fetch(url, {
      method: "POST",
      timeout: 10000,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: formBody1
    })
      .then(response => {
        _ROOT.setState({ netStatus: response.status })
        return response.json()
      })
      .catch(function(error) {
        _ROOT.setState({ netStatus: "none" })
        return false
      })
  },

  register(uname, email, pass, conf_pass) {
    const url = `${baseurl}signup`

    let details = {
      username: uname,
      email: email,
      password: pass,
      confirm_password: conf_pass
    }

    let formBody2 = []
    for (let property in details) {
      let encodedKey = encodeURIComponent(property)
      let encodedValue = encodeURIComponent(details[property])
      formBody2.push(encodedKey + "=" + encodedValue)
    }

    formBody2 = formBody2.join("&").replace("%40", "@")
    return fetch(url, {
      method: "POST",
      timeout: 10000,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: formBody2
    })
      .then(response => {
        _ROOT.setState({ netStatus: response.status })
        return response.json()
      })
      .catch(function(error) {
        _ROOT.setState({ netStatus: "none" })
        return false
      })
  },

  sendOTPCode(email) {
    const url = `${baseurl}sendresetcode/${email}`

    return fetch(url, { method: "GET" })
      .then(response => {
        _ROOT.setState({ netStatus: response.status })
        return response.json()
      })
      .catch(function(error) {
        _ROOT.setState({ netStatus: "none" })
        return false
      })
  },

  resetPassword(email, reset_code, password, conf_pass) {
    const url = `${baseurl}resetpassword`

    let details = {
      email: email,
      reset_code: reset_code,
      password: password,
      confirm_password: conf_pass
    }

    let formBody3 = []
    for (let property in details) {
      let encodedKey = encodeURIComponent(property)
      let encodedValue = encodeURIComponent(details[property])
      formBody3.push(encodedKey + "=" + encodedValue)
    }

    formBody3 = formBody3.join("&").replace("%40", "@")
    return fetch(url, {
      method: "POST",
      timeout: 10000,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: formBody3
    })
      .then(response => {
        _ROOT.setState({ netStatus: response.status })
        return response.json()
      })
      .catch(function(error) {
        _ROOT.setState({ netStatus: "none" })
        return false
      })
  },

  getLanguages() {
    const url = `${baseurl}languages`

    return fetch(url, { method: "GET" })
      .then(response => {
        _ROOT.setState({ netStatus: response.status })
        return response.json()
      })
      .catch(function(error) {
        _ROOT.setState({ netStatus: "none" })
        return false
      })
  },

  homepageVideoId(langID) {
    const url = `${baseurl}contentforhome/?language_id=${langID}`

    return fetch(url, { method: "GET" })
      .then(response => {
        _ROOT.setState({ netStatus: response.status })
        return response.json()
      })
      .catch(function(error) {
        _ROOT.setState({ netStatus: "none" })
        return false
      })
  },

  getSubject() {
    const url = `${baseurl}subjects`

    return fetch(url, { method: "GET" })
      .then(response => {
        if (response.status === 200) {
          _ROOT.setState({ netStatus: response.status })
          return response.json()
        } else {
          _ROOT.setState({ netStatus: "none" })
        }
      })
      .catch(function(error) {
        _ROOT.setState({ netStatus: "none" })
        return false
      })
  },

  getLevel(id, lang) {
    const url = `${baseurl}subject/${id}`

    let details = {
      language_id: lang
    }

    let formBody4 = []
    for (let property in details) {
      let encodedKey = encodeURIComponent(property)
      let encodedValue = encodeURIComponent(details[property])
      formBody4.push(encodedKey + "=" + encodedValue)
    }

    formBody4 = formBody4.join("&")
    return fetch(url, {
      method: "POST",
      timeout: 10000,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: formBody4
    })
      .then(response => {
        if (response.status === 200) {
          return response.json()
        } else {
          _ROOT.setState({ netStatus: "none" })
        }
      })
      .catch(function(error) {
        _ROOT.setState({ netStatus: "none" })
        return false
      })
  },

  getSubjectContent(id, lang) {
    const url = `${baseurl}content/${id}`

    let details = {
      language_id: lang
    }

    let formBody5 = []
    for (let property in details) {
      let encodedKey = encodeURIComponent(property)
      let encodedValue = encodeURIComponent(details[property])
      formBody5.push(encodedKey + "=" + encodedValue)
    }

    formBody5 = formBody5.join("&")
    return fetch(url, {
      method: "POST",
      timeout: 10000,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: formBody5
    })
      .then(response => {
        if (response.status === 200) {
          return response.json()
        } else {
          _ROOT.setState({ netStatus: "none" })
        }
      })
      .catch(function(error) {
        _ROOT.setState({ netStatus: "none" })
        return false
      })
  },

  checkCompleteQuiz(id, token) {
    const url = `${baseurl}checkcompletedquiz/${id}`

    return fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      method: "GET"
    })
      .then(response => {
        _ROOT.setState({ netStatus: response.status })
        return response.json()
      })
      .catch(function(error) {
        _ROOT.setState({ netStatus: "none" })
        return false
      })
  },

  deleteCompleteQuiz(id, token) {
    const url = `${baseurl}removefromcompletedquiz`

    let details = {
      content_id: id
    }

    let formBody6 = []
    for (let property in details) {
      let encodedKey = encodeURIComponent(property)
      let encodedValue = encodeURIComponent(details[property])
      formBody6.push(encodedKey + "=" + encodedValue)
    }

    formBody6 = formBody6.join("&")
    return fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      timeout: 10000,
      body: formBody6
    })
      .then(response => {
        _ROOT.setState({ netStatus: response.status })
        return response.json()
      })
      .catch(function(error) {
        _ROOT.setState({ netStatus: "none" })
        return false
      })
  },

  addCompleteQuiz(id, correct, wrong, star, token) {
    const url = `${baseurl}addtocompletedquiz`

    let details = {
      content_id: id,
      total_benar: correct,
      total_salah: wrong,
      bintang: star
    }

    let formBody7 = []
    for (let property in details) {
      let encodedKey = encodeURIComponent(property)
      let encodedValue = encodeURIComponent(details[property])
      formBody7.push(encodedKey + "=" + encodedValue)
    }

    formBody7 = formBody7.join("&")
    return fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      timeout: 10000,
      body: formBody7
    })
      .then(response => {
        _ROOT.setState({ netStatus: response.status })
        return response.json()
      })
      .catch(function(error) {
        _ROOT.setState({ netStatus: "none" })
        return false
      })
  },

  getProfile(token) {
    const url = `${baseurl}details`

    return fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      method: "GET"
    })
      .then(response => {
        _ROOT.setState({ netStatus: response.status })
        return response.json()
      })
      .catch(function(error) {
        _ROOT.setState({ netStatus: "none" })
        return false
      })
  },

  editProfile(name, lang, img, pass, con_pass, token) {
    const url = `${baseurl}addtocompletedquiz`

    let details = {
      fullname: name,
      language_id: lang,
      profile_img: img,
      password: pass,
      confirm_password: con_pass
    }

    let formBody8 = []
    for (let property in details) {
      let encodedKey = encodeURIComponent(property)
      let encodedValue = encodeURIComponent(details[property])
      formBody8.push(encodedKey + "=" + encodedValue)
    }

    formBody8 = formBody8.join("&")
    return fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      timeout: 10000,
      body: formBody8
    })
      .then(response => {
        _ROOT.setState({ netStatus: response.status })
        return response.json()
      })
      .catch(function(error) {
        _ROOT.setState({ netStatus: "none" })
        return false
      })
  }
}

module.exports = Api
