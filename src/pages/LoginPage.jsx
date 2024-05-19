

export default function LoginPage() {

    return (
        <main className="flex-1 mx-auto">
            <div className=" text-black flex flex-col mx-auto">
                <section className="max-w-[1000px] mx-auto py-5">
                    <h3 className="pl-2 text-5xl md:text-6xl py-5 text-center">Login</h3>
                    <p className="text-center md:text-lg">Login to take <span className="text-teal-600">full advantage</span>
                        of our <span className="text-teal-600">features</span></p>
                    <p className="text-center md:text-lg">as a member of <span className="text-teal-600">DealStorm</span></p>
                </section>
                <section className="py-10 md:pl-20 mx-auto">
                    <form action="#" className="flex flex-col mx-auto">
                        <div className="flex flex-col">
                            <label htmlFor="title">Email</label>
                            <input type="text" name='title' id='title' placeholder="Email" required
                                className="px-2 border rounded-lg border-slate-700 py-1 w-[300px]" />
                        </div>
                        <div className="flex flex-col my-2">
                            <label htmlFor="content">Password</label>
                            <input type="text" name='content' id='content' placeholder='Password' required rows="10"
                                cols="40" className="px-2 border rounded-lg border-slate-700 py-1 w-[300px]" />
                        </div>
                        <div className="flex flex-col my-2">
                            <label htmlFor="content">Confirm Password</label>
                            <input type="text" name='content' id='content' placeholder='Confirm Password' required
                                rows="10" cols="40" className="px-2 border rounded-lg border-slate-700 py-1 w-[300px]" />
                        </div>
                        <button
                            className="px-3 py-3 my-7 border-4 rounded border-yellow-300 text-yellow-300 font-bold md:text-2xl hover:bg-yellow-300 hover:text-black transition-all ease duration-500">Login</button>
                        <p className="text-lg text-center">New User? <a href="/signup"
                            className="text-teal-300 font-bold">Sign Up</a></p>
                        <p className="text-lg text-center">Forgot Password? <a href="#"
                            className="text-teal-300 font-bold">Recovery</a></p>
                    </form>
                </section>
            </div>
        </main>
    )
}