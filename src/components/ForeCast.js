import React from "react";

// Styles
import './styles/ForeCast.css';
import tempIcon from '../assets/term.png';
import humidityIcon from '../assets/humidity.png';
import windSpeedIcon from '../assets/windspeed.png';
import WatchLaterIcon from '@material-ui/icons/WatchLater';

class ForeCast extends React.Component {
    
    render() {
        const forecastItems = this.props.forecast.map((item, index) => {
            const key = `https://forecast-item${index}`;
            let ampm = 'AM';
            const url = `http://openweathermap.org/img/wn/${item.weather[0].icon}@4x.png`;
        let hour = new Date(item.dt * 1000).getHours();
        if( hour > 12) {
            hour = hour - 12;  
            ampm = 'PM';
        }
        return (
                <div className='forecast__item' key={key}>
                    <div className="forecast__box__item__hour">
                    <WatchLaterIcon /> 
                    <p className='forecast__item__hour'>
                     {hour}:00 {ampm}
                    </p>
                    </div>
                    
                    <div className="forecast__box__item__temp">
                    <p className='forecast__item__temp'>
                       <img className='icon' src={tempIcon}/> {item.temp}°
                    </p>
                    <p className='forecast__item__temp'>
                       <img className='icon' src={humidityIcon}/> {item.humidity}%
                    </p>
                    <p className='forecast__item__temp'>
                       <img className='icon' src={windSpeedIcon}/> {item.wind_speed}%
                    </p>
                    </div>
                    <img src={url} alt={item.weather[0].description}/>
                    <p className='forecast__item__hour'>
                       <b>{item.weather[0].main}:</b> {item.weather[0].description}
                    </p>
                </div>
            )
        })
        return (
            <div className="forecast">
              {
                  forecastItems
              }
            </div>
        )
    }
}

export default ForeCast;