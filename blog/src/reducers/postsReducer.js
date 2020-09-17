/*rules:
- da error con valores indefinidos
produce los estados solo com el estado anterior y la accion
son puros cada vez que s ellama no se puede hacer nada donde se hagan solicitudes solo use el estado y la acciones
'mutaciones: cuando cambias los valores que tiene el objeto' no mutamos el state dentro de un reducer solo creas nuevos
si mutamos, el resto d eelemntos d eredux no sabe que la store ha cambiado y no se renderizara que si no haces cambios bien el createStore
de la app no lo va a detectar.
 */

//
// export default (state=[], action)=>{
//   if (action.type === 'FETCH_POST' ){
//     return action.playload;
//   }
//   return state;
// };


export default (state=[], action)=>{
  switch (action.type){
    case 'FETCH_POST':
      return action.playload;
    default:
      return state;
  }
};
