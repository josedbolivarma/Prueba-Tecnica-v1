

import ReactMapGL from 'react-map-gl';

import { getMap } from '../apis/openMapBox';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

//Material UI
import { makeStyles } from '@material-ui/core';

const MapBox = () => {
  // const api = `https://api.mapbox.com/{endpoint}?access_token={your_access_token}`;
  const classes = useStyles();
  const { city } = useSelector(store => store.selectedCoord);
  const [selectedName, setSelectedName] = useState('Senegal');  
  let [viewport, setViewport] = useState({
      latitude: -14.8208799701359,
      longitude: 15.2214469730201,
      pitch: 50, // pitch in degrees
      // bearing: -60, // bearing in degrees,
      zoom:5,
      width: '100vw',
      height: '100%',
      // container: 'map',
  })

  useEffect(() => {
    printMap();
  },[city])
 
  const printMap = async () => {
        if(!city){
          const mapa = await getMap('Bogota');
          setSelectedName(mapa.data.features[0].place_name);


    
        } else {
          const mapa = await getMap(city);
          setSelectedName(mapa.data.features[0].place_name);
          
          setViewport({
            ...viewport,
            latitude: mapa.data.features[0].center[0],
            longitude: mapa.data.features[0].center[1]
          })
        }
      }
 

  return (
        // <ConditionalRender />
        <div className={classes.map}>
          <h2 className={classes.map__title}>{selectedName}</h2>
          <div className={classes.map__container}>
        <ReactMapGL 
      
        {...viewport}
        mapboxAccessToken={'pk.eyJ1Ijoiam9zZWRib2xpdmFybWFmcm9udGVuZDgyIiwiYSI6ImNsMmgzaWJ0dzAwbHYzZHA4aGJmMnUxZ2UifQ.XOgUTl_zAT-vlW1nYOy7gA'}
        mapStyle={'mapbox://styles/mapbox/dark-v9'}
        // hash={true}
        onViewportChange={(newView) => {
          console.log(newView, 'newVIEW onViewportChange')
          setViewport({
            newView
          })
        }}
        ></ReactMapGL>
        </div>
        </div>
  )
}

const useStyles = makeStyles((theme) => ({
  map: {
    width: '100%',
    height: '800px',
    padding: '4rem 0',
    backgroundColor: '#5C5C5C',
    overflow: 'hidden'

  },
  map__container: {
    width: '90%',
    margin: '.2rem auto',
    height: '100%',
    padding: '2rem 0'
  },
  map__title: {
    textAlign: 'center',
    letterSpacing: '1px',
    color: '#F5F5F5',
    fontSize: '2.6rem'
  }

}))

export default MapBox