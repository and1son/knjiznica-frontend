import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class EditIzdavatelj extends Component{
    constructor(props){
      super(props)
      this.state = {
        sifra : '',
        Ime:'',
        Prezime:'',
        Adresa:'',
        Mjesto:'',
        Postanski_broj:''
      }
      this.handleInputChange = this.handleInputChange.bind(this)
    }

    componentWillMount(){
      this.getIzdavateljDetail()
    }

    getIzdavateljDetail(){
    let izdavateljId = this.props.match.params.sifra
    axios.get(`http://localhost:5000/izdavatelj/${izdavateljId}`)
          .then(response => {
            this.setState({
              sifra : response.data[0].sifra,
              Ime: response.data[0].Ime,
              Prezime: response.data[0].Prezime,
              Adresa: response.data[0].Adresa,
              Mjesto: response.data[0].Mjesto,
              Postanski_broj: response.data[0].Postanski_broj

            }, ()=> {
              //console.log(this.state)
              console.log(response)
            })
          })
        .catch(err => console.log(err))
  }

    editIzdavatelj(newIzdavatelj){
      axios.request({
        method: 'put',
        url: `http://localhost:5000/izdavatelj/${this.state.sifra}`,
        data: newIzdavatelj
      }).then(response => {
        this.props.history.push('/izdavatelj') //redirectamo jer nam ne treba ništa u then 
      }).catch(err => console.log(err))
    }

    onSubmit(e){
      const newIzdavatelj = {
        Ime: this.refs.ime.value, 
        Prezime: this.refs.prezime.value,
        Adresa: this.refs.adresa.value,
        Mjesto: this.refs.mjesto.value,
        Postanski_broj : this.refs.postanski_broj.value
      }
      this.editIzdavatelj(newIzdavatelj)
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
              <Link className="btn grey" to="/izdavatelj"> Back </Link>
                <h1> Add Izdavatelj </h1>
                <form onSubmit={this.onSubmit.bind(this)}>
                  <div className="input-field">
                    <input type="text" name="Ime" ref="ime" value={this.state.Ime} onChange={this.handleInputChange } />
                    <label className="active" htmlFor="ime">Ime</label>
                  </div>
                  <div className="input-field">
                    <input type="text" name="Prezime" ref="prezime" value={this.state.Prezime} onChange={this.handleInputChange } />
                    <label className="active" htmlFor="prezime">Prezime</label>
                  </div>
                  <div className="input-field">
                    <input type="text" name="Adresa" ref="adresa" value={this.state.Adresa} onChange={this.handleInputChange } />
                    <label className="active"  htmlFor="adresa">Adresa</label>
                  </div>
                  <div className="input-field">
                    <input type="text" name="Mjesto" ref="mjesto" value={this.state.Mjesto} onChange={this.handleInputChange } />
                    <label className="active" htmlFor="mjesto">Mjesto</label>
                  </div>
                  <div className="input-field">
                    <input type="text" name="Postanski_broj" ref="postanski_broj" value={this.state.Postanski_broj} onChange={this.handleInputChange } />
                    <label className="active" htmlFor="postanski_broj">Postanski_broj</label>
                  </div>
                  <input type="submit" value="Save" className="btn" />
                </form>
            </div>
          )
          
         
      }
  }
export default EditIzdavatelj