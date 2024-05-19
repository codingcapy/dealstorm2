
import $ from 'jquery';
import { NavLink } from "react-router-dom";
import ScrollReveal from 'scrollreveal'

export default function HomePage() {

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

    return (
        <main
            className="flex-1 bg-emerald-100"
        >
            <h1 className="timeline-content js--fadeInLeft text-center text-4xl md:text-8xl tracking-tighter font-bold pt-36">
                Dealstorm
            </h1>
            <h2 className="timeline-content js--fadeInLeft text-center text-2xl tracking-tighter">
                Finding inexpensive options with ease
            </h2>
            <NavLink to="/dealstorm2/login" className="timeline-content js--fadeInRight flex flex-col mx-auto text-center py-2 my-5 text-white bg-teal-600 w-[200px] text-2xl rounded-3xl">Login</NavLink>
            <div className="timeline-content js--fadeInRight text-center">New user? <NavLink to="/dealstorm2/signup" className="text-teal-600 font-bold">Sign up</NavLink></div>
        </main>
    )
}