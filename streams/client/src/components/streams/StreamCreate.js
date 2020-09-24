//ya no mostrara el formulario

import React from 'react';
import {connect} from 'react-redux'; //para conectar con la api
import {createStream} from '../../actions';
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {
  //si necesitamos la devolucion de llamada para que se envie el formulario
  onSubmit = formValues =>{
    this.props.createStream(formValues);
  };

  render (){
    // console.log(this.props);
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit}/>
      </div>
    );
  }
}


export default  connect(null,{createStream})(StreamCreate);
