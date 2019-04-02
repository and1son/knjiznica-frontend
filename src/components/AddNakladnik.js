import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import NakladnikItem from './NakladnikItem'


class AddNakladnik extends Component{

  addNakladnik(newNakladnik){
    axios.request({
      method: 'post',
      url: 'http://localhost:5000/nakladnik',
      data: newNakladnik
    }).then(response => {
      this.props.history.push('/nakladnik') //redirectamo jer nam ne treba ništa u then 
    }).catch(err => console.log(err))
  }


  onSubmit(e){
    const newNakladnik = {
      Naziv: this.refs.naziv.value, //paziti na veliak i mala slova 
      Mjesto: this.refs.mjesto.value
    }
    this.addNakladnik(newNakladnik)
    //console.log(this.refs.naziv.value)
    e.preventDefault()
  }

	render(){
    return(
		      <div>
          <br />
          <Link className="btn grey" to="/nakladnik"> Back </Link>
            <h1> Add Nakladnik </h1>
            <form onSubmit={this.onSubmit.bind(this)}>
              <div className="input-field">
                <input type="text" name="naziv" ref="naziv" />
                <label htmlFor="naziv">Naziv</label>
              </div>
              <div className="input-field">
                <input type="text" name="mjesto" ref="mjesto" />
                <label htmlFor="mjesto">Mjesto</label>
              </div>
              <input type="submit" value="Save" className="btn" />
            </form>
          </div>
          )
      }
}

export default AddNakladnik