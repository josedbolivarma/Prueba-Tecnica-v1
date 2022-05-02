import React, { useState } from 'react'

//Material UI
import { makeStyles } from '@material-ui/core';
import Sidebar from './Sidebar';

const TravelCard = ({item}) => {

  const classes = useStyles();

  const [showSidebar, setShowSidebar] = useState([]);
  const [modal, setModal] = useState(false);

  const editarModal = (productItem) => {
    console.log('setShowModal', productItem.nombre);
    setModal(true);
    console.log('MODAL', modal);
    if(!modal) {
      setModal(true);
      setShowSidebar(productItem);
    } else {
      setModal(false);
      setShowSidebar([]);
    }
  }

  return (
    
    <div className={classes.travels__gridItem}>
<img onClick={() => editarModal(item)} className={classes.travels__gridImage} src={item.image__front} alt={item.nombre}/>
<div className={classes.travels__gridText}>
  <h2>{item.nombre}</h2>
  <p style={{textTransform: 'uppercase'}}>{item.categoria}</p>
  <h3>Estimated Price: ${item.precio}</h3>
</div>
        {
          modal === true ? <Sidebar modalSidebar={showSidebar}  modalBoolean={modal}/> : ''
        }
    </div>


  )
}

const useStyles = makeStyles((theme) => ({
    travels__gridItem: {
        height: '380px',
        borderRadius: '12px',
        background: '#e0e0e0',
        boxShadow:  '15px 15px 30px #aaaaaa,-15px -15px 30px #ffffff'
      },
      travels__gridImage: {
        width: '100%',
        cursor: 'pointer'
      },
      travels__gridText: {
        padding: theme.spacing(2)
      }
}))

export default TravelCard;