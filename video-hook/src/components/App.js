import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

//onVideoSelect={(video)=>setSelectedVideo(video)}

const App = () => {

  const [selectedVideo, setSelectedVideo] = useState(null);

  //tenemos que asegurrnos de que el primer video que se selecciona es el primero de la lista
  const [videos, search] = useVideos('buildings');

  //cada vez que obtengas una nueva lista de videos se hara la funcion useEffect Y SE SELECCIONARA EL PRIMER
  useEffect(()=>{
    setSelectedVideo(videos[0]);
  },[videos]);


  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
