import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import IzdavateljItem from './IzdavateljItem'


class IzdavateljDetail extends Component{
	constructor(props){
		super(props)
		this.state = {
			details: []
		}
	}

	componentWillMount(){
		this.getPojediniIzdavatelj()
	}

	getPojediniIzdavatelj(){
		let izdavateljId = this.props.match.params.sifra
		axios.get(`http://localhost:5000/izdavatelj/${izdavateljId}`)
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
		    let izdavateljId = this.props.match.params.sifra 
        const izdavateljDetail = this.state.details.map((detail, i) => {
          return(
             <IzdavateljItem key={detail.sifra} sifra={detail.sifra} Ime={detail.Ime} Prezime={detail.Prezime} Adresa={detail.Adresa} Mjesto={detail.Mjesto} Postanski_broj={detail.Postanski_broj}/>
          )
        })
        return(
          <div>
          	<br />
          	<Link className="btn grey" to="/izdavatelj">Back</Link>
            <h1> Izdavatelj </h1>
            <ul className="collection">
              {izdavateljDetail}
            </ul>
            <Link className="btn" to={`/izdavatelj/edit/${izdavateljId}`}>Edit</Link>
          </div>
          )
      }
  }

export default IzdavateljDetail