

import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import DOMAIN from "../services/endpoint";
import useAuthStore from "../store/AuthStore";

export default function AddressPage() {

    const { logoutService, user } = useAuthStore((state) => state);
    const navigate = useNavigate();
    const [message, setMessage] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        const street = e.target.street.value;
        const city = e.target.city.value;
        const province = e.target.province.value;
        const postalcode = e.target.postalcode.value;
        const newAddress = { street, city, province, postalcode };
        const res = await axios.post(`${DOMAIN}/api/addresses/`, newAddress);
        if (res?.data.success) {
            setMessage(res?.data.message);
            navigate("/dealstorm2/allset");
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
                        htmlFor="address"
                        className="timeline-content js--fadeInRight text-lg font-bold py-2 text-center mx-auto"
                    >What is your address?</label>
                        <input
                            type="text"
                            placeholder="Street Address e.g. 123 Sesame St"
                            className="py-2 px-2 rounded-xl outline-none w-[300px] mx-auto  "
                            name="street"
                            id="street"
                            required
                        />
                        <input
                            type="text"
                            placeholder="City"
                            className="py-2 px-2 my-2 rounded-xl outline-none w-[300px] mx-auto  "
                            name="city"
                            id="city"
                            required
                        />
                    <input
                            type="text"
                            placeholder="Province/State"
                            className="py-2 px-2 my-2 rounded-xl outline-none w-[300px] mx-auto  "
                            name="province"
                            id="province"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Postal Code"
                            className="py-2 px-2 my-2 rounded-xl outline-none w-[300px] mx-auto  "
                            name="postalcode"
                            id="postalcode"
                            required
                        />
                    <button
                        className="absolute bottom-20 right-10 bg-slate-700 border px-2 py-2 text-white rounded-3xl w-[100px] text-lg"
                    >Next</button>
                </form>
            </div>
        </main>
    )
}