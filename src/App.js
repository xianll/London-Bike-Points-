import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Bikepoints from './BikePoints';
import Splash from './Splash';

class App extends Component {

  state = {
    bikePoints: null
  }
  
  componentDidMount(){
    //hitting the api for information
    const bikePointsURL = 'https://api.tfl.gov.uk/BikePoint';
      axios.get(bikePointsURL)
      .then (resp => {
        //bikepoints returns a huge array, splicing to get the first 20 in the array to save on processing time
        const bikePoints = resp.data.splice(0, 20)
        //set bikePoints as state
        this.setState({bikePoints}) 
      })
  }

  render() {
    //setting the window location as pathname
    const { pathname } = window.location;
    //params is the user input and we use substr to target param paths
    const params = pathname.substr(1);
    const { bikePoints } = this.state;

    //setting paths and requiring in the different components
    if (params==='bikes'){
      return <Bikepoints data={bikePoints}/>
    } else if (params==='') {
      return <Splash />
    } else {
      return <h1 className="error">ERROR</h1>
    }
  }
}

export default App;
