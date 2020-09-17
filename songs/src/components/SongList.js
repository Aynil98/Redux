import React from 'react';

import {connect} from 'react-redux';
import {selectSong} from '../actions';

class SongList extends React.Component{
  renderList(){
    return this.props.songs.map((song)=>{
      return(
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={()=> this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div>
            <div className="content">{song.title}</div>
          </div>
        </div>
      );
    });
  }
  render(){
     // console.log(this.props);
    return <div className ="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps =(state)=>{
  //cada vez que se pulse el boton se tiene que ejecutar esta funcion
  // console.log(state);
  return {songs: state.songs};
}

export default connect(mapStateToProps, { selectSong: selectSong } )(SongList);
/*como llamamos al action creator para ello la importamos y se la pasamos como segundo argumento al connect como un objeto en el que tendra
*/
