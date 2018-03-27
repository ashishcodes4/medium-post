import React, { Component } from 'react';
import 'tachyons';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import './App.css';
import Navigation from './components/Navigation/Navigation'
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';

const app = new Clarifai.App({
  apiKey: 'c1c6229976194ac49cb5820c17e3f6a6'
 });


const partilcesOptions = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800
      }
    },
    line_linked: {
      shadow: {
        color: "#3CA9D1",
      }
    }
    }
  }

class App extends Component {
  
  constructor () {
    super();
    this.state = {
      input : '',
    }
  }
  onInputChange =  (event) => {
    console.log(event.target.value);
  }

  OnButtonSubmit = () => {
    console.log('click');
  }

  render() {
    return (
      <div className="App">
        <Particles className='particles'
          params={partilcesOptions}
        />
        <Navigation />
        <Rank />
        <ImageLinkForm
         onInputChange= { this.onInputChange }
         OnButtonSubmit={ this.onButtonSubmit } />
      </div>
    );
  }
}

export default App;