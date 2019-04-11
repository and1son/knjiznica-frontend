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
import Knjiga from './knjiga/Knjiga'
import KnjigaDetail from './knjiga/KnjigaDetail'
import AddKnjiga from './knjiga/AddKnjiga'
import EditKnjiga from './knjiga/EditKnjiga'
import Izdavanje from './izdavanje/Izdavanje'
import IzdavanjeDetail from './izdavanje/IzdavanjeDetail'
import AddIzdavanje from './izdavanje/AddIzdavanje'
import EditIzdavanje from './izdavanje/EditIzdavanje'

import Login from './Login'
import Register from './Register'
import Profile from './Profile'

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
			<Route exact path='/knjiga' component={Knjiga} />
			<Route exact path='/knjiga/dodaj' component={AddKnjiga} />
			<Route exact path='/knjiga/:sifra' component={KnjigaDetail} />
			<Route exact path='/knjiga/edit/:sifra' component={EditKnjiga} />
			<Route exact path='/izdavanje' component={Izdavanje} />
			<Route exact path='/izdavanje/dodaj' component={AddIzdavanje} />
			<Route exact path='/izdavanje/:sifra' component={IzdavanjeDetail} />
			<Route exact path='/izdavanje/edit/:sifra' component={EditIzdavanje} />
			<Route exact path='/register' component={Register} />
			<Route exact path='/login' component={Login} />
			<Route exact path='/profile' component={Profile} />
		</Switch>
	</main>
)

export default Main