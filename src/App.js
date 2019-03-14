import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor()
   {
      super();
      this.state={
        data:[],
      }
    }
  componentDidMount()
  {
    fetch('http://localhost:5000/knjiga')
    .then(res => res.text())
    .then(text=> console.log(text))
    /*.then(response => response.json())
    .then((findresponse)=>
    {
      console.log(findresponse.knjiga)
      this.setState({
        data:findresponse.knjiga,
      })
    })*/
  }
  render() 
  {
    return (
      <div>
        {
          this.state.data.map((knjiga,key) => 
            <div>
              <h2>{knjiga.naslov}</h2>
          </div>
          )
      }
       </div>     
    )
  }
}

export default App;
