import React, { useState, useEffect } from 'react'

import { login } from '../../../redux/actions'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import "./LoginScreen.css"

function validate(credentials) {
    let errors = {};
    if (!credentials.email) {
        errors.email = 'please enter your email address correctly'
    }
    if (!credentials.password || credentials.password < 0) {
        errors.password = 'please enter your password correctly'
    }
    return errors
}

function LoginScreen() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [errors, setErrors] = useState({})
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })
console.log(errors)
    const user = useSelector(state => state.user)

    /* useEffect(() => {
        if (user.firstName) {
            navigate('/home')
        }
        // eslint-disable-next-line
    }, [user]) */

    function handleInputChange(e) {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...credentials,
            [e.target.name]: e.target.value
        }));
    }

    const signIn = (e) => {
        e.preventDefault()
        if (Object.values(errors).length > 0 || !errors.email) alert("Por favor rellenar todos los campos")
        else {
            dispatch(login(credentials))
            navigate('/home')
        }
    }

    const register = () => {
        navigate('/register')
    }

    return (
        <div className="signup_m">
            <form onSubmit={e => signIn(e)}>
                <h1>Sign In</h1>
                <div>
                    <input placeholder='Email' type="email" value={credentials.email} name='email' onChange={e => handleInputChange(e)} />
                {errors.email && (
                    <p>{errors.email}</p>
                )}
                </div>
                <div>
                    <input placeholder='Password' type="password" value={credentials.password} name='password' onChange={e => handleInputChange(e)} />
                {errors.password &&  (
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
