import React, { useEffect, useState } from 'react';
import LOGO from '../../../assets/logo_netflix.png';
import AVATAR from '../../../assets/avatar.png';
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { useDispatch } from "react-redux";
import { getNameMovies, getClean } from "../../../redux/actions";
import "./nav.css";


function Nav() {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [state, setState] = useState(false);

    function handleInputChange(e) {
        e.preventDefault()
        setName(e.target.value)   //valor del input
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(getNameMovies(name)) //el estado
        setName('')
    }

    function handleSubmits(e) {
        e.preventDefault()
        dispatch(getClean()) //el estado
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
                    <img /* onClick={(e) => handleSubmits(e)} */ src={LOGO} alt="" className='nav__logo' />
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