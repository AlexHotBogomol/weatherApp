import React, {useState, useEffect} from 'react';
import axios from "axios";

import {Alert} from "react-native";
import * as Location from 'expo-location';

import Loading from "./Loading";
import Weather from "./Weather";

const API_KEY = "7021d78127784a1b8e3ce80276e66e26";

export default function App() {

  const [loading, setLoading] = useState(true);
  const [temp, setTemp] = useState(null);
  const [condition, setCondition] = useState(null);

  const getWeather = async(latitude, longitude) => {
    const {data : {main : {temp}, weather}} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
    setTemp(temp);
    setCondition(weather[0].main);
  }

  const getLocation = async() => {
    try {
      const {status} = await Location.requestForegroundPermissionsAsync();
      if(status === "granted"){
        const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync({
          accuracy: 1,
        });
        await getWeather(latitude, longitude);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Не могу определить местоположение", "Очень грустно :(");
    }
  }

  useEffect(() => {
    getLocation();
  }, []);

  return (
    loading ? <Loading/> : <Weather
        temp={Math.round(temp)}
        condition={condition}
    />
  );
}
