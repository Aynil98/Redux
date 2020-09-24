import streams from '../apis/streams';
import history from '../history';
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM
} from './types';


export const signIn = (userId)=>{
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = ()=>{
  return {
    type: SIGN_OUT
  };
};

// export const createStream = formValues =>  async (dispatch) =>{
//   //controlar el flujo de los post y listarlos
//     const response = await streams.post('/streams', formValues);
//     dispatch({type:CREATE_STREAM, payload: response.data});
// };
//para unir el stream al userId
export const createStream = formValues =>  async (dispatch, getState) =>{
  //controlar el flujo de los post y listarlos
    const {userId}=getState().auth;
    const response = await streams.post('/streams', {...formValues, userId});
    dispatch({type:CREATE_STREAM, payload: response.data});
    //hacemos la navegacion to get the user back to de route complicado porque acccedemos al historial
    //desde un action creator y no desde un componente podemos pasarle tambien el history Object
    //pero vamos a usar otra solucion vamos a crear nosotros el historial del browser por lo que vamos a cambiar el browser router
    history.push('/');
};

export const fetchStreams = () =>  async dispatch =>{
    const response = await streams.get('/streams');
    dispatch({type:FETCH_STREAMS, payload: response.data});
};

export const fetchStream = (id) => async dispatch =>{
  const response = await streams.get(`/streams/${id}`);
  dispatch({type:FETCH_STREAM, payload: response.data});
};

export const editStream = (id, formValues) => async dispatch =>{
  const response = await streams.patch(`/streams/${id}`, formValues);
  dispatch({type: EDIT_STREAM, payload: response.data});
  history.push('/');
};

export const deleteStream = (id) => async dispatch => {
  await streams.delete(`/streams/${id}`);
  dispatch({type:DELETE_STREAM, payload: id});
  history.push('/');
};
