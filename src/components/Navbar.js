import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Navbar extends Component{
	render(){
		return(
			<div>
				<ul id="dropdown" className="dropdown-content">
				  <li><Link to="/nakladnik">Prikaz</Link></li>
				  <li className="divider"></li>
				  <li><Link to="/nakladnik/dodaj" href="#!">Dodaj</Link></li>
				  <li className="divider"></li>
				</ul>
				<ul id="dropdown1" className="dropdown-content">
				  <li><Link to="/izdavatelj">Prikaz</Link></li>
				  <li className="divider"></li>
				  <li><Link to="/izdavatelj/dodaj" href="#!">Dodaj</Link></li>
				  <li className="divider"></li>
				</ul>
				<ul id="dropdown2" className="dropdown-content">
				  <li><Link to="/knjiga">Prikaz</Link></li>
				  <li className="divider"></li>
				  <li><Link to="/knjiga/dodaj" href="#!">Dodaj</Link></li>
				  <li className="divider"></li>
				</ul>
				<ul id="dropdown3" className="dropdown-content">
				  <li><Link to="/izdavanje">Prikaz</Link></li>
				  <li className="divider"></li>
				  <li><Link to="/izdavanje/dodaj" href="#!">Dodaj</Link></li>
				  <li className="divider"></li>
				</ul>
				<nav className="blue darken-3">
				  <div className="nav-wrapper">
				    <a href="/" className="brand-logo">Knjižnica</a>
				    <ul className="right hide-on-med-and-down">
				      <li><a href="sass.html">Nešto</a></li>
				      <li><a href="badges.html">Nešto drugo</a></li>
				 
				      <li><a className="dropdown-trigger" href="#!" data-target="dropdown">Nakladnik<i className="material-icons right"></i></a></li>
				      <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">Izdavatelj<i className="material-icons right"></i></a></li>
				      <li><a className="dropdown-trigger" href="#!" data-target="dropdown2">Knjiga<i className="material-icons right"></i></a></li>
				      <li><a className="dropdown-trigger" href="#!" data-target="dropdown3">Izdavanje<i className="material-icons right"></i></a></li>
				    
				    </ul>
				  </div>
				</nav>	
			</div>
		)
	}
}


export default Navbar