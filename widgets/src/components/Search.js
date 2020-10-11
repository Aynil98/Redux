import React, {useState, useEffect} from 'react';
import axios from 'axios';
/*
creamos un estado que contenga el contenido de la busqqueda
UseEffect:
- elprimer argumento siempre es una funcion
- segundo argumento para saber cual de los tres escenarios queremos
 para cambios siempre que se renderiza nada (2) o tambien cambia dato[hgjg] (3), [] si solo la primera ve (1)
   const Search = () => {
     const [term, setTerm]=useState('');

     UseEffect(()=>{
       console.log('I ONLY RUN ONCE');
     }, []);

     useEffect(()=>{
       console.log('I RUN AFTER EVERY RENDER AND AT INITIAL RENDER');
     });

     useEffect(()=>{
       console.log('I RUN AFTER EVERY RENDER AND AT INITIAL RENDER');
     }, [term, ...]);

  usamos esto para que cuando cambie el termino se haga la busqueda a la API de wikipedia
  USAREMOS LA 3 DENTOS SE HACE LA REQUEST QUE QUEREMOS¡¡
  pero no se puede usar async y esperar   useEffect(async()=>{
  tres maneras:
  - definir una funcion y marcarla como asicrona
            useEffect(()=>{
                const search = async()=>{
                  await axios.get('adadf');
                };
                search();
            }, [term]);
- eliminar la variable temporal y la llamas a la vez
            useEffect(()=>{
                (async()=>{
                  await axios.get('adadf');
                })();

            }, [term]);
- usar la promesa
          useEffect(()=>{
            axios.get('asdff')
              .then((response)=>{
                console.log(response.data);
              });

          }, [term]);
  USAMOS LA PRIMERA
  creamos la variable resultado y a la busqueda le asignamos una constante y se la ponemos al result

  mapearemos los resultados
  usamos el titulo
  poner la key para cada elemnteo pageid mirarlo en network

  queremos quitar los elementos de span que salen en el snippet
  -           <span dangerouslySetInnerHTML={{__HTML: result.snippet}}></span>
  se incluye un agujero de seguridad que se puede atacar para ejecutar javaScript en la app

  haremos un boton para acceder a las paginas

  queremos arreglar lo de la busqueda vacía
  solo hacemos una request cuando esta todo escrito esperar un tiempo sin que se hagan cambios y realizar la busqqueda
  para ello podemos usar un timer para cada caracter y cuando se pulse uno para el timer del anterior ms
  - setTimeout
  -clearTimeout
  para ello damos un id a cada timeout
  solo se nos permite devolver otra funcion primero se hace el return y luego se ejecuta de nuevo
  useEffect(()=>{
    return()=>{
      //cleanup function
  };
  }, [term]);

  queremos quitar el programming inicial

*/
const Search = () => {
  const [term, setTerm]=useState('programming');
  const [results, setResults]= useState([]);

  useEffect(()=>{
      const search = async()=>{
        const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
          params: {
            action: 'query',
            list: 'search',
            origin: '*',
            format: 'json',
            srsearch: term,
          },
        });
        setResults(data.query.search);
      };

      //para la primera vez
      if (term && !results.length){
        search();
      }else{
        const timeoutId = setTimeout(()=>{
          if (term){
            search();
          }
        }, 1000);

        return ()=>{
          clearTimeout(timeoutId);
        };
      }
  }, [term]);

  const renderedResults = results.map((result)=>{
    return(
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">
            {result.title}
          </div>
          <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
        </div>
      </div>
    );
  })

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter search Term</label>
          <input
            value={term}
            className="input"
            onChange={(e)=>setTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="ui celled list">
        {renderedResults}
      </div>
    </div>
  );
}

export default Search;
