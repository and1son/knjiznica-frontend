import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';
import NakladnikItem from './NakladnikItem'

  class Nakladnik extends Component {
       constructor(){
        super()
        this.state =  {
          nakladnik: [
         ]
      }
        //this.handleEdit = this.handleEdit.bind(this)
        //this.handleUserName = this.handleUserName.bind(this)
      }

      componentWillMount(){
        this.getNakladnik()
      }

      getNakladnik(){
        axios.get(`http://localhost:5000/nakladnik`)
          .then(response => {
            this.setState({nakladnik : response.data }, () => {
              console.log(this.state)
            })
          })
          .catch(err => console.log(err))
      }

      render(){
        const nakladniciItem = this.state.nakladnik.map((nakladnik, i) => {
          return(
            <NakladnikItem key={nakladnik.sifra} item={nakladnik}/>
          )
        })
        return(
          <div>
            <h1> Nakladnici </h1>
            <ul className="collection">
              {nakladniciItem}
            </ul>
            <div className="fixed-action-btn">
					<Link to="/nakladnik/dodaj" className="btn-floating btn-large red">
						<i className="fa fa-plus"></i>
					</Link>
			</div>
          </div>
          )
      }
  }

export default Nakladnik



   /*componentDidMount(){
      fetch("http://localhost:5000/nakladnik")
        .then(response=>response.json())
        .then(data => {
          this.setState({
             sifra :  data.sifra,
             Naziv : data.Naziv,
             Mjesto : data.Mjesto
          })
        })           
    }
    handleEdit(sifra){ 
      this.setState(prevState=>{
        const updatedNakladnik = prevState.nakladnik.map(item=>{
          if(item.sifra === sifra){
            item.Mjesto[0] = "marko"
          }
          return item
        })
        return{
          nakladnik : updatedNakladnik
        }
      })
    }
    
    handleUserName = (sifra, e) => {
        this.setState(prevState=>{
        const updatedNakladnik = prevState.nakladnik.map(item=>{
            return nakladnik.sifra === sifra
            console.log(item.sifra)
        })
        const nakladnik = Object.assign({}, this.state.nakladnik[updatedNakladnik])
        nakladnik.Naziv = e.target.value
        const nakladnici = Object.assign([], this.state.nakladnik)
        nakladnik[updatedNakladnik] = nakladnik
        this.setState({nakladnik:nakladnici})
      })
    }

    render() {
      console.log(this.state.nakladnik)
      const { nakladnik } = this.state;
      const nakladnikPodaci = this.state.nakladnik.map(item => <NakladnikTable key={item.sifra} nakladnik={nakladnik} item={item} handleUserName={this.handleUserName}/>)
      return (
        <div>
          {nakladnikPodaci}
        </div>
        )
    }
  }*/

