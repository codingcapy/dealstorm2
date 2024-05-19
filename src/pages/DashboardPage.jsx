

export default function DashboardPage() {

    const restaurants = ["Freshii", "Chipotle", "Subway"];
    const groceryStores = ["Whole Foods", "IGA", "TNT", "Superstore", "Walmart"];

    return (
        <main className="flex-1 bg-emerald-100">
            <h2 className="text-2xl font-bold text-center py-2">
                My weekly budget:<span className="text-teal-600">$75</span>
            </h2>
            <div className="mx-auto w-[80%] bg-gray-400 py-1 my-2 rounded-full"></div>
            <div className="font-bold text-gray-500 text-center">
                0/<span className="text-teal-600">$75</span>
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
                        {
                            groceryStores.map((item) => (
                                <li className="py-4 border-t flex">
                                    <img
                                        src={`/${item}.svg`}
                                        alt=""
                                        className="w-[50px]"
                                    />{" "}
                                    <div className="pl-2 ">{item}</div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="flex flex-col">
                    <h3 className="text-3xl font-bold tracking-tighter">
                        Restaurants nearby
                    </h3>
                    <ul className="py-4">
                        {
                            restaurants.map((item) => (
                                <li className="py-4 border-t flex">
                                    <img
                                        src={`/${item}.svg`}
                                        alt=""
                                        className="w-[50px]"
                                    />{" "}
                                    <div className="pl-2 ">{item}</div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </main>
    )
}

