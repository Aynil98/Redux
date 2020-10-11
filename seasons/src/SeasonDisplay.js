import './SeasonDisplay.css'
import React from 'react';

const seasonConfig = {// son dos objetos (objeto de configuracion)
  summer: {
    text: "Lets hit the beach!",
    iconName: 'sun'
  },
  winter: {
    text: "Burr, its chilly",
    iconName: 'snowflake'
  }
};

const getSeason = (lat, month) => {
  if (month >2 && month<9){
    //si es cierto devuelve summer si no winter
      return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  // const text = season ==='winter' ? 'Burr, its chilly' : 'Lets hit the beach';
  // const icon = season === 'winter' ? 'snowflake' : 'sun';
  //EXTRAER EL TEXTO Y ICONO
  const {text, iconName} = seasonConfig[season]; // {text, iconName}
  //cadena de plantilla
  //elemento raiz tenga mismo nombre para css que el componente
  return (
    <div className={`season-display ${season}`}>
      <i className={` icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={` icon-right massive ${iconName} icon`} />
    </div>
  );
}

export default SeasonDisplay;
