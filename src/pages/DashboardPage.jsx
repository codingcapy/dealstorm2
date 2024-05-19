

import { useState, useEffect } from "react";
import axios from "axios";
import DOMAIN from "../services/endpoint";
import useAuthStore from "../store/AuthStore";
import wholefoods from "/Whole Foods.svg";
import iga from "/IGA.svg";
import tnt from "/TNT.svg";
import superstore from "/Superstore.svg"
import walmart from "/Walmart.svg"
import freshii from "/Freshii.sv"
import chipotle from "/Chipotle.svg"
import subway from "/Subway.svg"

export default function DashboardPage() {

    const restaurants = ["Freshii", "Chipotle", "Subway"];
    const groceryStores = ["Whole Foods", "IGA", "TNT", "Superstore", "Walmart"];
    const [budget, setBudget] = useState(0)
    const { loginService, authLoading, user } = useAuthStore((state) => state);

    useEffect(() => {
        async function getBudget() {
            const res = await axios.get(`${DOMAIN}/api/budgets/${user.user_id}`)
            console.log(res)
            setBudget(res.data.value)
        }
        getBudget()
    }, [])

    return (
        <main className="flex-1 bg-emerald-100">
            <h2 className="text-2xl font-bold text-center py-2">
                My weekly budget:<span className="text-teal-600">${budget}</span>
            </h2>
            <div className="mx-auto w-[80%] bg-gray-400 py-1 my-2 rounded-full"></div>
            <div className="font-bold text-gray-500 text-center">
                0/<span className="text-teal-600">${budget}</span>
            </div>
            <button className="flex flex-col bg-white mx-auto py-1 my-7 px-4 rounded-xl outline-none w-[90%] text-xl text-center text-gray-600">
                Search for an ingredient!
            </button>
            <div className="flex gap-8 flex-col sm:flex-row px-1">
                <div>
                    <h3 className="text-3xl font-bold tracking-tighter">
                        Grocery Stores nearby
                    </h3>
                    <ul className="py-4">
                        <li className="py-4 border-t flex">
                            <img
                                src={wholefoods}
                                alt=""
                                className="w-[50px]"
                            />
                            <div className="pl-2 ">Whole Foods</div>
                        </li>
                        <li className="py-4 border-t flex">
                            <img
                                src={iga}
                                alt=""
                                className="w-[50px]"
                            />
                            <div className="pl-2 ">IGA</div>
                        </li>
                        <li className="py-4 border-t flex">
                            <img
                                src={tnt}
                                alt=""
                                className="w-[50px]"
                            />
                            <div className="pl-2 ">T&T</div>
                        </li>
                        <li className="py-4 border-t flex">
                            <img
                                src={superstore}
                                alt=""
                                className="w-[50px]"
                            />
                            <div className="pl-2 ">Superstore</div>
                        </li>
                        <li className="py-4 border-t flex">
                            <img
                                src={walmart}
                                alt=""
                                className="w-[50px]"
                            />
                            <div className="pl-2 ">Walmart</div>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col">
                    <h3 className="text-3xl font-bold tracking-tighter">
                        Restaurants nearby
                    </h3>
                    <ul className="py-4">
                        <li className="py-4 border-t flex" key={item}>
                            <img
                                src={freshii}
                                alt=""
                                className="w-[50px]"
                            />{" "}
                            <div className="pl-2 ">Freshii</div>
                        </li>
                        <li className="py-4 border-t flex" key={item}>
                            <img
                                src={chipotle}
                                alt=""
                                className="w-[50px]"
                            />{" "}
                            <div className="pl-2 ">Chipotle</div>
                        </li>
                        <li className="py-4 border-t flex" key={item}>
                            <img
                                src={subway}
                                alt=""
                                className="w-[50px]"
                            />{" "}
                            <div className="pl-2 ">Subway</div>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    )
}

