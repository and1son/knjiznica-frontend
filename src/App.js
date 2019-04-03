  import React, { Component } from 'react';
  import './App.css';
  import './EditNakladnikForm.js';
  import NakladnikTable from './NakladnikTable';
  import axios from 'axios';
  import Main from './components/Main'
  import Navbar from './components/Navbar'
  //import Post from './Post'
  const App = () => (
      <div>
        <Navbar />
          <div className="container">
            <Main />
          </div>
      </div>
    )

    export default App;



   /*componentDidMount(){
      fetch("http://localhost:5000/nakladnik")
        .then(response=>response.json())
        .then(data => {
          this.setState({
             sifra :  data.sifra,
             Naziv : data.Naziv,
             Mjesto : data.Mjesto
          })
        })           
    }
    handleEdit(sifra){ 
      this.setState(prevState=>{
        const updatedNakladnik = prevState.nakladnik.map(item=>{
          if(item.sifra === sifra){
            item.Mjesto[0] = "marko"
          }
          return item
        })
        return{
          nakladnik : updatedNakladnik
        }
      })
    }
    
    handleUserName = (sifra, e) => {
        this.setState(prevState=>{
        const updatedNakladnik = prevState.nakladnik.map(item=>{
            return nakladnik.sifra === sifra
            console.log(item.sifra)
        })
        const nakladnik = Object.assign({}, this.state.nakladnik[updatedNakladnik])
        nakladnik.Naziv = e.target.value
        const nakladnici = Object.assign([], this.state.nakladnik)
        nakladnik[updatedNakladnik] = nakladnik
        this.setState({nakladnik:nakladnici})
      })
    }

    render() {
      console.log(this.state.nakladnik)
      const { nakladnik } = this.state;
      const nakladnikPodaci = this.state.nakladnik.map(item => <NakladnikTable key={item.sifra} nakladnik={nakladnik} item={item} handleUserName={this.handleUserName}/>)
      return (
        <div>
          {nakladnikPodaci}
        </div>
        )
    }
  }*/

