
/* ----- Components ----- */

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getCurrentWeather, getForeCast } from "../apis/openWeatherApi";
import CurrentWeather from "../components/CurrentWeather";
import ForeCast from "../components/ForeCast";
import SearchBar from "../components/SearchBar";
import { selectedCoordSync } from "../redux/actions/actionSelectedCoord";

// Material UI
import { makeStyles } from "@material-ui/core";

// This is a functional component
// Return a template
const SmartComponent = () => {
  const dispatch = useDispatch();

  const classes = useStyles();

  const [state, setState] = useState({
    temp: '',
    feelsLike: '',
    description: '',
    icon: '',
    hourlyForecast: []
  })
  const [locationState, setLocationState] = useState('Senegal');

  const handleInputChange = (e) => {
      setLocationState(e.target.value);
  }

   const onFormSubmit = async () => {

   const weatherResponse = await getCurrentWeather(locationState);

   const lat = weatherResponse.data.coord.lat;
   const lon = weatherResponse.data.coord.lon;
   const forecastResponse = await getForeCast(lat, lon);
   console.log(forecastResponse,'forecast response');
        setState({
         temp: weatherResponse.data.main.temp,
         feelsLike: weatherResponse.data.main.feels_like,
          description: weatherResponse.data.weather[0].main,
          icon: weatherResponse.data.weather[0].icon,
          hourlyForecast: forecastResponse.data.hourly,
      });
      console.log('Climatic Dates ',state);
      console.log(locationState);
      dispatch(selectedCoordSync(locationState));
  }

  return (
    <div className={classes.smartComponent}>
      <header className={classes.smartComponent__header}>
      <SearchBar location={state.location} 
      inputChange={e => handleInputChange(e)}
      formSubmitted={(e)=> onFormSubmit()}
      />
        </header>
      <div className={classes.smartComponent__container}>
      <CurrentWeather
      currentTemperature= {state.temp}
      feelsLike={state.feelsLike} 
      description={state.description}
      icon={state.icon}
      forecast={state.hourlyForecast}
      />
      <div className={classes.forecast__container}>
      <ForeCast forecast={state.hourlyForecast}/>
      </div>
      </div>
    </div>
  );
} 
  
const useStyles = makeStyles((theme) => ({
  smartComponent: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px * 2vmin)',
    color: 'white',
    backgroundColor: '#111',
    padding: '2rem 0'
  },
  smartComponent__header: {
    width: '100%',
  },
  smartComponent__container: {
    width: '90%',
    display: 'flex',
    flexDirection: 'column', 
  },
  forecast__container: {
    width: '100%',
    overflowX: 'scroll',
  }
}))

export default SmartComponent;

