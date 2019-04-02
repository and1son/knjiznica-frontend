import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import NakladnikItem from './NakladnikItem'


class EditNakladnik extends Component{
    constructor(props){
      super(props)
      this.state = {
        nakladnik : [],
        Naziv : '',
        Mjesto : ''
      }
      this.handleInputChange = this.handleInputChange.bind(this)
    }

    componentWillMount(){
      this.getNakladnikDetail()
    }

    getNakladnikDetail(){
    let nakladnikId = this.props.match.params.sifra
    axios.get(`http://localhost:5000/nakladnik/${nakladnikId}`)
          .then(response => {
            this.setState({
              nakladnik : response.data
            }, ()=> {
              console.log(this.state)
            })
          })
        .catch(err => console.log(err))
  }

    onSubmit(e){
      const newNakladnik = {
        Naziv: this.refs.naziv.value, //paziti na velika i mala slova 
        Mjesto: this.refs.mjesto.value
      }
      this.editNakladnik(newNakladnik)
      //console.log(this.refs.naziv.value)
      e.preventDefault()
    }

    handleInputChange(e){
      const target = e.target
      const value = target.value
      const name = target.name
      this.setState({
        [name] : value
      })
    }

   render(){
      const data = this.state.nakladnik
    
    return(
      <div>
         {data.map((nakladnik,index) => {
            return(
              <div key={nakladnik.sifra}>
                <br />
                <Link className="btn grey" to="/nakladnik"> Back </Link>
                <h1> Edit nakladnik </h1>
                <form onSubmit={this.onSubmit.bind(this)}>
                  <div className="input-field">
                    <input type="text" name="naziv" ref="naziv" value={nakladnik.Naziv} onChange={this.handleInputChange }/>
                    <label htmlFor="naziv" >Naziv</label>
                  </div>
                  <div className="input-field">
                    <input type="text" name="mjesto" ref="mjesto"  value={nakladnik.Mjesto} onChange={this.handleInputChange}/>
                    <label htmlFor="mjesto" >Mjesto</label>
                  </div>
                  <input type="submit" value="Save" className="btn" />
                </form>
              </div>   
          )})}
         </div>
         )

        //const {nakladnikNaziv} = this.state
        /*const nakladniciNaziv = this.state.nakladnik.map((nakladnik, i) => {
          return(
            <li key={nakladnik.sifra}>{nakladnik.Naziv}</li>
          )
        })
        const nakladniciMjesto = this.state.nakladnik.map((nakladnik, i) => {
          return(
            <li key={nakladnik.sifra}>{nakladnik.Mjesto}</li>
          )
        })*/
    
         
         
      }
  }
export default EditNakladnik