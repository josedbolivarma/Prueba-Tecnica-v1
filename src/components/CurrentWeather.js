import React from 'react';
// Styles
import './styles/CurrentWeather.css';
// Material-ui/icons
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import CloudIcon from '@material-ui/icons/Cloud';

class CurrentWeather extends React.Component {
    render() {
        let img;
        if( this.props.icon) {
            const url = `http://openweathermap.org/img/wn/${this.props.icon}@4x.png`;
            img = (
                <img className='current__weather__icon'
                alt={this.props.description}
                src={url}
                />
            )
        }
        return (
            <div className='current__weather'>
                <div className='current__weather__content'>
                    <p className='current__weather__temp'>
                    <WbSunnyIcon /> {this.props.temperature}
                    </p>
                    <p className='current__weather__description'>
                        {this.props.description}
                    </p>
                    <div className='current__weather__box'>
                    {img}
                    </div>
                </div>
                <div>
                    <p className='current__weather__feels__like'>
                      <CloudIcon /> Feels Like {this.props.feelsLike}°
                    </p>
                </div>
            </div>
        )
    }
}

export default CurrentWeather;