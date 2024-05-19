

import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useAuthStore from "../store/AuthStore";
import axios from "axios"
import DOMAIN from "../services/endpoint";

export default function LoadingPage() {

    const navigate = useNavigate();
    const { loginService, authLoading, user } = useAuthStore((state) => state);
    const [message, setMessage] = useState("");

    useEffect(() => {
        async function verifyBudget() {
            const res = await axios.get(`${DOMAIN}/api/budgets/${user.user_id}`)
            console.log(res)
            if (!res.data.value) {
                navigate("/dealstorm2/budget")
            }
            else {
                navigate("/dealstorm2/dashboard")
            }
        }
        setTimeout(() => {
            verifyBudget()
        }, 2000)
    }, [])

    return (
        <main
            className="flex-1 bg-emerald-100"
        >
            <h1 className="text-center text-4xl md:text-8xl tracking-tighter font-bold pt-36">
                Dealstorm
            </h1>
            <h2 className="text-center text-2xl tracking-tighter">
                Finding inexpensive options with ease
            </h2>
            <div className="preloader">
                <div class="b-ico-preloader">
                </div>
                <div class="spinner">
                </div>
            </div>
            <h1 className="text-center text-4xl">Loading...</h1>
        </main>
    )
}