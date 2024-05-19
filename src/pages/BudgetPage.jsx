


import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import DOMAIN from "../services/endpoint";
import useAuthStore from "../store/AuthStore";

export default function BudgetPage() {

    const { logoutService, user } = useAuthStore((state) => state);
    const navigate = useNavigate();
    const [message, setMessage] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        const userId = user.user_id
        const value = e.target.value.value;
        const newBudget = { userId, value };
        const res = await axios.post(`${DOMAIN}/api/budgets/`, newBudget);
        if (res?.data.success) {
            setMessage(res?.data.message);
            navigate("/dealstorm2/address");
        }
        else {
            setMessage(res?.data.message);
        }
    }

    return (
        <main
            className="flex-1 bg-teal-100"
        >
            <div className="py-[200px]">
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <label
                        htmlFor="budget"
                        className="text-lg font-bold py-2 text-center mx-auto"
                    >What is your weekly budget?</label>
                    <div className="px-2 rounded-2xl bg-white w-[300px] mx-auto">
                        <div className=" ">$
                            <input
                                type="text"
                                placeholder="0.00"
                                className="py-2 px-2 rounded-xl outline-none"
                                name="value"
                                id="value"
                            />
                        </div>
                    </div>
                    <button
                        className="absolute bottom-20 right-10 bg-slate-700 border px-2 py-2 text-white rounded-3xl w-[100px] text-lg"
                    >Next</button>
                </form>
            </div>
        </main>
    )
}