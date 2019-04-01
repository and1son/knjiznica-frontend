import React from 'react'
import {Switch, Route } from 'react-router-dom'
import Nakladnik from './Nakladnik'
import About from './About'

const Main = () => (
	<main>
		<Switch>
			<Route exact path='/nakladnik' component={Nakladnik} />
			<Route exact path='/about' component={About} />

		</Switch>
	</main>
)

export default Main