import React from 'react';


//<form onSubmit={(e)=>this.onFormSubmit(e)} className="ui form"> ---->otra solución
//vamos a pasar el valor que se ha escrito al componente de la APP la cual se sencarga de llamar a la API que proporciona las imagenes
//props solo pasa del padre al hijo, al reves ?? refactorizamos App.js en un componente basado en clases
class SearchBar extends React.Component {
  state = {term:''};

  onFormSubmit = (event) =>{ //usan bind de forma automatica
    event.preventDefault();
    // como se llama a una props en una clase hay que poner this.//llamara a la funcion de App.js y se lo pasará
    this.props.onSubmit(this.state.term);
  };

  // onFormSubmit  (event) { //pasarlo con la function flecha
  //   event.preventDefault();
  //   console.log(this.state.term);
  // }
  render(){
    return(
      <div className = "ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type ="text"
              value ={this.state.term}
              onChange={(e)=> this.setState ({term: e.target.value})}
             />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
