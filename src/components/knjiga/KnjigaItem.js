import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class KnjigaItem extends Component{
	constructor(props){
		super(props)
		this.state = {
			sifra:props.sifra,
			Naslov:props.Naslov,
			Zanr:props.Zanr,
			Autor:props.Autor,
			nakladnik:props.nakladnik
		}
	}
	render(){
		return(
			<li className="collection-item">
				<Link to={`/knjiga/${this.state.sifra}`}>
	    		<span>&nbsp;&nbsp;</span>
				{this.state.sifra} 
				<span>&nbsp;&nbsp;</span>	
				{this.state.Naslov} 
				<span>&nbsp;&nbsp;</span>
				{this.state.Zanr}
				<span>&nbsp;&nbsp;</span>	
				{this.state.Autor} 
				<span>&nbsp;&nbsp;</span>	
				{this.state.nakladnik} </Link>
			</li>
		)
	}

}

export default KnjigaItem