

export default function BudgetPage() {

    return (
        <main
            class="flex flex-col justify-center items-center h-screen bg-background"
        >
            <div>
                <form
                    action="/api/address"
                    method="POST"
                    class="flex flex-col mx-auto"
                >
                    <label
                        for="budget"
                        class="timeline-content js--fadeInRight text-lg font-bold py-2"
                    >What is your weekly budget?</label
                    >
                    <div class="px-2 rounded-2xl bg-white outline-none my-2 flex">
                        <div class="py-2">$</div>
                        <input
                            type="text"
                            placeholder="0.00"
                            class="py-2 px-2 rounded-xl outline-none"
                            name="budget"
                            id="budget"
                        />
                    </div>
                    <button
                        class="absolute bottom-20 right-10 bg-slate-700 border px-2 py-2 text-white rounded-3xl w-[100px] text-lg"
                    >Next</button
                    >
                </form>
            </div>
        </main>
    )
}