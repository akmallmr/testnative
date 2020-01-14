import React, { Component } from "react"
import Sound from "react-native-sound"
import RNFetchBlob from "rn-fetch-blob"

export const RES = {
  playingSuccess: {
    code: 200,
    message: "Playing Success"
  },
  playingError: {
    code: 400,
    message: "Playing Error"
  },
  downloadError: {
    code: 500,
    message: "Download Error"
  }
}

export class AudioPlayer {
  constructor() {
    Sound.setCategory("Playback")
    this.player = new Sound("", null)
  }

  navPlayer = (type = "PLAY") => {
    if (type === "PLAY") {
      this.player.play()
    } else if (type === "PAUSE") {
      this.player.stop()
    } else if (type === "STOP") {
      this.player.stop()
    }
  }

  setAudio(info) {
    let { filePath } = info

    return new Promise((resolve, reject) => {
      this.player.stop()
      this.player = new Sound(filePath, null, error => {
        if (!error) {
          resolve(true)
        } else {
          this.downloadFile(info)
            .then(() => {
              resolve(this.setAudio(info))
            })
            .catch(error => {
              reject(RES.downloadError)
            })
        }
      })
    })
  }

  playAudio() {
    return new Promise((resolve, reject) => {
      this.player.play(success => {
        if (success) {
          resolve(RES.playingSuccess)
        } else {
          reject(RES.playingError)
        }
      })
    })
  }

  downloadFile = info => {
    var { audioUrl, filePath } = info
    return new Promise((resolve, reject) => {
      // console.log({info})
      RNFetchBlob.config({ path: filePath })
        .fetch("GET", audioUrl)
        .then(res => {
          // console.log('The file saved to ', res.path())
          return resolve(res.path())
        })
        .catch((errorMessage, statusCode) => {
          // console.log('Error', errorMessage, statusCode)
          return reject(errorMessage)
        })
    })
  }

  getInfo(suraNo, ayaNo) {
    const reciterPath = "audio/Husary_64kbps"
    const dirs = RNFetchBlob.fs.dirs
    suraNo = suraNo.toString()
    ayaNo = ayaNo.toString()
    let fileName = `${suraNo.padStart(3, 0) + ayaNo.padStart(3, 0)}.mp3`
    let audioUrl = `http://api.projectmushaf.com/${reciterPath}/${fileName}`
    let filePath = `${dirs.DocumentDir}/QuranKareem/${reciterPath}/${fileName}`
    return { audioUrl, filePath, fileName }
  }

  getInfoWBW(suraNo, ayaNo, wordIdx) {
    const dirs = RNFetchBlob.fs.dirs
    suraNo = suraNo.toString()
    ayaNo = ayaNo.toString()
    wordIdx = wordIdx.toString()
    let fileName = `${suraNo.padStart(3, 0)}_${ayaNo.padStart(
      3,
      0
    )}_${wordIdx.padStart(3, 0)}.mp3`
    let audioUrl = `http://api.projectmushaf.com/audio/wbw/${fileName}`
    let filePath = `${dirs.DocumentDir}/QuranKareem/audio/wbw/${fileName}`

    return { audioUrl, filePath, fileName }
  }
}
