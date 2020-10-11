
import axios from 'axios';

//una copia de una solicitud especifica
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers:{
    Authorization: 'Client-ID CDksDMqjoW-sP8zilUFwDT6exTG6RJOCF4qB9FUdUi0'
  }
});
