import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NakladnikItem extends Component{
	constructor(props){
		super(props)
		this.state = {
			sifra:props.sifra,
			Naziv:props.Naziv,
			Mjesto:props.Mjesto
		}
	}
	render(){
		return(
			<li className="collection-item">
				<Link to={`/nakladnik/${this.state.sifra}`}>
				{this.state.sifra}
				{this.state.Naziv} 
				{this.state.Mjesto}</Link>
			</li>
		)
	}

}

export default NakladnikItem