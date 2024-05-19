
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useAuthStore from "../store/AuthStore";
import axios from "axios"
import DOMAIN from "../services/endpoint";

export default function AllSetPage(){

    const navigate = useNavigate();
    const { loginService, authLoading, user } = useAuthStore((state) => state);
    const [message, setMessage] = useState("");

    useEffect(() => {
        setTimeout(()=>{
            navigate("/dashboard")
        }, 1000)
    })

    return(
        <main
            className="flex-1 bg-emerald-100"
        >
            <h1 className="text-center text-4xl md:text-8xl tracking-tighter font-bold pt-36">
                Dealstorm
            </h1>
            <h2 className="text-center text-2xl tracking-tighter">
                Finding inexpensive options with ease
            </h2>
            <h1 className="text-center text-4xl">You're all set! &#128526;</h1>
        </main>
    )
}