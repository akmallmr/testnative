class Api {

  static host = "http://app.islamicmindplus.com/api"

  static headers(token) {
    return {
      'Accept' : 'application/json',
      'Content-Type' : 'application/json',
      'Authorization' : `Bearer ${token}`
    }
  }

  static get(route, token) {
    return this.xhr(route, null, 'GET', token)
  }

  static put(route, params, token) {
    return this.xhr(route, params, 'PUT', token)
  }

  static post(route, params, token) {
    return this.xhr(route, params, 'POST', token)
  }

  static delete(route, params, token) {
    return this.xhr(route, params, 'DELETE', token)
  }

  static xhr(route, params, verb, token) {
    const url = `${this.host}/${route}`
    let options = Object.assign({ method: verb }, params ? { body: JSON.stringify(params) } : null );
    options.headers = Api.headers(token)
    // console.log('Api_header', url, options)
    // console.log('options.headers', options.headers)

    var timeOut = new Promise(function (resolve, reject) {
      setTimeout(() => reject({ "status": false, message: 'Timeout', url: url  }), 5000);
    });

    var fetcher = new Promise(function (resolve, reject) {
      fetch(url, options)
        .then((response) => 
          response.json().then(data => ({
            data: data,
            status: true,
            httpStatus: response.status
          }))
        )
        .then((res) => {
          // console.log('respone', res)
          resolve(res)
        })
        .catch(function (error) {
          console.log('Api_' + route, 'There has been a problem with your fetch operation: ' + error);
          reject({ status: false, message: error, url: url });
        })
    });

    return Promise.race([fetcher, timeOut])
    .then(function (res) {
      // console.log('Api_'+ route, 'success', res);
      return res
    })
    .catch(function (error) {
      console.log('Api_'+ route, 'error', error);
      return { status: false, message: error, url: url };
      throw error;      
    });
  }

  static upload(files, token) {
    let url = `${this.host}/profile/update-photo`
    let headers = new Headers();
    var data = new FormData()
    data.append('photo', {
      uri: files.uri,
      type: files.type,
      name: files.fileName
    })
    console.log('Data Upload',data)

    var fetcher = new Promise((resolve, reject) => {
      fetch(url, {
        headers: {
          'Authorization' : `Bearer ${token}`
        },
        method: 'POST',
        body: data,
      })
        .then((response) =>
          response.json().then(data => ({
            data: data,
            status: true,
            httpStatus: response.status
          }))
        )
        .then((res) => {
          console.log('Api_upload', res)
          resolve(res)
        })
        .catch(function (error) {
          // console.log('There has been a problem with your fetch operation: ' + error);
          reject({ status: false, message: error, url: url });
        })
    });

    return fetcher
      .then(function(res) {
        console.log('Api_upload', 'success', res);
        return res;        
      })
      .catch(function(error) {
        console.log('Api_upload', 'error', error);
        return { status: false, message: error, url: url };
        throw error;  
      });
  }

}

export default Api