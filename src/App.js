import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          {/* <Header /> */}
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
