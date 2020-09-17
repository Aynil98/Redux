          // //se encarga de la solicitud
          // export const fetchPosts = async ()=>{
          //   //mal enfoque¡¡¡ rompe las reglas de redux
          //   const response = await jsonPlaceholder.get('/posts');
          //
          //   return{
          //     type:'FETCH_POST',
          //     playload: response
          //   };
          // };
/* se debe a que en el asyc primero hacemos la request y despues d eesperear recibimos el objeto, pero el dispach
recibe primero la solicitud y eso no es un objeto plano por eso da error*/
          // export const fetchPosts = ()=>{
          //   //mal enfoque¡¡¡ rompe las reglas de redux
          //   const promise =jsonPlaceholder.get('/posts');
          //
          //   return{
          //     type:'FETCH_POST',
          //     playload: promise
          //   };
          // };
/*esto no da error pero tampoco funciona, la promise te avisa de cuando está lista la solicitud, pero todo el ciclo de
redux pasa en milisegundos antes de que se realice la solicitud y no dara ningun dato*/
//SE ARREGLA CON MIDDLEWARES
/*Dispach va a dar la accion a una middleware y esta la enviara a reducers podemos tener tantas como queramos
- es una funcion de javascript que se llama con cada accion de despache
- dentro tiene la abilidad de para y modificar el envio
-se usan para tratar con async
- usamos la mmamada redux-thunk
REDUX thunk
la accion de creador puede retornar objeto o una funcion y es un obj tiene que tenr un type
y recibimos el envio y obtenemos estados como argumentos
podemos pasr acciones a la funcion dispach esperamos a tener la respuesta y luego haces el dispach manualmetne esta se creat
una nueva accion que serña un objeto se ira al dispach pasara por la middle y este sera un objeto y pasara a los reducers
se hace esto en index ppal
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk;'
*/

import jsonPlaceholder from '../apis/jsonPlaceHolder';

// export const fetchPosts = ()=>{
//   return async function(dispatch, getState){
//     const response = await jsonPlaceholder.get('/posts');
//
//     dispach({type:'FETCH_POST', playload:response})
//   };
// };
//refactor

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({type:'FETCH_POST', playload:response})
  };
