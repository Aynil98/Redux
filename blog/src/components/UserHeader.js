import React from 'react';
import {connect} from 'react-redux';
// import {fetchUser} from '../actions';
/*para que no haga multiples busquedas de cada usuario: se arregla con lodash*/
class UserHeader extends React.Component{
  // componentDidMount(){
  //   this.props.fetchUser(this.props.userId);
  // }

  //buscar el usuario que queremos find se puede llamar con una funcion que se invoca con cada elemento de la matriz
  // cuadno devuelva true la funcion de busqueda se detieney devuelve el elemento
      //si no ha encontrado ningun usuario no devuelve nada
  render(){
    const user = this.props.user;
    // const {user} = this.props;
    if(!user){
      return null;
    }
    return <div className="header">{user.name}</div>;
  }
}

//le pasamos el usuario que queremos buscar
const mapStateToProps = (state, ownProps)=>{

  return {user: state.users.find(user => user.id === ownProps.userId)};
};

// export default connect (mapStateToProps, {fetchUser})(UserHeader);
export default connect (mapStateToProps)(UserHeader);
