import React, { Component } from 'react';
import './style.scss';
import Header from './components/Header';
import Classement from './components/Classement';
import Footer from './components/Footer';
import Slider from './components/Slider';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Classement></Classement>
        <Slider></Slider>
        <Footer></Footer>
        
        
      </div>
    );
  }
}

export default App;
