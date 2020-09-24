import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import {fetchStream, deleteStream} from '../../actions';

/*queremos actualizar la routa agregando el id del stream que se quiere borrar*/

//usamos ractFragment para q no interviera el div en el estio del html del modal
class StreamDelete extends React.Component {
  componentDidMount(){
      // console.log(this.props);
      this.props.fetchStream(this.props.match.params.id);
  }

  renderActions(){
    const {id} = this.props.match.params;

    return (
      //para los botones
      /*queremos dar la funcionalidad al delete usamos una funcion flecha porque le queremos pasar un id especifico*/
      <React.Fragment>
        <button
          onClick={()=>this.props.deleteStream(id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button ">
          Cancel
        </Link>
      </React.Fragment>
    );
  }
  renderContent(){
    if(!this.props.stream){
      return 'Are you sure you want to delete this stream?'
    }

    return `Are you sure you want to delete this stream with tile: ${this.props.stream.title}`
  }
  render(){
    return(
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions= {this.renderActions()}
        onDismiss={()=>history.push('/')}
      />
    );
  }
}

const mapStateToProps=(state, ownProps)=>{
  return {stream: state.streams[ownProps.match.params.id]}
};

export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete);
