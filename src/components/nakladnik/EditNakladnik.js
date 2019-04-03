import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class EditNakladnik extends Component{
    constructor(props){
      super(props)
      this.state = {
        sifra : '',
        Naziv:'',
        Mjesto:''
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
              sifra : response.data[0].sifra,
              Naziv : response.data[0].Naziv,
              Mjesto : response.data[0].Mjesto
            }, ()=> {
              //console.log(this.state)
              console.log(response)
            })
          })
        .catch(err => console.log(err))
  }

    editNakladnik(newNakladnik){
      axios.request({
        method: 'put',
        url: `http://localhost:5000/nakladnik/${this.state.sifra}`,
        data: newNakladnik
      }).then(response => {
        this.props.history.push('/nakladnik') //redirectamo jer nam ne treba ništa u then 
      }).catch(err => console.log(err))
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

    handleInputChange(event){
      const {name,value} = event.target
      this.setState({
        [name] : value
      })
    }

   render(){
             
            return(
              <div key={this.state.sifra}>
                <br />
                <Link className="btn grey" to="/nakladnik"> Back </Link>
                <h1> Edit nakladnik </h1>
                <form onSubmit={this.onSubmit.bind(this)}>
                  <div className="input-field">
                    <input type="text" name="Naziv" ref="naziv" value={this.state.Naziv} onChange={this.handleInputChange }/>
                    <label htmlFor="naziv" className="active" >Naziv</label>
                  </div>
                  <div className="input-field">
                    <input type="text" name="Mjesto" ref="mjesto"  value={this.state.Mjesto} onChange={this.handleInputChange}/>
                    <label htmlFor="mjesto" className="active"  >Mjesto</label>
                  </div>
                  <input type="submit" value="Save" className="btn" />
                </form>
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