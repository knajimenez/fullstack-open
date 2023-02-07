import { useState, useEffect } from "react"
import axios from "axios"

const Weather = ({city}) => {
    const [weather, setWeather] = useState([])
    const openWeatherApiKey = process.env.REACT_APP_API_KEY

    const weatherHook = () => {
      axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${openWeatherApiKey}`)
      .then(response => {
        setWeather(response.data)
      })
    }

    useEffect(weatherHook, [])

    if (weather.main) {
        return (
            <div>
                <h3>Weather in {city}</h3>
                <div>Temperature: {weather.main.temp}°C</div>
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather icon"/>
                <div>Wind: {weather.wind.speed}m/s</div>
            </div>
        )
    } else {
        return null
    }
  }

export default Weather