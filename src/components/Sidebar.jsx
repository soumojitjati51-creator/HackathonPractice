function Sidebar() {

    return (

        <div
            className="
                w-72
                min-h-screen
                bg-white/10
                backdrop-blur-lg
                border-r
                border-white/10
                p-6
                text-white
                flex
                flex-col
                justify-between
            "
        >

            {/* ================= TOP SECTION ================= */}

            <div>

                {/* LOGO */}

                <h1 className="text-3xl font-bold text-sky-300 mb-10">

                    AI Mentor

                </h1>

                {/* MENU */}

                <ul className="space-y-4">

                    <li
                        className="
                            hover:bg-white/10
                            transition
                            p-4
                            rounded-xl
                            cursor-pointer
                        "
                    >
                        AI Chat
                    </li>

                    <li
                        className="
                            hover:bg-white/10
                            transition
                            p-4
                            rounded-xl
                            cursor-pointer
                        "
                    >
                        Career Roadmap
                    </li>

                    <li
                        className="
                            hover:bg-white/10
                            transition
                            p-4
                            rounded-xl
                            cursor-pointer
                        "
                    >
                        Resume Analyzer
                    </li>

                    <li
                        className="
                            hover:bg-white/10
                            transition
                            p-4
                            rounded-xl
                            cursor-pointer
                        "
                    >
                        Progress Tracker
                    </li>

                    <li
                        className="
                            hover:bg-white/10
                            transition
                            p-4
                            rounded-xl
                            cursor-pointer
                        "
                    >
                        Settings
                    </li>

                </ul>

            </div>

            {/* ================= BOTTOM PROFILE ================= */}

            <div
                className="
                    bg-white/10
                    p-4
                    rounded-2xl
                    border
                    border-white/10
                "
            >

                <h2 className="text-lg font-semibold">

                    Soumojit

                </h2>

                <p className="text-sm text-gray-300 mt-1">

                    Frontend Developer

                </p>

            </div>

        </div>

    )
}

export default Sidebar