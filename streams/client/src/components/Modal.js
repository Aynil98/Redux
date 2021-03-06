import React from 'react';
import ReactDOM from 'react-dom';
//ponemos la referencia de donde queremos q este coma despues del html y agregamos un div con class modal en el
//index.html de public debajo de root
/*queremos que cuando se da fuera del modal se programe la ruta para ir a otro sitio
como el onclick lo hereda el hijo, funcioa mal porque tambien desaparece si das a un elemento de dentro
hacemos otro onclick en el hijo y este obtiene como argumento el evento para evitar que se propague
queremos hacerlo reutilizable por lo que el contenido debe de ser editable
este comportamiento de que pulsando fuera vaya a la raiz tambien hay que hacerlo customizable*/

const Modal = props => {
  return ReactDOM.createPortal(
    <div
      onClick={props.onDismiss}
      className="ui dimmer modals visible active"
    >
      <div
        onClick={(e)=>e.stopPropagation()}
        className="ui standard modal vidible active"
      >
        <div className="header">{props.title}</div>
        <div className="content">
          {props.content}
        </div>
        <div className="actions">
          {props.actions}
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
