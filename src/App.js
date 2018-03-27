import React, { Component } from 'react';
import 'tachyons';
import './App.css';
import Navigation from './components/Navigation/Navigation'
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Rank />
        <ImageLinkForm />
      </div>
    );
  }
}

export default App;