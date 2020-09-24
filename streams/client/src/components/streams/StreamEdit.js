import React from 'react';
import _ from 'lodash'; //para seleccionar los valores del objeto que queremos editar
import {connect} from 'react-redux';
import {fetchStream, editStream} from '../../actions';
import StreamForm from './StreamForm';
/*tenemos que pasar valores iniciales a aparte del onSubmit*/

class StreamEdit extends React.Component{
  componentDidMount(){
    this.props.fetchStream(this.props.match.params.id);
  }


  //le pasas solo las propiedades que vas a cambiar
  onSubmit=(formValues)=>{
    // console.log(formValues);
    this.props.editStream(this.props.match.params.id, formValues);
  };

  /*initial values es una propiedad especial de Redux que se le pasa un objeto en el objeto pones los nombres de los FIELD a los que les quieres
  asignar el valor
    initialValues = {{title:'edit me', description:'change too'}} x
    le pasamos el stream que es un objeto con la propiedad de titulo y description
  cuando lo editemos llama a onSubmit y ahi cambia */
  render(){
    // console.log(this.props);
    if (!this.props.stream){
      return <div>Loading...</div>;
    }
    return(
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          initialValues ={_.pick(this.props.stream, 'title', 'description')}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

//lo seguimos necesitando para obtener los valores iniciales del formulario
const mapStateToProps=(state, ownProps)=>{
  // console.log(ownProps);
  return {stream: state.streams[ownProps.match.params.id] };
};

export default connect (mapStateToProps, {fetchStream, editStream})(StreamEdit);
