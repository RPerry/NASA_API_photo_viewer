import { render } from '@testing-library/react';
import React, {Component} from 'react';
import './App.css';
import ImageList from './components/ImageList';

class App extends Component{
  render() {
    return (
      <section className="page">
        <header className="header">
          <h2 className="header-text">Spacestagram</h2>
          <h5>All Information and Images from the NASA API</h5>
          <h4>By Riyo Perry</h4>
        </header>
        <ImageList />
      </section>
      );
  }
}

export default App;
