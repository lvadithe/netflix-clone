import React, { useEffect, useState } from 'react';
import LOGO from '../../../assets/logo_netflix.png';
import AVATAR from '../../../assets/avatar.png';
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { useDispatch } from "react-redux";
import { pickSearchTerm } from "../../../redux/actions";
import "./nav.css";
import { useNavigate } from 'react-router-dom';


function Nav() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [state, setState] = useState(false);

    function handleInputChange(e) {
        e.preventDefault()
        setName(e.target.value)   //valor del input
    }

    // We need to go to the 'Searchs' route after we dealt with the search
    function handleSubmit(e) {
        e.preventDefault()
        dispatch(pickSearchTerm(name))
        // Redirectionate to the 'Searchs' route
        setName('')
        navigate('/searchs')
    }

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            setState(true);
        } else {
            setState(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar)
    }, []);

    return (
        <div className={`nav__container ${state && 'nav__black'}`}>
            <div className="nav__content">
                <Link to="/home">
                    <img src={LOGO} alt="" className='nav__logo' />
                </Link>
                <div className="container-2">
                    <BsSearch onClick={(e) => handleSubmit(e)} className="icon" />
                    <input onChange={(e) => handleInputChange(e)} type="search" value={name} id="search" placeholder="Search..." />
                </div>
                <img src={AVATAR} alt="" className='avatar__logo' />
            </div>
        </div>
    )
}

export default Nav 