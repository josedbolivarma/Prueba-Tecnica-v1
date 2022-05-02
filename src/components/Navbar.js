import React from 'react'
import { Link } from 'react-router-dom';

// Material UI
import { makeStyles } from '@material-ui/core';

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <div className={classes.navbar__box}>
          <Link to='/' className={classes.navbar__link}>Home</Link>
          <Link to='travels' className={classes.navbar__link}>My Travels</Link>
          <Link to='form' className={classes.navbar__link}>Plan Your Next Travel</Link>
        </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        padding: theme.spacing(3.4),
        backgroundColor: '#242F3E',
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing(4)
    },
    navbar__box: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '.8rem',
        color: 'white',
        gap: theme.spacing(4)
    },
    navbar__link :{
      color: '#FFF',
      fontSize: '1.2rem',
      textDecoration: 'none'
    }
}))

export default Navbar