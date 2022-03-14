import React, { useState, useEffect } from 'react'

import { login } from '../../../redux/actions'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import "./LoginScreen.css"


function LoginScreen() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [errors, setErrors] = useState({})
    const [credentials, setCredentials] = useState({ email: '', password: '' })
    const mailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g

    const user = useSelector(state => state.user)
    useEffect(() => {
        // Login exitoso o usuario ya está logueado: redirigimos a /home
        if (user.firstName) navigate('/home')
        // Si hay error, lo mostramos y reseteamos el estado de los inputs
        if (user.error) {
            alert(`Error: "${user.error}"`)
            setCredentials({ email: '', password: '' })
        }
        // eslint-disable-next-line
    }, [user])

    const handleInputChange = e => {
        e.preventDefault()
        setErrors({
            ...errors,
            // regex test:
            email: mailRegex.test(e.target.value) ? 'Invalid email' : '',
            password: e.target.value.length > 0 ? '' : 'Password is required'
        })
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (errors.email === '' && errors.password === '') {
            dispatch(login(credentials))
        }
    }

    const register = () => navigate('/register')

    return (
        <div className="signup_m">
            <form onSubmit={e => handleSubmit(e)}>
                <h1>Sign In</h1>
                <div>
                    <input placeholder='Email' type="email" value={credentials.email} name='email' onChange={e => handleInputChange(e)} />
                    {errors.email && (
                        <p>{errors.email}</p>
                    )}
                </div>
                <div>
                    <input placeholder='Password' type="password" value={credentials.password} name='password' onChange={e => handleInputChange(e)} />
                    {errors.password && (
                        <p>{errors.password}</p>
                    )}
                </div>

                <button type='submit' >Sign In</button>
                <h4>
                    <span className='signup_gray' >New to Netflix?  </span>
                    <span className='signup_link' onClick={register} > Sign Up now.</span>
                </h4>
            </form>
        </div>
    )
}

export default LoginScreen
