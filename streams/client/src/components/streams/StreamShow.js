import React from 'react';
import flv from 'flv.js';
import {connect} from 'react-redux';
import {fetchStream} from '../../actions';

class StreamShow extends React.Component{
  constructor (props){
    super(props);
    this.videoRef=React.createRef();
  }
  //escoges el stream seleccionado sacarlo con mapStateToProp
  /* componentDidMount solo se llama una vez al principio por ello tenemos q buscar un metodo para llamar al build otra vez*/
  componentDidMount(){
    const {id} = this.props.match.params;
    //sale un error
    // console.log(this.videoRef); //vemos que es null porq la primera vez solo hya loading y no se crea nada para ello podemos esperar a cargar el titulo y desc antes

    this.props.fetchStream(id);
    this.buildPlayer();
  }
  //cuando se tenga un stream
  componentDidUpdate(){
    this.buildPlayer();
  }

  //para desconectarse del streams limpiar recursos
  componentWillUnmount(){
    // console.log('i was unmounted');
    this.player.destroy();
  }

  buildPlayer(){
    //se encargara del error
    if (this.player || !this.props.stream){
      return; //si no tenemos nada return
    }
    const {id} = this.props.match.params;
    //asignamos el resultado creando un reproductor
    this.player = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${id}.flv`
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  }

  render(){
    //manejar el caso en el que no tengas ningun stream
    if(!this.props.stream){
      return <div>Loading...</div>;
    }

    // const {title, description} = this.props.stream; si usas esto basta con poner {title} y {description} en el return
    /*usamos dos conjuntos de llaves poeque el externo significa que le vamos a passar o definir una expresion javaScript
    y el conjunto interno define un objeto real al que le damos una anchura*/
    return(
      <div>
        <video ref={this.videoRef} style ={{width:'100%'}}controls={true} />
        <h1>{this.props.stream.title}</h1>
        <h5>{this.props.stream.description}</h5>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps)=>{
  return {stream: state.streams[ownProps.match.params.id]};
};

export default connect (mapStateToProps, {fetchStream}) (StreamShow);
