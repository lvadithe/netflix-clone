import React from 'react'
import "./loginScreen.css"

function LoginScreen() {
    return (
        <div className="signup_m">
            <form >
                <h1>Sign In</h1>
                <input placeholder='Email' type="email" />
                <input placeholder='Password' type="password" />
                <button type='submit' >Sign In</button>
                <h4>
                    <span className='signup_gray' >New to Netflix?  </span>
                    <span className='signup_link' > Sign Up now.</span>
                </h4>
            </form>
        </div>
    )
}

export default LoginScreen