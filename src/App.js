import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(){
      super()
      this.state =  {
          knjiga: ''
      }
    }
   
   componentDidMount(){
      fetch("http://localhost:5000/knjiga")
        .then(response=>response.json())
        .then(data => {
          this.setState({
             knjiga : data
          })
        })           
    }

    render() {
      const { knjiga } = this.state;
      knjiga && console.log(knjiga.map(item => item.Naslov));

      return (
        <div>
          <table>
          <tr>
            <th> Naslov </th>
            <th> Zanr </th>
            <th> Autor </th>
            <th> nakladnik </th>
          </tr>
          <tr>
            <th>
            {knjiga &&
              knjiga.map(item =>  <div> {item.Naslov} </div> )}</th>
            <th>
            {knjiga &&
              knjiga.map(item =>  <div> {item.Zanr} </div> )}</th>
            <th>
            {knjiga &&
              knjiga.map(item =>  <div> {item.Autor} </div> )}</th>
            <th>
            {knjiga &&
              knjiga.map(item =>  <div> {item.nakladnik} </div> )}</th>
          </tr>
          </table>
        </div>
        )
    }
  }

  export default App;
