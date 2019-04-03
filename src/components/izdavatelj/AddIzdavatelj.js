import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class AddIzdavatelj extends Component{

  addIzdavatelj(newIzdavatelj){
    axios.request({
      method: 'post',
      url: 'http://localhost:5000/izdavatelj',
      data: newIzdavatelj
    }).then(response => {
      this.props.history.push('/izdavatelj') //redirectamo jer nam ne treba ništa u then 
    }).catch(err => console.log(err))
  }


  onSubmit(e){
    const newIzdavatelj = {
      Ime: this.refs.ime.value, //paziti na veliak i mala slova 
      Prezime: this.refs.prezime.value,
      Adresa: this.refs.adresa.value,
      Mjesto: this.refs.mjesto.value,
      Postanski_broj : this.refs.postanski_broj.value
    }
    this.addIzdavatelj(newIzdavatelj)
    //console.log(this.refs.naziv.value)
    e.preventDefault()
  }

	render(){
    return(
		      <div>
          <br />
          <Link className="btn grey" to="/izdavatelj"> Back </Link>
            <h1> Add Izdavatelj </h1>
            <form onSubmit={this.onSubmit.bind(this)}>
              <div className="input-field">
                <input type="text" name="ime" ref="ime" />
                <label htmlFor="ime">Ime</label>
              </div>
              <div className="input-field">
                <input type="text" name="prezime" ref="prezime" />
                <label htmlFor="prezime">Prezime</label>
              </div>
              <div className="input-field">
                <input type="text" name="adresa" ref="adresa" />
                <label htmlFor="adresa">Adresa</label>
              </div>
              <div className="input-field">
                <input type="text" name="mjesto" ref="mjesto" />
                <label htmlFor="mjesto">Mjesto</label>
              </div>
              <div className="input-field">
                <input type="text" name="postanski_broj" ref="postanski_broj" />
                <label htmlFor="postanski_broj">Postanski_broj</label>
              </div>
              <input type="submit" value="Save" className="btn" />
            </form>
          </div>
          )
      }
}

export default AddIzdavatelj