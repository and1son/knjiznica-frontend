import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class AddKnjiga extends Component{

  addKnjiga(newKnjiga){
    axios.request({
      method: 'post',
      url: 'http://localhost:5000/knjiga',
      data: newKnjiga
    }).then(response => {
      this.props.history.push('/knjiga') //redirectamo jer nam ne treba ništa u then 
    }).catch(err => console.log(err))
  }


  onSubmit(e){
    const newKnjiga = {
      Naslov:this.refs.naslov.value,
      Zanr:this.refs.zanr.value,
      Autor:this.refs.autor.value,
      nakladnik:this.refs.nakladnik.value
    }
    this.addKnjiga(newKnjiga)
    //console.log(this.refs.naziv.value)
    e.preventDefault()
  }

	render(){
    return(
		      <div>
          <br />
          <Link className="btn grey" to="/nakladnik"> Back </Link>
            <h1> Add Knjiga </h1>
            <form onSubmit={this.onSubmit.bind(this)}>
              <div className="input-field">
                <input type="text" name="naslov" ref="naslov" />
                <label htmlFor="naslov">Naslov</label>
              </div>
              <div className="input-field">
                <input type="text" name="zanr" ref="zanr" />
                <label htmlFor="zanr">Zanr</label>
              </div>
              <div className="input-field">
                <input type="text" name="autor" ref="autor" />
                <label htmlFor="autor">Autor</label>
              </div>
              <div className="input-field">
                <input type="number" name="nakladnik" ref="nakladnik" />
                <label htmlFor="nakladnik">nakladnik</label>
              </div>
              <input type="submit" value="Save" className="btn" />
            </form>
          </div>
          )
      }
}

export default AddKnjiga