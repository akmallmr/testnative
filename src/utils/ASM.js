import { AsyncStorage } from 'react-native'

const AsyncStorageManagement = {
  
  setData : async (key, data) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  },
  
  getData: async (key) => {
    try { 
      const value = await AsyncStorage.getItem(key);
      return value
    } catch (error) {
      console.log(error);
    }
  },

  multiGet: async (key) => {
    try {
      let value = {}
      await AsyncStorage.multiGet([...key], (err, stores) => {
        stores.map((result, i, store)=> {
          let tempData = { [result[0]] : result[1] }
          value = {...value, ...tempData}
        })
      })
      return value
    } catch (error) {
      console.log(error)
    }
  },

  deleteData: async(key) => {
    try {
      await AsyncStorage.removeItem(key)
    } catch (error) {
      console.log(error)
    }
  }

}

export default AsyncStorageManagement
