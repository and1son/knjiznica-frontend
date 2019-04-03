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
	    		<span>&nbsp;&nbsp;</span>
				{this.state.sifra} 
				<span>&nbsp;&nbsp;</span>	
				{this.state.Naziv} 
				<span>&nbsp;&nbsp;</span>
				{this.state.Mjesto}</Link>
			</li>
		)
	}

}

export default NakladnikItem