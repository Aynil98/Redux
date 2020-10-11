import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';
//implementar keys in lists

const ImageList = (props) =>{
  const images = props.images.map((image) => {
    //mirando los resultados de la consola vemos como llegar al url
    //solo asignamos la clave al elemento raiz que se retorna
    //para no repetir la palabra image la quitamos del const y ponemos lo que queremos
    // return <img alt={description} key={id} src = {urls.regular}/>
    return <ImageCard key={image.id} image ={image}/>

  });
  return <div className="image-list">{images}</div>;
};

export default ImageList;
