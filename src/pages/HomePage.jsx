import { NavLink } from "react-router-dom";


export default function HomePage() {


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
            <NavLink to="/dealstorm2/login" className="flex flex-col mx-auto text-center py-2 my-5 text-white bg-teal-600 w-[200px] text-2xl rounded-3xl">Login</NavLink>
            <div className="text-center">New user? <NavLink to="/dealstorm2/signup" className="text-teal-600 font-bold">Sign up</NavLink></div>
        </main>
    )
}