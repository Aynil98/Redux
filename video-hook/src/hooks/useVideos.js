//hook para buscar y hacer una lista de videos
/*
lo que queremos ahora es importar los hooks primitivos que necesitamos

cambiamos el default de building por una variable de entrada para hacerlo mas personalizable
podemos retornar:
-     return [videos, search];
-   return {videos, search}; o  un objeto

cambiamos on onTermSubmit por search porque ahora es mas coherente
*/

import {useState, useEffect} from 'react';
import youtube from '../apis/youtube';

const useVideos=(defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
      search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const search = async (term) => {
      const response = await youtube.get('/search', {
        params: {
          q: term,
          part: 'snippet',
          maxResults: 5,
          type: 'video',
          key: 'AIzaSyDVfeUxsJzp8Vs0xnFGlhC2zrllcqbC4zc'
        },
      });

      setVideos(response.data.items);

    };

    return [videos, search];
};

export default useVideos;
