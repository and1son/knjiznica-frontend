import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NakladnikItem extends Component{
	constructor(props){
		super(props)
		this.state = {
			sifra:props.sifra,
			Ime:props.Ime,
			Prezime:props.Prezime,
			Adresa:props.Adresa,
			Mjesto:props.Mjesto,
			Postanski_broj:props.Postanski_broj
		}
	}
	render(){
		return(
			<li className="collection-item">
				<Link to={`/izdavatelj/${this.state.sifra}`}>
				{this.state.sifra} 
	    		<span>&nbsp;&nbsp;</span>
				{this.state.Ime} 
				<span>&nbsp;&nbsp;</span>	
				{this.state.Prezime} 
				<span>&nbsp;&nbsp;</span>
				{this.state.Adresa}
				<span>&nbsp;&nbsp;</span>
				{this.state.Mjesto}
				<span>&nbsp;&nbsp;</span>
				{this.state.Postanski_broj}</Link>
			</li>
		)
	}

}

export default NakladnikItem