import React, { Component } from 'react';
import './App.css';
import Knjiga from "./Knjiga"


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
          {knjiga &&
            knjiga.map(item =>  <div> {item.Naslov} </div> )}
        </div>
        )
    }
  }

  export default App;
