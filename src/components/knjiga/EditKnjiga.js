import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class EditKnjiga extends Component{
    constructor(props){
      super(props)
      this.state = {
        sifra : '',
        Naslov:'',
        Zanr:'',
        Autor: '',
        nakladnik: ''
      }
      this.handleInputChange = this.handleInputChange.bind(this)
    }

    componentWillMount(){
      this.getKnjigaDetail()
    }

    getKnjigaDetail(){
    let knjigaId = this.props.match.params.sifra
    axios.get(`http://localhost:5000/knjiga/${knjigaId}`)
          .then(response => {
            this.setState({
              sifra : response.data[0].sifra,
              Naslov: response.data[0].Naslov,
              Zanr: response.data[0].Zanr,
              Autor: response.data[0].Autor,
              nakladnik: response.data[0].nakladnik,
            }, ()=> {
              //console.log(this.state)
              console.log(response)
            })
          })
        .catch(err => console.log(err))
  }

    editKnjiga(newKnjiga){
      axios.request({
        method: 'put',
        url: `http://localhost:5000/knjiga/${this.state.sifra}`,
        data: newKnjiga
      }).then(response => {
        this.props.history.push('/knjiga') //redirectamo jer nam ne treba ništa u then 
      }).catch(err => console.log(err))
    }


    onSubmit(e){
      const newKnjiga = {
         Naslov: this.refs.naslov.value,
         Zanr: this.refs.zanr.value,
         Autor: this.refs.autor.value,
         nakladnik: this.refs.nakladnik.value,
      }
      this.editKnjiga(newKnjiga)
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
              <Link className="btn grey" to="/knjiga"> Back </Link>
                <h1> Add Knjiga </h1>
                <form onSubmit={this.onSubmit.bind(this)}>
                  <div className="input-field">
                    <input type="text" name="naslov" ref="naslov" value={this.state.Naslov} onChange={this.handleInputChange } />
                    <label htmlFor="naslov" className="active">Naslov</label>
                  </div>
                  <div className="input-field">
                    <input type="text" name="zanr" ref="zanr" value={this.state.Zanr} onChange={this.handleInputChange } />
                    <label htmlFor="zanr" className="active">Zanr</label>
                  </div>
                  <div className="input-field">
                    <input type="text" name="autor" ref="autor" value={this.state.Autor} onChange={this.handleInputChange }/>
                    <label htmlFor="autor" className="active">Autor</label>
                  </div>
                  <div className="input-field">
                    <input type="number" name="nakladnik" ref="nakladnik" value={this.state.nakladnik} onChange={this.handleInputChange }/>
                    <label htmlFor="nakladnik" className="active">nakladnik</label>
                  </div>
                  <input type="submit" value="Save" className="btn" />
                </form>
            </div>
          )
      }
  }
export default EditKnjiga