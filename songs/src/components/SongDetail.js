import React from 'react';
import {connect} from 'react-redux';

//const SongDetail =(props)=>{

const SongDetail =({song})=>{
  // console.log(props);
  //sale error porque la primera vez no hay cancion seleccionada y es null
  if (!song){
    return <div>Select a song</div>;
  }

  return(
    <div >
      <h3>Details for:</h3>
      <p>
        Title:{song.title}
        <br />
        Duration: {song.duration}
      </p>
    </div>
  );
};

//queremos obtener la informacion del store
const mapStateToProps=(state)=>{
  return {song: state.selectedSong}
};

export default connect(mapStateToProps)(SongDetail);
