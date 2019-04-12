import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'

class Navbar extends Component{
	logOut(event){
		event.preventDefault()
		localStorage.removeItem('usertoken')
		this.props.history.push(`/`)
	}
	render(){
		const loginRegLink = (
			    <ul className="right hide-on-med-and-down">
			      <li><Link to="/login">Login</Link></li>
			      <li><Link to="/register">Register</Link></li>
				 </ul>
		)

		const userLink = (
			    <ul className="right hide-on-med-and-down">

			      <li><Link to="/profile">Profile</Link></li>
				  <li><a href="#!" onClick={this.logOut.bind(this)}>Logout</a></li>

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

				      <li><a className="dropdown-trigger" href="#!" data-target="dropdown">Nakladnik<i className="material-icons right"></i></a></li>
					  <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">Izdavatelj<i className="material-icons right"></i></a></li>
					  <li><a className="dropdown-trigger" href="#!" data-target="dropdown2">Knjiga<i className="material-icons right"></i></a></li>
					  <li><a className="dropdown-trigger" href="#!" data-target="dropdown3">Izdavanje<i className="material-icons right"></i></a></li>
					

				 </ul>
			)

		return(
			<div>
				<nav className="blue darken-3">
				  <div className="nav-wrapper">
				    <a href="/" className="brand-logo">Knjižnica</a>
				    <ul className="right hide-on-med-and-down">
				    {localStorage.usertoken ? userLink : loginRegLink}
				      <li><Link to="/">Home</Link></li>	  
					
					</ul>
				  </div>
				</nav>	


			</div>
		)
	}
}


export default withRouter(Navbar)