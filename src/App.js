import React, { Component } from 'react';
import 'tachyons';
import Particles from 'react-particles-js';
import './App.css';
import Navigation from './components/Navigation/Navigation'
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';


const partilcesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    }
    }
  }

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className='particles'
          params={partilcesOptions}
        />
        <Navigation />
        <Rank />
        <ImageLinkForm />
      </div>
    );
  }
}

export default App;