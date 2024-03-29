import React from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from '../features/user.js'

const Login = () => {
	const dispatch = useDispatch()
	return (
		<div>
			<button onClick={() => {
				dispatch(login({name: 'Artem', age: 25, email: 'arti@gmail.com'}))
			}}>Login</button>

			<button onClick={() => {
				dispatch(logout())
			}}>Logout</button>
		</div>
	)
}

export default Login