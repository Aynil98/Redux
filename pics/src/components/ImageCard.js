//componente para encargarse del tamanio de cada imagenes

// //    <img
//       alt={this.props.image.description}
//       src={this.props.image.urls.regular}
//     />
import React from 'react';

class ImageCard extends React.Component {
  constructor(props){
    super(props);

    this.state ={spans: 0};
    //creamos una referencianpara obtener un control sobre un elemento en particular generado por una etiqueta
    this.imageRef = React.createRef();
  }

  componentDidMount(){
    //para esperar a que se descarge la img para ver sus parametros
    this.imageRef.current.addEventListener('load', this.setSpans);
    // console.log(this.imageRef.current.clientHeight);
  }

  setSpans = () =>{
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10 );
    this.setState({spans})
  };

  render (){

    const {description, urls} = this.props.image;
    return (
      <div style={{gridRowEnd:`span ${this.state.spans}`}}>
          <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
