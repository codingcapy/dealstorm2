


import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import DOMAIN from "../services/endpoint";

export default function SignupPage() {

    const navigate = useNavigate();
    const [message, setMessage] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        const password = e.target.password.value;
        const email = e.target.email.value;
        const newUser = { password, email };
        const res = await axios.post(`${DOMAIN}/api/users/`, newUser);
        if (res?.data.success) {
            setMessage(res?.data.message);
            navigate("/dealstorm2/login");
        }
        else {
            setMessage(res?.data.message);
        }
    }

    return (
        <main className="flex-1 bg-emerald-100">
            <div className=" text-black flex flex-col mx-auto">
                <section className="max-w-[1000px] mx-auto py-5">
                    <h3 className="pl-2 text-5xl md:text-6xl py-5 text-center">Signup</h3>
                    <p className="text-center md:text-lg">Signup to take <span className="text-teal-600">full advantage</span>
                        of our <span className="text-teal-600">features</span></p>
                    <p className="text-center md:text-lg">as a member of <span className="text-teal-600">DealStorm</span></p>
                </section>
                <section className="py-10 md:pl-20 mx-auto">
                    <form onSubmit={handleSubmit} className="flex flex-col mx-auto">
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
                        <button
                            className="px-3 py-3 my-7 rounded-3xl bg-teal-700 text-white">Signup</button>
                        <p className="text-lg text-center">Already have an account? <NavLink to="/dealstorm2/login"
                            className="text-teal-300 font-bold">Login</NavLink></p>
                        <p className="text-lg text-center">Forgot Password? <a href="#"
                            className="text-teal-300 font-bold">Recovery</a></p>
                    </form>
                </section>
            </div>
        </main>
    )
}