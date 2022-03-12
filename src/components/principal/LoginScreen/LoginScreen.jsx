import React, { useState, useEffect } from 'react'

import { login } from '../../../redux/actions'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import "./LoginScreen.css"


function LoginScreen() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    const user = useSelector(state => state.user)

    useEffect(() => {
        if (user.firstName) {
            navigate('/home')
        }
        // eslint-disable-next-line
    }, [user])

    function handleInputChange(e) {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const signIn = (e) => {
        e.preventDefault()
        dispatch(login(credentials))
    }

    const register = () => {
        navigate('/register')
    }

    return (
        <div className="signup_m">
            <form onSubmit={e => signIn(e)}>
                <h1>Sign In</h1>
                <input placeholder='Email' type="email" value={credentials.email} name='email' onChange={e => handleInputChange(e)} />
                <input placeholder='Password' type="password" value={credentials.password} name='password' onChange={e => handleInputChange(e)} />
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
