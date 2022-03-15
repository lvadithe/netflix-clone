import React, { useState } from 'react'
// import { useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
import LoginScreen from '../LoginScreen/LoginScreen'

import "./Login.css"
import LOGO from '../../../assets/logo_netflix.png'


function Login() {
    
    // const navigate = useNavigate()
    const [sigIn, setSignIn] = useState(false)
    // const { user } = useSelector(state => state.user)

    // If the user is logged in, we want to redirect to the home page
    // useEffect(() => {
    //     if (user.email) {
    //         navigate('/home')
    //     }
    // }, [user])

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
