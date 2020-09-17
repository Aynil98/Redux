import React from 'react';
// import {selectSong} from '../actions'
import SongList from './SongList'
import SongDetail from './SongDetail';
/*
con redux usamos menos los estados en React
si creamos un indice en actios a la hora de importat podemos hacer import actions from '../actions' sin especificar el file
*/
const App = ()=> {
  return(
    <div className ="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList/>
        </div>
        <div className="column eight wide">
          <SongDetail/>
        </div>
      </div>
    </div>
  );
};

export default App;
