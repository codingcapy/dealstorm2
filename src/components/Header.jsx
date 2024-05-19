
import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import { TiWeatherStormy } from "react-icons/ti";
import useAuthStore from "../store/AuthStore"

export default function Header() {

    const [navVisible, setNavVisible] = useState(false);
    const { logoutService, user } = useAuthStore((state) => state)

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 700) {
                setNavVisible(true);
            } else {
                setNavVisible(false);
                console.log("test")
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
        <header className="md:flex justify-between bg-white text-gray-600 sticky z-50 top-0 py-2">
            <div className="flex justify-between md:block px-2">
                <div className="flex">
                    {!user && <NavLink to="/">
                        <TiWeatherStormy size={40} />
                    </NavLink>}
                    {user && <NavLink to="/dashboard">
                        <TiWeatherStormy size={40} />
                    </NavLink>}
                </div>
                <button id="hamburger-menu" className="text-3xl md:hidden" onClick={slideToggle}>&#x2630;</button>
            </div>
            <nav id="main-nav" className={`${navVisible ? 'visible' : ''} md:block`}>
                <ul className="md:flex">
                    {!user && <li
                        className="px-5 py-2 md:py-5 text-center rounded-md transition ease-in-out duration-300  md:hidden">
                        <NavLink to="/" onClick={() => window.innerWidth < 700 && setNavVisible(false)}>Home</NavLink>
                    </li>}
                    {user && <li
                        className="px-5 py-2 md:py-5 text-center rounded-md transition ease-in-out duration-300  md:hidden">
                        <NavLink to="/dashboard" onClick={() => window.innerWidth < 700 && setNavVisible(false)}>Dashboard</NavLink>
                    </li>}
                    {user && <li
                        className="px-5 py-2 text-center md:hidden rounded-md transition ease-in-out duration-300  md:text-2xl">
                        <NavLink to="/dashboard" onClick={() => window.innerWidth < 700 && setNavVisible(false)}>Profile</NavLink>
                    </li>}
                    {user && <li
                        className="px-5 py-2 text-center md:hidden rounded-md transition ease-in-out duration-300  md:text-2xl">
                        <NavLink to="/" onClick={logoutService}>Logout</NavLink>
                    </li>}
                    {!user && <li
                        className="px-5 py-2 text-center md:hidden rounded-md transition ease-in-out duration-300  md:text-2xl">
                        <NavLink to="/login" onClick={() => window.innerWidth < 700 && setNavVisible(false)}>Login</NavLink>
                    </li>}
                    {!user && <li
                        className="px-5 py-2 text-center md:hidden rounded-md transition ease-in-out duration-300  md:text-2xl">
                        <NavLink to="/signup" onClick={() => window.innerWidth < 700 && setNavVisible(false)}>Signup</NavLink>
                    </li>}
                </ul>
            </nav>
            <div className="flex">
                {user && <NavLink to="/dashboard"
                    className="nav-element hidden px-5 py-2 md:py-5 text-center md:block rounded-md transition ease-in-out duration-300 md:text-2xl">
                    Profile
                </NavLink>}
                {user && <NavLink to="/" onClick={logoutService}
                    className="nav-element hidden px-5 py-2 md:py-5 text-center md:block rounded-md transition ease-in-out duration-300 md:text-2xl">
                    Logout
                </NavLink>}
                {!user && <NavLink to="/login"
                    className="nav-element hidden px-5 py-2 md:py-5 text-center md:block rounded-md transition ease-in-out duration-300 md:text-2xl">
                    Login
                </NavLink>}
                {!user && <NavLink to="/signup"
                    className="nav-element hidden px-5 py-2 md:py-5 text-center md:block rounded-md transition ease-in-out duration-300 md:text-2xl">
                    Signup
                </NavLink>}
            </div>
        </header>
    );
}