
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useAuthStore from "../store/AuthStore";
import $ from 'jquery';
import ScrollReveal from 'scrollreveal'
import axios from "axios"
import DOMAIN from "../services/endpoint";

export default function AllSetPage(){

    const navigate = useNavigate();
    const { loginService, authLoading, user } = useAuthStore((state) => state);
    const [message, setMessage] = useState("");

    useEffect(() => {
        setTimeout(()=>{
            navigate("/dealstorm2/dashboard")
        }, 1000)
    })

    $(function () {
        window.sr = ScrollReveal();
        sr.reveal('.js--fadeInLeft', {
            origin: 'left',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800,
        });
        sr.reveal('.js--fadeInRight', {
            origin: 'right',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800,
        });
        sr.reveal('.js--fadeInBottom', {
            origin: 'bottom',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800,
        });
        sr.reveal('.js--fadeInTop', {
            origin: 'top',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800,
        });

        sr.reveal('.js--fadeInLeft', {
            origin: 'left',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800,
        });
        sr.reveal('.js--fadeInRight', {
            origin: 'right',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800,
        });
    });

    return(
        <main
            className="flex-1 bg-emerald-100"
        >
            <h1 className="timeline-content js--fadeInLeft text-center text-4xl md:text-8xl tracking-tighter font-bold pt-36">
                Dealstorm
            </h1>
            <h2 className="timeline-content js--fadeInLeft text-center text-2xl tracking-tighter">
                Finding inexpensive options with ease
            </h2>
            <h1 className="timeline-content js--fadeInRight text-center text-4xl">You're all set! &#128526;</h1>
        </main>
    )
}