import React, { Component } from 'react';
import './App.css';
import './EditNakladnikForm.js';
import NakladnikTable from './NakladnikTable';

class App extends Component {
     constructor(){
      super()
      this.state =  {
          nakladnik: [],
          editing : false,
          setEditing: false
      }
      this.handleEdit = this.handleEdit.bind(this)

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
    
    render() {
      console.log(this.state.nakladnik)
      const { nakladnik } = this.state;
      const nakladnikPodaci = this.state.nakladnik.map(item => <NakladnikTable key={item.sifra} nakladnik={nakladnik} item={item} handleEdit={this.handleEdit}/>)
      return (
        <div>
          {nakladnikPodaci}
        </div>
        )
    }
  }

  export default App;