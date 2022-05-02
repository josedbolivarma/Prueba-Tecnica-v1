import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import DashboardRoute from './DashboardRoute';
import PrivateRouters from './PrivateRouters';
import PublicRouters from './PublicRouters';

const AppRoutes = () => {
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user)=>{
        if(user?.uid){
          setIsLoggedIn(true);
        }
        else{
            setIsLoggedIn(false)
        }
        setChecking(false)
    })

  
 }, [setIsLoggedIn, setChecking]);

  
  if(checking) {
    return (
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgb(43,49,53)',
        background: 'linear-gradient(90deg, rgba(43,49,53,1) 0%, rgba(67,72,78,1) 44%, rgba(62,67,73,1) 57%, rgba(46,51,55,1) 100%)',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0'
      }}>
        <div 
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        >
        <img width='200px' height='auto' src='https://cdn-icons-png.flaticon.com/512/129/129023.png' alt='Loader'/>
        </div>
      </div>
    )
  }

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/login' element={
                    <PublicRouters isAuth={isLoggedIn}>
                        <Login/>
                    </PublicRouters>
            }/>


            <Route path='/register' element={
              <PublicRouters isAuth={isLoggedIn}>
                  <Register />
              </PublicRouters>
            }/>

            <Route path='/*' element={
              <PrivateRouters isAuth={isLoggedIn}>
                  <DashboardRoute />
              </PrivateRouters>
            }/>
        </Routes>

    </BrowserRouter>
  )
}



export default AppRoutes;


