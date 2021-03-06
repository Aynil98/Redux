import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

//tenemos una funcion flecha que devuelve una funcion flecha que es asyncrona y recibiremos ese argumentos
/* de dispach
el segundo argumento con el que redux thunk llama a las funciones internas para toodos los actionscreatos  else {
  el de obtner los estados getState funcion que nos da aceso a todos los datos dentro de redux
}
*/
export const fetchPostsAndUsers =()=> async (dispatch, getState) =>{
  //sera el unico creador de acciones por lo que cuando llamemos a fetchpost tenemos que pasar
  //el resultado de llamarla a nuestra funcion de dispach
  await dispatch(fetchPosts()); //para asegurarnos que esperamos a que sea completada

  // //tenemos que recorrerla y buscar el usuario para cada funciona usamos _.map
  // //una version que recuerda y queremos solo la propuedad de id de las publicacionesy encontrar solo las id UNICAS
  // const userIds = _.uniq(_.map(getState().posts, 'userId')); //retorna un array con solo las id unicas de los usuarios
  // userIds.forEach(id=> dispatch (fetchUser(id))); //no hace falta await porq no vamos a hacer nada mas


  //encadena funciones y los resultados es necesario terminar con value
  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id=>dispatch(fetchUser(id)))
    .value()
};

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({type:'FETCH_POST', playload: response.data});
  };


export const fetchUser = (id) => async dispatch =>{

  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({type:'FETCH_USER', playload: response.data});
};

// export const fetchUser = (id) =>dispatch => _fetchUser(id, dispatch);
//
// //es una funcion privada y hara de verdad la solicitud y luego envia la accion
// const _fetchUser = _.memoize(async(id, dispatch)=>{
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//
//   dispatch({type:'FETCH_USER', playload: response.data});
// });
