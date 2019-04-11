import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios'

class Register extends Component{

  register(newUser){
    axios.request({
      method: 'post',
      url : 'http://localhost:5000/users/register',
      data: newUser
    })
    .then(response =>{
      this.props.history.push('/login')
    }).catch(err=>console.log(err))
  }

  onSubmit(e){
    const newUser = {
      first_name : this.refs.first_name.value,
      last_name : this.refs.last_name.value,
      email : this.refs.email.value,
      password : this.refs.password.value
    }
    this.register(newUser)
    e.preventDefault()
  }
  render(){
    return(
          <div>
          <br />
          <Link className="btn grey" to="/nakladnik"> Back </Link>
            <h1> Register </h1>
            <form onSubmit={this.onSubmit.bind(this)}>
              <div className="input-field">
                <input type="text" name="first_name" ref="first_name" />
                <label htmlFor="first_name">First Name</label>
              </div>
             <div className="input-field">
                <input type="text" name="last_name" ref="last_name" />
                <label htmlFor="last_name">Last Name</label>
              </div>
              <div className="input-field">
                <input type="text" name="email" ref="email" />
                <label htmlFor="email">email</label>
              </div>
              <div className="input-field">
                <input type="text" name="password" ref="password" />
                <label htmlFor="password">password</label>
              </div>
              <input type="submit" value="Save" className="btn" />
            </form>
          </div>


      )
  }

}


export default Register
