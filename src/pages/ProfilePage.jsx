
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useAuthStore from "../store/AuthStore";
import $ from 'jquery';
import ScrollReveal from 'scrollreveal'
import axios from "axios"
import DOMAIN from "../services/endpoint";
import { CgProfile } from "react-icons/cg";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { GiMeal } from "react-icons/gi";
import { LuBadgeCheck } from "react-icons/lu";

export default function ProfilePage() {

    const navigate = useNavigate();
    const { loginService, authLoading, user } = useAuthStore((state) => state);
    const [message, setMessage] = useState("");

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
            <div className="timeline-content js--fadeInLeft flex px-5 py-5">
                <CgProfile size={50} />
                <h1 className="pl-2 text-center text-4xl md:text-8xl tracking-tighter font-bold">
                    My Profile
                </h1>
            </div>
            <div class="flex">
                <div class="px-5 py-10 mx-2 bg-white">
                    <div className="text-center text-lg font-bold">Money Saved</div>
                    <FaRegMoneyBillAlt size={100} />
                    <div className="text-center text-lg font-bold">$88.00</div>
                </div>
                <div className="px-5 py-10 mx-2 bg-white">
                    <div className="text-center text-lg font-bold">Healthy meals made</div>
                    <GiMeal size={100} className="mx-auto" />
                    <div className="text-center text-lg font-bold">9</div>
                </div>
            </div>
            <h2 class="pl-2 py-10 text-4xl font-bold">Badges</h2>
            <div class="flex">
                <div>
                    <LuBadgeCheck size={100} className="mx-auto" />
                    <div class="text-xs text-center font-bold">
                        Added celery 10 times
                    </div>
                </div>
                <div>
                    <LuBadgeCheck size={100} className="mx-auto" />
                    <div class="text-xs text-center font-bold">
                        Added beans 5 times
                    </div>
                </div>
                <div>
                    <LuBadgeCheck size={100} className="mx-auto" />
                    <div class="text-xs text-center font-bold">
                        Added a sale item 3 times
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <button className="flex flex-col mx-auto w-[300px] text-center px-3 py-3 my-7 rounded-3xl bg-teal-700 text-white text-2xl">Change Password</button>
                <button className="flex flex-col mx-auto w-[300px] text-center px-3 py-3 my-7 rounded-3xl bg-teal-700 text-white text-2xl">Change Budget</button>
                <button className="flex flex-col mx-auto w-[300px] text-center px-3 py-3 my-7 rounded-3xl bg-teal-700 text-white text-2xl">Change Address</button>
            </div>
        </main>
    )
}