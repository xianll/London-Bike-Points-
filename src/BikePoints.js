import React, { Component } from 'react';

class BikePoints extends Component {
    render() {
        // pulling in the props from apps.js
        const { data }  = this.props;
        // if data exists then proceed with the rest of the logic, else show loading screen
        if (data) {
          return (
            <div className="App" >
              <h1>London Bike Points</h1>
              <a className='homelink' href='/'>Home</a>
                <div className="wrapper">
                {/* mapping through the array to extract name, no. of bikes and no. of docks */}
                  {data.map((bike, index) => {
                    return (
                      <div key={index} className="cards">
                        <h2>{bike.commonName}</h2>
                          <h3>Number of available bicycles: {bike.additionalProperties[6].value}</h3>
                          <h3>Number of available docks: {bike.additionalProperties[7].value}</h3>
                      </div>
                      )
                  })}
                </div>
            </div>
          )
        } else {
          return <h1 className="loading">Loading...</h1>
        }
      }
}

export default BikePoints;