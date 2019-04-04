import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class EditIzdavanje extends Component{
    constructor(props){
      super(props)
      this.state = {
        sifra : '',
        datum_izdavanja: '',
        datum_povratka: '',
        cijena:'',
        izdavatelj:'',
        knjiga:''
      }
      this.handleInputChange = this.handleInputChange.bind(this)
    }

    componentWillMount(){
      this.getIzdavanjeDetail()
    }

    getIzdavanjeDetail(){
    let izdavanjeId = this.props.match.params.sifra
    axios.get(`http://localhost:5000/izdavanje/${izdavanjeId}`)
          .then(response => {
            this.setState({
              sifra : response.data[0].sifra,
              datum_izdavanja: response.data[0].datum_izdavanja,
              datum_povratka: response.data[0].datum_povratka,
              cijena: response.data[0].cijena,
              izdavatelj: response.data[0].izdavatelj,
              knjiga: response.data[0].knjiga
            }, ()=> {
              //console.log(this.state)
              console.log(response.data[0])
            })
          })
        .catch(err => console.log(err))
  }

    editKnjiga(newIzdavanje){
      axios.request({
        method: 'put',
        url: `http://localhost:5000/izdavanje/${this.state.sifra}`,
        data: newIzdavanje
      }).then(response => {
        this.props.history.push('/izdavanje') //redirectamo jer nam ne treba ništa u then 
      }).catch(err => console.log(err))
    }


    onSubmit(e){
      const newIzdavanje = {
         datum_izdavanja: this.refs.datum_izdavanja.value,
         datum_povratka: this.refs.datum_povratka.value,
         cijena: this.refs.cijena.value,
         izdavatelj: this.refs.izdavatelj.value,
         knjiga: this.refs.knjiga.value
      }
      this.editKnjiga(newIzdavanje)
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
            <Link className="btn grey" to="/izdavanje"> Back </Link>
              <h1> Edit Izdavanje </h1>
              <form onSubmit={this.onSubmit.bind(this)}>
                <div className="input-field">
                  <input type="date" name="datum_izdavanja" ref="datum_izdavanja" value={this.state.datum_izdavanja} onChange={this.handleInputChange }/>
                  <label htmlFor="datum_izdavanja" className="active">Datum izdavanja</label>
                </div>
                <div className="input-field">
                  <input type="date" name="datum_povratka" ref="datum_povratka" value={this.state.datum_povratka} onChange={this.handleInputChange }/>
                  <label htmlFor="datum_povratka" className="active">Datum povratka</label>
                </div>
                <div className="input-field">
                  <input type="number" name="cijena" ref="cijena" value={this.state.cijena} onChange={this.handleInputChange }/>
                  <label htmlFor="cijena" className="active">Cijena</label>
                </div>
                <div className="input-field">
                  <input type="number" name="izdavatelj" ref="izdavatelj" value={this.state.izdavatelj} onChange={this.handleInputChange }/>
                  <label htmlFor="izdavatelj" className="active">Izdavatelj</label>
                </div>
                <div className="input-field">
                  <input type="number" name="knjiga" ref="knjiga" value={this.state.knjiga} onChange={this.handleInputChange }/>
                  <label htmlFor="knjiga" className="active">Knjiga</label>
                </div>
                <input type="submit" value="Save" className="btn" />
              </form>
          </div>
          )
      }
  }
export default EditIzdavanje