import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postUser } from '../../../redux/actions';
import "./loginScreen.css"

function LoginScreen() {

    const dispatch = useDispatch();
    const logIn = useSelector(state => state.user)

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
        e.preventDefault();

    }

    const signIn = (e) => {
        e.preventDefault();
        dispatch(postUser(post))
    }
    console.log(logIn)
    return (
        <div className="signup_m">
            <form onSubmit={e => signIn(e)}>
                <h1>Sign In</h1>
                <input placeholder='Email' type="email" value={post.email} name='email' onChange={e => handleInputChange(e)} />
                <input placeholder='Password' type="password" value={post.password} name='password' onChange={e => handleInputChange(e)} />
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