import React from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';

/* ------ Material UI - CORE ------ */
import { makeStyles } from '@material-ui/core'
;
import MapBox from '../components/MapBox';
import SmartComponent from '../containers/SmartComponent';
/* ------ Material UI - ICONS ------ */


const Home = () => {
  const classes = useStyles();

  //
  return (
    <div className={classes.home}>
      <SmartComponent />
      <MapBox />
    </div>
  )
};

const useStyles = makeStyles((theme) => ({
  home: {
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column'
    
  }
}))

export default Home;