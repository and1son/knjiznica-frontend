import axios from 'axios'

export const login = user => {
	return axios
	.post('users/login', {
		email : user.email,
		password : user.password
	})
	.then(response => {
		localStorage.setItem('usertoken', response.data.token)
		return response.data
	})
	.catch(err=>{
		console.log(err)
	})
}

export const getProfile = user => {
	return axios
	.get('users/profile',{
	})
	.then(response => {
		console.log(response)
		return response.data
	})
	.catch(err => {
		console.log(err)
	})
}