import React from 'react'
import {Switch, Route } from 'react-router-dom'
import About from './About'
import Nakladnik from './nakladnik/Nakladnik'
import NakladnikDetail from './nakladnik/NakladnikDetail'
import AddNakladnik from './nakladnik/AddNakladnik'
import EditNakladnik from './nakladnik/EditNakladnik'
import Izdavatelj from './izdavatelj/Izdavatelj'
import IzdavateljDetail from './izdavatelj/IzdavateljDetail'
import AddIzdavatelj from './izdavatelj/AddIzdavatelj'
import EditIzdavatelj from './izdavatelj/EditIzdavatelj'

const Main = () => (
	<main>
		<Switch>
			<Route exact path='/about' component={About} />
			<Route exact path='/nakladnik' component={Nakladnik} />
			<Route exact path='/nakladnik/dodaj' component={AddNakladnik} />
			<Route exact path='/nakladnik/:sifra' component={NakladnikDetail} />
			<Route exact path='/nakladnik/edit/:sifra' component={EditNakladnik} />
			<Route exact path='/izdavatelj' component={Izdavatelj} />
			<Route exact path='/izdavatelj/dodaj' component={AddIzdavatelj} />
			<Route exact path='/izdavatelj/:sifra' component={IzdavateljDetail} />
			<Route exact path='/izdavatelj/edit/:sifra' component={EditIzdavatelj} />

		


		</Switch>
	</main>
)

export default Main