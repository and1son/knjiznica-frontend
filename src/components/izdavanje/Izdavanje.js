import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';
import IzdavanjeItem from './IzdavanjeItem'

  class Izdavanje extends Component {
       constructor(){
        super()
        this.state =  {
          izdavanje: [
         ]
      }
        //this.handleEdit = this.handleEdit.bind(this)
        //this.handleUserName = this.handleUserName.bind(this)
      }

      componentWillMount(){
        this.getIzdavanje()
      }

      getIzdavanje(){
        axios.get(`http://localhost:5000/izdavanje`)
          .then(response => {
            this.setState({izdavanje : response.data }, () => {
              console.log(this.state)
            })
          })
          .catch(err => console.log(err))
      }

      render(){
        const izdavanjeItem = this.state.izdavanje.map((izdavanje, i) => {
          return(
         	<IzdavanjeItem key={izdavanje.sifra} sifra={izdavanje.sifra} datum_izdavanja={izdavanje.datum_izdavanja} datum_povratka={izdavanje.datum_povratka} cijena={izdavanje.cijena} izdavatelj={izdavanje.izdavatelj} knjiga={izdavanje.knjiga}/>
          )
        })
        return(
          <div>
            <h1> Izdavanje </h1>
            <ul className="collection">
              {izdavanjeItem}
            </ul>
            <div className="fixed-action-btn">
					<Link to="/izdavanje/dodaj" className="btn-floating btn-large red">
						<i className="fa fa-plus"></i>
					</Link>
			</div>
          </div>
          )
      }
  }

export default Izdavanje


