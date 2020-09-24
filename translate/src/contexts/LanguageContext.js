import React from 'react';

// const context = React.createContext('english');
// console.log(context);
// export default context;
/*vemos las propiedades del contexto el provider y el consumer*/

// export default React.createContext('english');

//quitar redux

const Context =  React.createContext('english');

export class LanguageStore extends React.Component {
  state ={language: 'english'};
  //tenemos nuestro estado y la capacidad de cambiarlo
  //funcion de devoluncion de llamada
  onLanguageChange=(language)=>{
    this.setState({language});
  }

  render(){
    //le damos al objeto del provider todos los valores del estado y la funcion
    /**/
    return(
      <Context.Provider value={{...this.state, onLanguageChange: this.onLanguageChange}}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
