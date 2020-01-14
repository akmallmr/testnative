export default (color = (type, color, opacity = 1) => {
  let getColor

  if (type === "base") {
    switch (color) {
      case "green":
        getColor = `rgba(129,186,55, ${opacity})`
        break
      case "red":
        getColor = `rgba(255,95,123, ${opacity})`
        break
      case "darkOrange":
        getColor = `rgba(254,102,90, ${opacity})`
        break
      case "blue":
        getColor = `rgba(0,185,255, ${opacity})`
        break
      case "cream":
        getColor = `rgba(254,246,227, ${opacity})`
        break
      case "paleGreen":
        getColor = `rgba(249,255,233, ${opacity})`
        break
      case "grey":
        getColor = `rgba(196,196,196,${opacity})`
        break
      case "lightGreen":
        getColor = `rgba(3,212,115,${opacity})`
        break
      default:
        break
    }
  } else if (type === "shadow") {
    switch (color) {
      case "green":
        getColor = `rgba(104,151,42, ${opacity})`
        break
      case "red":
        getColor = `rgba(189,50,74, ${opacity})`
        break
      case "darkOrange":
        getColor = `rgba(221,74,62, ${opacity})`
        break
      case "blue":
        getColor = `rgba(24,148,194, ${opacity})`
        break
      case "cream":
        getColor = `rgba(230,212,170, ${opacity})`
        break
      case "paleGreen":
        getColor = `rgba(203,218,162, ${opacity})`
        break
      case "lightGreen":
        getColor = `rgba(5,161,88,${opacity})`
        break
      default:
        break
    }
  } else {
    getColor = `rgba(129,186,55, ${opacity})`
  }

  return getColor
})
