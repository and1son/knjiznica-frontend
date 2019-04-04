import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class IzdavanjeItem extends Component{
	constructor(props){
		super(props)
		this.state = {
			sifra:props.sifra,
			datum_izdavanja:props.datum_izdavanja,
			datum_povratka:props.datum_povratka,
			cijena:props.cijena,
			izdavatelj:props.izdavatelj,
			knjiga: props.knjiga
		}
	}
	render(){
		return(
			<li className="collection-item">
				<Link to={`/izdavanje/${this.state.sifra}`}>
	    		<span>&nbsp;&nbsp;</span>
				{this.state.sifra} 
				<span>&nbsp;&nbsp;</span>	
				{this.state.datum_izdavanja} 
				<span>&nbsp;&nbsp;</span>
				{this.state.datum_povratka}
				<span>&nbsp;&nbsp;</span>	
				{this.state.cijena} 
				<span>&nbsp;&nbsp;</span>	
				{this.state.izdavatelj} 
				<span>&nbsp;&nbsp;</span>	
				{this.state.knjiga} </Link>
			</li>
		)
	}

}

export default IzdavanjeItem