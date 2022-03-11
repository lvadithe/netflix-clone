import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../../redux/actions/index.js'
import "./LoginScreen.css"

function LoginScreen() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userInfo = useSelector(state => state.user)

    const [post, setPost] = useState({
        email: '',
        password: ''
    })
    console.log(post)

    function handleInputChange(e) {
        setPost({
            ...post,
            [e.target.name]: e.target.value
        })
    }

    const register = (e) => {
        e.preventDefault()
        navigate('/register')
    }

    const loginUser = (e) => {
        e.preventDefault()
        dispatch(login(post))
    }
    return (
        <div className="signin_container">
            <form onSubmit={e => loginUser(e)}>
                <h1>Sign In</h1>
                <input placeholder='Email' type="email" value={post.email} name='email' onChange={e => handleInputChange(e)} />
                <input placeholder='Password' type="password" value={post.password} name='password' onChange={e => handleInputChange(e)} />
                <button type='submit' >Sign In</button>
                <h4>
                    <span className='signup_gray' >New to Netflix?  </span>
                    <span className='signup_link' onClick={register} > Sign Up now.</span>
                </h4>
            </form>
            <h1>Sign In</h1>
        </div>
    )
}

export default LoginScreen
