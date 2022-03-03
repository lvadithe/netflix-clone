import React from 'react'
import "./loginScreen.css"

function LoginScreen() {

    const register = (e) => {
        e.preventDefault();
    }

    const signIn = (e) => {
        e.preventDefault();
    }

    return (
        <div className="signup_m">
            <form >
                <h1>Sign In</h1>
                <input placeholder='Email' type="email" />
                <input placeholder='Password' type="password" />
                <button onClick={signIn} type='submit' >Sign In</button>
                <h4>
                    <span className='signup_gray' >New to Netflix?  </span>
                    <span className='signup_link' onClick={register} > Sign Up now.</span>
                </h4>
            </form>
        </div>
    )
}

export default LoginScreen