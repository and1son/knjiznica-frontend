import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NakladnikItem extends Component{
	constructor(props){
		super(props)
		this.state = {
			item:props.item
		}
	}
	render(){
		return(
			<li className="collection-item">
				<Link to={`/nakladnik/${this.state.item.sifra}`}>
				{this.state.item.sifra}
				{this.state.item.Naziv} 
				{this.state.item.Mjesto}</Link>
			</li>
		)
	}

}

export default NakladnikItem