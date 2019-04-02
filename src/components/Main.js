import React from 'react'
import {Switch, Route } from 'react-router-dom'
import Nakladnik from './Nakladnik'
import About from './About'
import NakladnikDetail from './NakladnikDetail'
import AddNakladnik from './AddNakladnik'
import EditNakladnik from './EditNakladnik'

const Main = () => (
	<main>
		<Switch>
			<Route exact path='/nakladnik' component={Nakladnik} />
			<Route exact path='/about' component={About} />
			<Route exact path='/nakladnik/dodaj' component={AddNakladnik} />
			<Route exact path='/nakladnik/edit/:sifra' component={EditNakladnik} />
			<Route exact path='/nakladnik/:sifra' component={NakladnikDetail} />

		</Switch>
	</main>
)

export default Main