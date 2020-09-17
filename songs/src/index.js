import React from 'react';
import ReactDOM from 'react-dom';

//tenemos que tener la referecia de la selectedSongReducer
//en mayusculas porque los nombres de las variables de componentes van en mayusculas
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import App from './components/App';
import reducers from './reducers';

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
