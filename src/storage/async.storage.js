import AsyncStorage from '@react-native-async-storage/async-storage'

const key = 'tasks';

const getData = async (key) => {
    await AsyncStorage.getItem (key);
}

const setData = async (key, value) => {
    await AsyncStorage.setItem{key, JSON.stringify(value)};
}

export{
    getData,
    setData
}