/*
van los reducers
importaremos redux para conectar los reductores y combinar la funcion
*/

import {combineReducers} from 'redux';


const songsReducer = () =>{
  //devolvemos un array en el que cada elemento es un objeto con la inf de cada cancion
  //en el ejemplo es estático
  return[
    {title:'No Scrubs', duration: '4:05'},
    {title:'Macarena', duration: '2:30'},
    {title:'All Star', duration: '3:15'},
    {title:'I Want it That Way', duration: '1:45'}
  ];
};

//se pone a null porq en la primera vez no tenemos nada seleccionado
const selectedSongReducer =(selectedSong=null, action) =>{
  if (action.type === 'SONG_SELECTED'){
    return action.payload;
  }

  return selectedSong;
};

//se le pasa el objeto que son las claves que reciben
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
