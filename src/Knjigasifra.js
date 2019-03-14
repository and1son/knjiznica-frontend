import React, { Component } from 'react';
import logo from './logo.svg';
class Knjigasifra extends Component {
  render() {
    return (
      <div className="Knjigasifra">
        <header className="Knjigasifra-header">
          <img src={logo} className="Knjigasifra-logo" alt="logo" />
          <p> Moja knjiga = {window.knjiga} </p>
        </header>
      </div>
    );
  }
}

export default Knjigasifra;
