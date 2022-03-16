import { signup } from '../../../redux/actions'

import { useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import "./SignUpScreen.css"


function SignUpScreen() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [errors, setErrors] = useState({})
    const [credentials, setCredentials] = useState({ firstName: '', lastName: '', email: '', password: '' })
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
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
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
        setErrors({
            ...errors,
            // regex test:
            firstName: credentials.firstName.length > 0 ? '' : 'First name is required',
            lastName: credentials.lastName.length > 0 ? '' : 'Last name is required',
            email: mailRegex.test(credentials.email) ? '' : 'Invalid email',
            password: passwordRegex.test(credentials.password) ? '' : 'Password must be at least 8 characters long, contain at least one number, one uppercase letter and one special character (@$!%*?&)'
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (errors.email === '' && errors.password === '') {
            dispatch(signup(credentials))
        }
    }

    return (
        <div className="signup_m">
            <form onSubmit={e => handleSubmit(e)}>
                <h1>Sign Up</h1>
                <div>
                    <input placeholder='First Name' type="text" value={credentials.firstName} name='firstName' onChange={e => handleInputChange(e)} />
                    {errors.firstName && (
                        <p className='error'>{errors.firstName}</p>
                    )}
                </div>
                <div>
                    <input placeholder='Last Name' type="text" value={credentials.lastName} name='lastName' onChange={e => handleInputChange(e)} />
                    {errors.lastName && (
                        <p className='error'>{errors.lastName}</p>
                    )}
                </div>
                <div>
                    <input placeholder='Email' type="email" value={credentials.email} name='email' onChange={e => handleInputChange(e)} />
                    {errors.email && (
                        <p className='error'>{errors.email}</p>
                    )}
                </div>
                <div>
                    <input placeholder='Password' type="password" value={credentials.password} name='password' onChange={e => handleInputChange(e)} />
                    {errors.password && (
                        <p className='error'>{errors.password}</p>
                    )}
                </div>
                <button type='submit' >Submit</button>
            </form>
        </div>
    )
}

export default SignUpScreen
