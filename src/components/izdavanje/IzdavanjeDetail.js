import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import IzdavanjeItem from './IzdavanjeItem'


class IzdavanjeDetail extends Component{
	constructor(props){
		super(props)
		this.state = {
			details: []
		}
	}

	componentWillMount(){
		this.getPojedinoIzdavanje()
	}

	getPojedinoIzdavanje(){
		let izdavanjeId = this.props.match.params.sifra
		axios.get(`http://localhost:5000/izdavanje/${izdavanjeId}`)
          .then(response => {
          	const detalji = response.data
          	console.log(detalji)
            this.setState({ 
            	details : [...detalji]
            })
          })
        .catch(err => console.log(err))
	}
	render(){
		    let izdavanjeId = this.props.match.params.sifra 
        const izdavanjeDetails = this.state.details.map((detail, i) => {
          return(
              <IzdavanjeItem key={detail.sifra} sifra={detail.sifra} datum_izdavanja={detail.datum_izdavanja} datum_povratka={detail.datum_povratka} cijena={detail.cijena} izdavatelj={detail.izdavatelj} knjiga={detail.knjiga}/>
          )
        })
        return(
          <div>
          	<br />
          	<Link className="btn grey" to="/izdavanje">Back</Link>
            <h1> Izdavanje </h1>
            <ul className="collection">
              {izdavanjeDetails}
            </ul>
            <Link className="btn" to={`/izdavanje/edit/${izdavanjeId}`}>Edit</Link>
          </div>
          )
      }
  }

export default IzdavanjeDetail