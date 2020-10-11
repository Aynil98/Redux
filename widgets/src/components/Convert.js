import React, {useState, useEffect} from 'react';
import axios from 'axios';
//arreglamos lo de las multiples veces que se busca cada vez que se cambia
/*
agregar la caracteristica de salida profunda agregamos un segundo elemento llamado debouncedText
luego creamos dos funciones de efectos de uso separadas
la primera se ejecutara siempre que cambie el texto
la segunda se ejecutara cuando el texto de rebote d ela base de datos tennga cambios de estado y es con este con el que se hace la peticion
en la primera haremos lo del temporizador y se actualizara al final la debouncedtext.
*/

const Convert = ({language, text})=>{
  const [translated, setTranslated]=useState('');
  const [debouncedText, setDebouncedText] = useState(text);

  //el primer useEffect
  useEffect(()=>{
    const timerId = setTimeout(()=>{
      setDebouncedText(text);
    }, 500);

    return ()=>{
      clearTimeout(timerId);
    };
  }, [text]);

  //cambiamos text por debouncedText para reutilizarlo para la segunda useEffect
  useEffect(()=>{
    const doTranslation = async () =>{
      //hacer la request a la api la primera es vacia por el post
      const {data} = await axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        {},
        {
          params:{
            q: debouncedText,
            target: language.value,
            key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };
    doTranslation();
  }, [language, debouncedText]);

  return (
    <div>
      <h1 className = "ui header">{translated}</h1>
    </div>
  );
};

export default Convert;
