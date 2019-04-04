import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class AddIzdavanje extends Component{

  addKIzdavanje(newIzdavanje){
    axios.request({
      method: 'post',
      url: 'http://localhost:5000/izdavanje',
      data: newIzdavanje
    }).then(response => {
      this.props.history.push('/izdavanje') //redirectamo jer nam ne treba ništa u then 
    }).catch(err => console.log(err))
  }


  onSubmit(e){
    const newIzdavanje = {
      datum_izdavanja:this.refs.datum_izdavanja.value,
      datum_povratka:this.refs.datum_povratka.value,
      cijena:this.refs.cijena.value,
      izdavatelj:this.refs.izdavatelj.value,
      knjiga:this.refs.knjiga.value
    }
    this.addKIzdavanje(newIzdavanje)
    //console.log(this.refs.naziv.value)
    e.preventDefault()
  }

	render(){
    return(
		      <div>
          <br />
          <Link className="btn grey" to="/izdavanje"> Back </Link>
            <h1> Add Izdavanje </h1>
            <form onSubmit={this.onSubmit.bind(this)}>
              <div className="input-field">
                <input type="date" name="datum_izdavanja" ref="datum_izdavanja" />
                <label htmlFor="datum_izdavanja">Datum izdavanja</label>
              </div>
              <div className="input-field">
                <input type="date" name="datum_povratka" ref="datum_povratka" />
                <label htmlFor="datum_povratka">Datum povratka</label>
              </div>
              <div className="input-field">
                <input type="number" name="cijena" ref="cijena" />
                <label htmlFor="cijena">Cijena</label>
              </div>
              <div className="input-field">
                <input type="number" name="izdavatelj" ref="izdavatelj" />
                <label htmlFor="izdavatelj">Izdavatelj</label>
              </div>
              <div className="input-field">
                <input type="number" name="knjiga" ref="knjiga" />
                <label htmlFor="knjiga">Knjiga</label>
              </div>
              <input type="submit" value="Save" className="btn" />
            </form>
          </div>
          )
      }
}

export default AddIzdavanje