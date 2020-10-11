/*
cambios para usar hoock
1: importar useState nos da acceso al sistema de estado de un componente funcional
2: inicializar el nuevo estado   const[activeIndex, setActiveIndex]= useState(null);
  otro tipo de referencia array, no crea la matriz solo queremos acceso a la variable de los elementos y asugnarles otro valor
3: actualizar el estado en onTitleClick
4: imprimir el valor del indice activo en el return ultimo

para expandir comparamos el indice de lo que se ha pulsado con el indice del items.map y cuando sean iguales se expanden
para ello definimos en rel renderedItems una constante para definir cuando se aplica o no el active y la ponemos en el div
<div className={"title" + active} onClick={()=> onTitleClick(index)}> o como lo hacemos
*/
import React, {useState} from 'react';

const Accordion = ({items}) => {
  const[activeIndex, setActiveIndex]= useState(null);

  const onTitleClick = (index)=>{
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index)=>{
    const active = index === activeIndex ? 'active': '';
    return (
      <React.Fragment key ={item.title}>
        <div className={`title ${active}`} onClick={()=> onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });



  return (
    <div className="ui styled accordion">
      {renderedItems}
    </div>
  );

};

export default Accordion;
