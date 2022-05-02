import React, { useEffect, useState } from 'react'
import { logoutAsync } from '../redux/actions/actionLogin';
import { useDispatch } from 'react-redux';
import { getAuth } from 'firebase/auth';
import Navbar from './Navbar';

//Material ui
import { makeStyles } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';


const Header = () => {
  const classes = useStyles();
  const [ state, setState ] = useState();

  const dispatch = useDispatch();

  const [user, setUser] = useState(null);
 


  // const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        setState({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude
        })
      },
      function (error) {
        console.log(error);
      },
      {
        enableHighAccuracy: true
      }
    )

    const auth = getAuth().currentUser;
    setUser(auth);
  }, [])
  

  const handleLogout = () => {
    dispatch(logoutAsync());
    navigate('/login');
  }

  return (
  <div>
    <div className={classes.header__container}>
      <Link to='/'>
        <img 
        className={classes.logo}
        src='https://cdn-icons-png.flaticon.com/512/129/129023.png'/>
      </Link>

     

        <div
        className={classes.header__nav}
        >
          {/* /login */}
          <Link to='/login'>
          <div
          onClick={handleLogout} 
          className={classes.header__option}>
                <span
                className={classes.header__optionLineOne}
                >
                    Hello {!user ? 'Guest' : user.email}
                </span>
                <span
                className={classes.header__optionLineTwo}
                >
                    { user? 'Sign Out' : 'Sign In'}
                </span>
            </div>
          </Link>
          {/* /login */}
        
        </div>
        <div>
        </div>
    </div>
    <Navbar />
    {/* <NavFilter /> */}
  </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'sticky',
    top: 0,
    zIndex: 100
  },
  header__container: {
    padding: "1rem 0",
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    alignItems: 'center',
    backgroundColor: '#131921',  
  },
  logo: {
    width: '100px',
    objectFit: 'contain',
    margin: '0 20px',
    marginTop: theme.spacing(1)
  },
  header__nav: {
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  header__option: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: theme.spacing(1),
    color: 'white',
    cursor: 'pointer'
  },
  header__optionLineOne: {
    fontSize: '20px',
    textDecoration: 'none'
  },
  header__optionLineTwo: {
    fontSize: '14px',
    textDecoration: 'none',
    padding: '.4rem .8rem',
    backgroundColor: '#5C5C5C'
  }

}))

export default Header
