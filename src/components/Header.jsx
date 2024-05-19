
import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import { TiWeatherStormy } from "react-icons/ti";

export default function Header() {
    const [navVisible, setNavVisible] = useState(false);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 700) {
                setNavVisible(true);
            } else {
                setNavVisible(false);
            }
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    function slideToggle() {
        setNavVisible(!navVisible);
    };

    return (
        <header className="md:flex justify-between bg-white text-gray-600 sticky z-50 top-0">
            <div className="flex justify-between md:block px-2">
                <div className="flex">
                    <NavLink to="/">
                        <TiWeatherStormy size={30} />
                        {/* <div className="nav-element hidden md:block py-5 text-2xl">DealStorm</div> */}
                    </NavLink>
                    {/* <NavLink to="/"><div className="md:hidden py-5 text-lg">DealStorm</div></NavLink> */}
                </div>
                <button id="hamburger-menu" className="text-3xl md:hidden" onClick={slideToggle}>&#x2630;</button>
            </div>
            <nav id="main-nav" className={`${navVisible ? 'visible' : ''} md:block`}>
                <ul className="md:flex">
                    <li
                        className="px-5 py-2 md:py-5 text-center rounded-md transition ease-in-out duration-300  md:hidden">
                        <NavLink to="/" onClick={() => window.innerWidth < 700 && setNavVisible(false)}>Home</NavLink>
                    </li>
                    <li
                        className="px-5 py-2 text-center md:hidden rounded-md transition ease-in-out duration-300  md:text-2xl">
                        <NavLink to="/login" onClick={() => window.innerWidth < 700 && setNavVisible(false)}>Login</NavLink>
                    </li>
                    <li
                        className="px-5 py-2 text-center md:hidden rounded-md transition ease-in-out duration-300  md:text-2xl">
                        <NavLink to="/signup" onClick={() => window.innerWidth < 700 && setNavVisible(false)}>Signup</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="flex">
                <NavLink to="/login"
                    className="nav-element hidden px-5 py-2 md:py-5 text-center md:block rounded-md transition ease-in-out duration-300 md:text-2xl">
                    Login
                </NavLink>
                <NavLink to="/signup"
                    className="nav-element hidden px-5 py-2 md:py-5 text-center md:block rounded-md transition ease-in-out duration-300 md:text-2xl">
                    Signup
                </NavLink>
            </div>
        </header>
    );
}