import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {
    constructor(){
      super()
      this.state =  {
        Naziv: '',
        Mjesto: ''
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

   handleChange(event) {
        const {name,value} = event.target
        this.setState({
          [name]: value});  
    }
   
    handleSubmit(event) {
     //alert('A list was submitted: ' + this.state.formvalue);
    event.preventDefault();
    const {Naziv, Mjesto} = this.state
    
    axios.post('http://localhost:5000/nakladnik', {Naziv,Mjesto})

	    .then((data) =>  console.log(data))
      .catch((err)=>console.log(err))
    }

  /*fetch('http://localhost:5000/nakladnik', {
    	method: 'POST',
     	headers: {
        'Accept': 'application/json, text/plain',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        Naziv : this.state.naziv,
        Mjesto : this.state.mjesto        
      })
      }).then((res) => res.json())
            .then((data) =>  console.log(data))
            .catch((err)=>console.log(err))
    }*/
    
    render() {
      const {Naziv,Mjesto} = this.state;
      return (
        <div>
       	<h1> Dodaj nakladnika </h1>
       	<form onSubmit={this.handleSubmit}>
       		<label>
       		Naziv:
       		<input type="text" name="Naziv" value={Naziv} onChange={this.handleChange} />
       		</label>

       		<label>
          Mjesto
          <input type="text" name="Mjesto" value={Mjesto} onChange={this.handleChange} />
       		</label>
          <button type="submit">Submit</button>
       		
       	</form>
       	</div>
        
      )
    }}
  

  export default Post;
