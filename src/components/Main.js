import React from 'react'
import {Switch, Route } from 'react-router-dom'
import Nakladnik from './Nakladnik'
import About from './About'
import NakladnikDetail from './NakladnikDetail'

const Main = () => (
	<main>
		<Switch>
			<Route exact path='/nakladnik' component={Nakladnik} />
			<Route exact path='/about' component={About} />
			<Route exact path='/nakladnik/:sifra' component={NakladnikDetail} />

		</Switch>
	</main>
)

export default Main