import React, { useState } from 'react'
import LoginScreen from '../LoginScreen/LoginScreen'

import "./Login.css"
import LOGO from '../../../assets/logo_netflix.png'


function Login() {
    const [sigIn, setSignIn] = useState(false)

    return (
        <div className="login_m">
            <div className="login_bk">
                <img
                    className='logo_login'
                    src={LOGO}
                    alt=""
                />
                <button onClick={() => setSignIn(true)} className='login_button'>
                    Sign In
                </button>
                <div className="login_gradient" />
            </div>
            <div className="login_body">
                {
                    sigIn ? <LoginScreen /> :
                        <>
                            <h1>Unlimited films, TV programmes and more.</h1>
                            <h2>Watch anywhere. Cancel at any time</h2>
                            <h3>
                                Ready to watch? Enter your email to create
                                or restart your membership.
                            </h3>
                            <div className="login_input">
                                <form >
                                    <input
                                        type="email"
                                        placeholder='Email Address'
                                    />
                                    <button className="login_get">GET STARTED</button>
                                </form>
                            </div>
                        </>
                }
            </div>
        </div>
    )
}

export default Login
