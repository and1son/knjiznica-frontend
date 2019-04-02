import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import NakladnikItem from './NakladnikItem'


class NakladnikDetail extends Component{
	constructor(props){
		super(props)
		this.state = {
			details: []
		}
	}

	componentWillMount(){
		this.getPojediniNakladnik()
	}

	getPojediniNakladnik(){
		let nakladnikId = this.props.match.params.sifra
		axios.get(`http://localhost:5000/nakladnik/${nakladnikId}`)
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
		let nakladnikId = this.props.match.params.sifra
        const nakladniciDetail = this.state.details.map((detail, i) => {
          return(
            <NakladnikItem key={detail.sifra} item={detail}/>
          )
        })
        return(
          <div>
          	<br />
          	<Link className="btn grey" to="/nakladnik">Back</Link>
            <h1> Nakladnik </h1>
            <ul className="collection">
              {nakladniciDetail}
            </ul>
            <Link className="btn" to={`/nakladnik/edit/${nakladnikId}`}>Edit</Link>
          </div>
          )
      }
  }

export default NakladnikDetail