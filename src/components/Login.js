import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios'

class Login extends Component{

  login(user){
    axios.request({
      method: 'post',
      url : 'http://localhost:5000/users/login',
      data: user
    })
    .then(response =>{
      localStorage.setItem('usertoken', response.data.token)
      if(!response.error){
        this.props.history.push('/')
        //console.log(response.data.token)
        return response.data.token
      }
    }).catch(err=>console.log(err))
  }

  onSubmit(event){
    event.preventDefault()
    const user = {
      email : this.refs.email.value,
      password : this.refs.password.value
    }
    this.login(user)

  }
  render(){
    return(
          <div>
          <br />
          <Link className="btn grey" to="/"> Back </Link>
            <h1> Login </h1>
            <form onSubmit={this.onSubmit.bind(this)}>
              <div className="input-field">
                <input type="text" name="email" ref="email" />
                <label htmlFor="email">email</label>
              </div>
              <div className="input-field">
                <input type="password" name="password" ref="password" />
                <label htmlFor="password">password</label>
              </div>
              <input type="submit" value="Save" className="btn" />
            </form>
          </div>


      )
  }

}


export default Login
