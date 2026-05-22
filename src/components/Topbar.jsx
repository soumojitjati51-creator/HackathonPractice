function Topbar() {
    return(

        <div
            className="
                w-full
                bg-white/10
                border
                border-white/10
                rounded-2xl
                p-5
                flex
                items-center
                justify-between
                mb-6
            "
        > 
            {/*Left Section*/}
            <div>
                <h1 className="text-3xl font-bold text-sky-300">Dashboard</h1>
                <p className="text-gray-300 mt-1">Welcome back</p>
            </div>
            {/*Right Section*/}
            <div className="flex items-center gap-4">
                {/*Searchbar */}
                <input
                    type="text"
                    placeholder="search.."
                    className="
                        px-4
                        px-3
                        rounded-xl
                        bg-white/10
                        outline-none
                        text-white
                        placeholder-gray-400
                    "
                />
                {/*notification button*/}
                <button
                    className="
                        w-12
                        h-12
                        rounded-xl
                        bg-white/10
                        hover:bg-white/10
                        transition
                        flex
                        items-center
                        justify-center
                        text-xl
                    "
                >
                    🔔
                </button>
            </div>


        </div>

    )
}

export default Topbar