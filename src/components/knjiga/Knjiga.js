import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';
import KnjigaItem from './KnjigaItem'

  class Knjiga extends Component {
       constructor(){
        super()
        this.state =  {
          knjiga: [
         ]
      }
        //this.handleEdit = this.handleEdit.bind(this)
        //this.handleUserName = this.handleUserName.bind(this)
      }

      componentWillMount(){
        this.getKnjiga()
      }

      getKnjiga(){
        axios.get(`http://localhost:5000/knjiga`)
          .then(response => {
            this.setState({knjiga : response.data }, () => {
              console.log(this.state)
            })
          })
          .catch(err => console.log(err))
      }

      render(){
        const knjigaItem = this.state.knjiga.map((knjiga, i) => {
          return(
         	<KnjigaItem key={knjiga.sifra} sifra={knjiga.sifra} Naslov={knjiga.Naslov} Zanr={knjiga.Zanr} Autor={knjiga.Autor} nakladnik={knjiga.nakladnik}/>
          )
        })
        return(
          <div>
            <h1> Knjige </h1>
            <ul className="collection">
              {knjigaItem}
            </ul>
            <div className="fixed-action-btn">
					<Link to="/knjiga/dodaj" className="btn-floating btn-large red">
						<i className="fa fa-plus"></i>
					</Link>
			</div>
          </div>
          )
      }
  }

export default Knjiga


