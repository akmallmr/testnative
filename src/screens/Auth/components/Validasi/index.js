export const require = (text, limit = 1) => {
  return text.length >= limit
}

export const min = (text, limit = 0) => {
  return text.length >= limit
}

export const validEmail = email => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

export const sameValue = (text1, text2) => {
  return text1 === text2
}
