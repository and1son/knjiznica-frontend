import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
     constructor(){
      super()
      this.state =  {
          nakladnik: ''
      }
    }
   
   componentDidMount(){
      fetch("http://localhost:5000/nakladnik")
        .then(response=>response.json())
        .then(data => {
          this.setState({
             nakladnik : data
          })
        })           
    }

    render() {
      const { nakladnik } = this.state;
      nakladnik && console.log(nakladnik.map(item => item.Naziv));

      return (
        <div>
          <table>
          <tbody>
          <tr>
            <th> Sifra </th>
            <th> Naziv </th>
            <th> Mjesto </th>
          </tr>
          <tr>
             <th>
            {nakladnik &&
              nakladnik.map(item =>  <div> {item.sifra} </div> )}</th>
            <th>
            {nakladnik &&
              nakladnik.map(item =>  <div> {item.Naziv} </div> )}</th>
            <th>
            {nakladnik &&
              nakladnik.map(item =>  <div> {item.Mjesto} </div> )}</th>
          </tr>
          </tbody>
          </table>
        </div>
        )
    }
  }

  export default App;