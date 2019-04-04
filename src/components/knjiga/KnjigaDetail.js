import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import KnjigaItem from './KnjigaItem'


class NakladnikDetail extends Component{
	constructor(props){
		super(props)
		this.state = {
			details: []
		}
	}

	componentWillMount(){
		this.getPojedinaKnjiga()
	}

	getPojedinaKnjiga(){
		let knjigaId = this.props.match.params.sifra
		axios.get(`http://localhost:5000/knjiga/${knjigaId}`)
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
		    let knjigaId = this.props.match.params.sifra 
        const knjigaDetails = this.state.details.map((detail, i) => {
          return(
            <KnjigaItem key={detail.sifra} sifra={detail.sifra} Naslov={detail.Naslov} Autor={detail.Autor} Zanr={detail.Zanr} nakladnik={detail.nakladnik}/>
          )
        })
        return(
          <div>
          	<br />
          	<Link className="btn grey" to="/nakladnik">Back</Link>
            <h1> Knjiga </h1>
            <ul className="collection">
              {knjigaDetails}
            </ul>
            <Link className="btn" to={`/knjiga/edit/${knjigaId}`}>Edit</Link>
          </div>
          )
      }
  }

export default NakladnikDetail