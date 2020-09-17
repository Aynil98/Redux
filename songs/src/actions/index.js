/*
first action creator
*/
//action creator
export const selectSong = (song) =>{
  //Return an action
  return{
    type: 'SONG_SELECTED',
    payload: song
  };
};

//exportarlo con un sisrema que permite exportar varios poniendo {} en el import si es default no hace falta
