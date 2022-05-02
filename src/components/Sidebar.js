import React, { useState } from 'react'

//Material UI
import { makeStyles } from '@material-ui/core'
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import { Field, Form, Formik } from 'formik';
import { editAsync, deleteAsync } from '../redux/actions/actionTravels';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    nombre: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    categoria: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    codigo: Yup.string(),
    precio: Yup.number()
});


const Sidebar = ({ modalSidebar } ) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [clicked, setClicked] = useState(true);

  const handleClicked = () => {
      setClicked(false);
  }

  const handleSubmit = (values) => {
    // e.preventDefault()
  //  console.log(values)
  const nombre = modalSidebar.nombre; 
   dispatch(editAsync(nombre, values))
   setClicked(false);
    }

  return (
    <div className={clicked? classes.sidebar : classes.none }>
        <div className={classes.sidebar__container}>
            <div className={classes.sidebar__modal}>
            <span onClick={handleClicked}>
                <CancelPresentationIcon className={classes.sidebar__close}/>
            </span>
            <div className={classes.sidebar__boxFlex}>
                <div>
                <h2>{modalSidebar.nombre}</h2>
            <img className={classes.sidebar__image} src={modalSidebar.image__front} alt='Modal Edit'/>
                </div>
                <button onClick={() => dispatch(deleteAsync(modalSidebar.nombre))} className={classes.sidebar__button}>Delete</button>
            </div>
            <h2>{modalSidebar.categoria}</h2>
            <p>${modalSidebar.precio}</p>
            {/* <form onSubmit={handleSubmit} className={classes.sidebar__form}>
                <input className={classes.sidebar__input} type='text' placeholder='Nombre' value={modalSidebar.nombre}/>
                <input className={classes.sidebar__input} type='text' placeholder='Precio' value={modalSidebar.precio}/>
                <input className={classes.sidebar__input} type='text' placeholder='Categoria' value={modalSidebar.categoria}/>
            </form> */}

<Formik
      initialValues={{
        nombre: modalSidebar.nombre,
        categoria: modalSidebar.categoria,
        precio: modalSidebar.precio,
       
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        handleSubmit(values)
      }}
    >
      {({ errors, touched}) => (
        <Form className={classes.sidebar__form}
        style={{
          
        }}
        >
                <h1>Editar</h1>
          <Field className={classes.sidebar__input} placeholder="Nombre del Producto" name="nombre" />
          {errors.nombre && touched.nombre ? (
            <div>{errors.nombre}</div>
          ) : null}

          <Field className={classes.sidebar__input} placeholder="Categoria" name="categoria" />
          {errors.categoria && touched.categoria ? (
            <div>{errors.categoria}</div>
          ) : null}
          <Field className={classes.sidebar__input} placeholder="Precio" name="precio" />
          {errors.precio && touched.precio ? (
            <div>{errors.precio}</div>
          ) : null}
       
          
     

          <button
           className={classes.sidebar__button}
          type="submit">Editar</button>
        </Form>
      )}
    </Formik>

        </div>
    </div>
       
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    sidebar: {
        position: 'absolute',
        padding: theme.spacing(2),
        backgroundColor: '#CCC',
        top: '0',
        bottom: '0',
        right: '0',
        left: '0',
        zIndex: '1000',
        opacity: '.9',
        transition: '3s all ease'
    },
    sidebar__container: {
        position: 'relative',
        width: '80%',
        height: '100%',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    sidebar__modal: {
        position: 'relative',
        width: '100%',
        backgroundColor: '#FFF',
        padding: theme.spacing(4)
    },
    none: {
        display: 'none',
        pointerEvents: 'none',
    },
    sidebar__image: {
        widht: '200px',
        height: '200px'
    },
    sidebar__form: {
        marginTop: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(1)
    },
    sidebar__input: {
        padding: '.4rem .6rem'
    },
    sidebar__close: {
        position: 'absolute',
        top: '45%',
        right: '-32px',
        fontSize: '4rem',
        cursor: 'pointer'
    },
    sidebar__button: {
        width: '100%',
        padding: '.6rem 0',
        border: 'none',
        outline: 'none',
        backgroundColor: '#333',
        color: '#FFF',
        cursor: 'pointer'
    },
    sidebar__boxFlex: {
        display: 'flex',
        gap: theme.spacing(2),
        justifyContent: 'center',
        alignItems: 'center'
    }
  
}))

export default Sidebar