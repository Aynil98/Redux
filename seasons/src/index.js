import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import LoadingDisplay from './LoadingDisplay';

class App extends React.Component {

  state = {lat: null,  errorMessage:'' };

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      position=> this.setState({ lat: position.coords.latitude}),
      err=>this.setState({ errorMessage: err.message})
    );
  }

  renderContent(){
    if (this.state.errorMessage && !this.state.lat){
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat){
      //HAY QUE DECIRLE LA LATITUD
      return <SeasonDisplay lat = {this.state.lat}/>
    }

    return <LoadingDisplay message="Please accept location request"/>;
  }

  render() {
    return(
      <div className="border red">
        {this.renderContent()}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
