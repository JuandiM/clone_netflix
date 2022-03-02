import React from 'react'
import { useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.scss';
import logo from '../../assets/play-logo.png';

const navBar = [
    {
        display: 'Home',
        path: '/'
    },
    {
        display: 'Movies',
        path: '/movie'
    },
    {
        display: 'Tv Series',
        path: '/tv'
    },

];

const Header = () => {

    const {pathname} = useLocation();
    const headerRef = useRef(null);

    const active = navBar.findIndex(e => e.path === pathname);

    return (
        <div ref={headerRef} className='header'>
            <div className='header_wrap container'>
                <div className="logo">
                    <img src={logo} alt="logo" />
                    <Link to='/'></Link>
                </div>
                <ul className='header_nav'>
                    {
                       navBar.map((e, i) => (
                           <li key={i} className={`${i === active ? 'active' : ''}`}>
                               <Link to={e.path}>
                                   {e.display}
                               </Link>
                           </li>
                       )) 
                    }
                </ul>
            </div>
        </div>
    )
}

export default Header
