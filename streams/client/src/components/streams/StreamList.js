import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchStreams} from '../../actions';

class StreamList extends React.Component {
  componentDidMount(){
    this.props.fetchStreams();
  }
//queremos pasar el id del stream para saber cual es ql que editamos o eliminamos
//quitamos los botones y ponemos Link
          // <button className="ui button primary">
          //   Edit
          // </button>
          // <button className="ui button negative">
          //   Delete
          // </button>
//en APP tenemos que indicar que podemos tener la routa con el id
  renderAdmin(stream){
    if(stream.userId === this.props.currentUserId){
      return(
        <div className="right floated content">
          <Link
            to ={`/streams/edit/${stream.id}`}
            className="ui button primary"
          >
            Edit
          </Link>
          <Link
            to ={`/streams/delete/${stream.id}`}
            className="ui button negative"
          >
            Delete
          </Link>
        </div>
      );
    }
  }

  renderList(){
    return this.props.streams.map(stream =>{
      return(
        <div className="item" key={stream.id}>
          {this.renderAdmin(stream)}
          <i className="large middle aligned icon camera"/>
          <div className="content">
            <Link to={`/streams/${stream.id}`} className="header">
              {stream.title}
            </Link>
            <div className="description"> {stream.description}</div>
          </div>
        </div>

      );
    });
  }

  //si estas logeado puedes crear streams
  renderCreate(){
    if (this.props.isSignedIn){
      return(
        <div style={{textAlign: 'right'}}>
          <Link to="streams/new" className="ui button primary">
            Create Stream
          </Link>
        </div>
      );
    }
  }

  render(){
    // console.log(this.props.streams); VES Q TIENES
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">
          {this.renderList()}
        </div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  //la funcion Object es de javascrip que toma como argumento un objeto, extrae todos los valores y los inserta en un array
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  }
};

export default connect (mapStateToProps, {fetchStreams}) (StreamList);
