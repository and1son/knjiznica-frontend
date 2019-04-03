import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';
import IzdavateljItem from './IzdavateljItem'

  class Izdavatelj extends Component {
       constructor(){
        super()
        this.state =  {
          izdavatelj: [
         ]
      }
        //this.handleEdit = this.handleEdit.bind(this)
        //this.handleUserName = this.handleUserName.bind(this)
      }

      componentWillMount(){
        this.getIzdavatelj()
      }

      getIzdavatelj(){
        axios.get(`http://localhost:5000/izdavatelj`)
          .then(response => {
            this.setState({izdavatelj : response.data }, () => {
              console.log(this.state)
            })
          })
          .catch(err => console.log(err))
      }

      render(){
        const izdavateljItem = this.state.izdavatelj.map((izdavatelj, i) => {
          return(
         	<IzdavateljItem key={izdavatelj.sifra} sifra={izdavatelj.sifra} Ime={izdavatelj.Ime} Prezime={izdavatelj.Prezime} Adresa={izdavatelj.Adresa} Mjesto={izdavatelj.Mjesto} Postanski_broj={izdavatelj.Postanski_broj}/>
          )
        })
        return(
          <div>
            <h1> Izdavatelji </h1>
            <ul className="collection">
              {izdavateljItem}
            </ul>
            <div className="fixed-action-btn">
					<Link to="/izdavatelj/dodaj" className="btn-floating btn-large red">
						<i className="fa fa-plus"></i>
					</Link>
			</div>
          </div>
          )
      }
  }

export default Izdavatelj


