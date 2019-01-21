import React, { Component } from 'react';

class Splash extends Component {
    render () {
        return (
        <div className='splashwrap'>
            <h1 className='welcome'>London Bike Points</h1> 
            <a className='bikelink' href='/bikes'>Click Through For Bicycle Sharepoints</a>
        </div>
    )}
}

export default Splash;