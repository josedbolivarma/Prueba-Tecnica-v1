import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { typesTravels } from "../types/types"; 

// ------- Agregar desde formik ------- //
export const addFormikAsync = (travel) => {
  console.log('Action addFormik ',travel);
  return (dispatch) => {
      addDoc(collection(db, 'travelsDB'), travel)
          .then(resp => {
              console.log(resp);
              dispatch(addFormikSync(travel))
          })
          .catch(error => {
              console.warn(error);
          })
  }
}

export const addFormikSync = (travel) => {
  return {
      type: typesTravels.add,
      payload: travel
  }
}
//--------------------------------------//

//---------------listar----------------//
export const listAsync = () => {
  return async (dispatch) => {
      const collectionTraer = await getDocs(collection(db, "travelsDB"));
      const travels = [];
      collectionTraer.forEach((doc) => {
        travels.push({
              ...doc.data()
          })
      })
      dispatch(listSync(travels));
  }
}

export const listSync = (travels) => {
  return {
      type: typesTravels.list,
      payload: travels
  }
}

//----------------------------------------------//


//-------------------delete--------------------//
export const deleteAsync = (travel) => {
  return async (dispatch) => {
      const collectionTraer = collection(db, "travelsDB");
      const q = query(collectionTraer, where("nombre", "==", travel));
      const traerDatosQ = await getDocs(q);
      traerDatosQ.forEach((docum => {
          deleteDoc(doc(db, "travelsDB", docum.id))
      }))
      dispatch(deleteSync(travel));
      dispatch(listAsync());
  }
}

export const deleteSync = (travel) => {
  return {
      type: typesTravels.delete,
      payload: travel
  }
}

export const editAsync = (nombre, travel) => {
  return async (dispatch) => {
      const collectionTraer = collection(db, "travelsDB");
      const q = query(collectionTraer, where("nombre","==", nombre ));
      const traerDatosQ = await getDocs(q);
      console.log(q, traerDatosQ);
      let id;
      traerDatosQ.forEach( async (docu) => {
          id = docu.id;
      })
      // console.log(id);
      const documRef = doc(db, "travelsDB", id)
      await updateDoc(documRef, travel)
          .then(resp => {
              dispatch(listAsync());
              console.log(resp);
          })
          .catch((err) => console.log(err));
          dispatch(editSync(travel));
  }
} 

export const editSync = (travel) => {
  return {
      type: typesTravels.edit,
      payload: travel
  }
}

//----------------------------------------------//