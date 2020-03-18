import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import Footer from './Footer'
import Book from './Book'


class App extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="app">
        <Header />
        <Book />
        <Footer />
      </div>
    );
  }
}
export default App;

