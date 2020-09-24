import _ from 'lodash';
import {
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM
} from '../actions/types';

/*vamos a usar mapkeys que convierte un array en un objeto y le pasas que propiedad quieres que sea la key del objeto*/
export default (state = {}, action) => {
  switch (action.type){
    case FETCH_STREAMS:
      return {...state, ..._.mapKeys(action.payload, 'id')};
    case FETCH_STREAM:
    //coje todos los valores del obj state, y agrega dinamicamente el nuevo valor
      return {...state, [action.payload.id]: action.payload};
    case CREATE_STREAM:
      return {...state, [action.payload.id]: action.payload};
    case EDIT_STREAM:
      return {...state, [action.payload.id]: action.payload};
    case DELETE_STREAM:
      //SOLO TENEMOS EL ID VAMOS A USAR LODASH, omit no modifica el original solo crea uno nuevo amitiendo el del id que le pasas
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
