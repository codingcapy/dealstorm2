


import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useAuthStore from "../store/AuthStore";

export default function LoginPage() {

    const navigate = useNavigate();
    const { loginService, authLoading, user } = useAuthStore((state) => state);
    const [message, setMessage] = useState("");

    useEffect(() => {
        if (!!user) {
            navigate(`/loading`);
        }
    }, [user])

    function onLogin(e) {
        e.preventDefault();
        let email = e.target.email?.value;
        let password = e.target.password?.value;
        console.log(email)
        console.log(password)
        if (!email || !password) return;
        loginService(email, password);
        if (!user) {
            setMessage("Invalid login credentials");
        }
    }

    return (
        <main className="flex-1 bg-emerald-100">
            <div className=" text-black flex flex-col mx-auto">
                <section className="max-w-[1000px] mx-auto py-5">
                    <h3 className="pl-2 text-5xl md:text-6xl py-5 text-center">Login</h3>
                    <p className="text-center md:text-lg">Login to take <span className="text-teal-600">full advantage</span>
                        of our <span className="text-teal-600">features</span></p>
                    <p className="text-center md:text-lg">as a member of <span className="text-teal-600">DealStorm</span></p>
                </section>
                <section className="py-10 md:pl-20 mx-auto">
                    <form onSubmit={onLogin} className="flex flex-col mx-auto">
                        <div className="flex flex-col">
                            <label htmlFor="email">Email</label>
                            <input type="email" name='email' id='email' placeholder="Email" required
                                className="px-2 border rounded-lg border-slate-700 py-1 w-[300px]" />
                        </div>
                        <div className="flex flex-col my-2">
                            <label htmlFor="password">Password</label>
                            <input type="password" name='password' id='password' placeholder='Password' required rows="10"
                                cols="40" className="px-2 border rounded-lg border-slate-700 py-1 w-[300px]" />
                        </div>
                        <div className="flex flex-col my-2">
                            <label htmlFor="confirmpassword">Confirm Password</label>
                            <input type="password" name='confirmpassword' id='confirmpassword' placeholder='Confirm Password' required
                                rows="10" cols="40" className="px-2 border rounded-lg border-slate-700 py-1 w-[300px]" />
                        </div>
                        <p className="text-center text-xl">{message}</p>
                        <button
                            className="px-3 py-3 my-7 rounded-3xl bg-teal-700 text-white">Login</button>
                        <p className="text-lg text-center">New User? <NavLink to="/signup"
                            className="text-teal-300 font-bold">Sign Up</NavLink></p>
                        <p className="text-lg text-center">Forgot Password? <a href="#"
                            className="text-teal-300 font-bold">Recovery</a></p>
                    </form>
                </section>
            </div>
        </main>
    )
}