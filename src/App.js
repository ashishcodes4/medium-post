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
    app.models.predict("a403429f2ddf4b49b307e318f00e528b", "https://samples.clarifai.com/face-det.jpg").then(
    function(response) {
      console.log('inside the click event.')
    },
    function(err) {
      // there was an error
    }
  );
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