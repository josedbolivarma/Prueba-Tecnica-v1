import React, { useEffect, useState } from 'react';

// Material UI
import { makeStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { listAsync } from '../redux/actions/actionTravels';
import { CardTravel } from '@material-ui/icons';
import TravelCard from '../components/TravelCard';

const Travels = () => {
  const classes = useStyles();

  const { travels } = useSelector(store => store.travels);

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(listAsync());
  }, []);


  return (
    <div className={classes.travels}>
        <div className={classes.travels__container}>
            <div className={classes.travels__grid}>
              {
                travels.map((item, index) => (
                  <TravelCard
                  key={index}
                  item={item}
                  />
                ))
              }

              
            </div>
        </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    travels: {
        width: '100%',
        height: '100%',
        margin: '4rem 0'
    },
    travels__container: {
        width: '90%',
        margin: '0 auto'
    },
    travels__grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: theme.spacing(3.4),
    }
}))

export default Travels