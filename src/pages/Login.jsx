function Login() {

    return (

        <section
            id="login"
            className="
    min-h-screen
    flex
    justify-center
    items-center
    px-6
    py-24
    text-white
    bg-gradient-to-br
    from-slate-900
    via-slate-800
    to-indigo-900
    relative
    overflow-hidden
  "
        >

            {/* ================= LOGIN CARD ================= */}

            <div
                className="
          w-full
          max-w-md
          p-10
          rounded-3xl
          bg-white/10
          backdrop-blur-lg
          border border-white/10
          shadow-2xl
        "
            >

                {/* HEADING */}

                <div className="text-center mb-10">

                    <h1 className="text-4xl font-bold text-sky-400 mb-3">
                        Welcome Back
                    </h1>

                    <p className="text-slate-300">
                        Login to continue your AI career journey.
                    </p>

                </div>

                {/* FORM */}

                <form className="flex flex-col gap-6">

                    {/* EMAIL INPUT */}

                    <div>

                        <label className="block mb-2 text-slate-300">
                            Email Address
                        </label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="
                w-full
                px-5
                py-4
                rounded-xl
                bg-white/10
                border border-white/10
                outline-none
                text-white
                placeholder-slate-400
                focus:border-sky-400
                transition
              "
                        />

                    </div>

                    {/* PASSWORD INPUT */}

                    <div>

                        <label className="block mb-2 text-slate-300">
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="
                w-full
                px-5
                py-4
                rounded-xl
                bg-white/10
                border border-white/10
                outline-none
                text-white
                placeholder-slate-400
                focus:border-sky-400
                transition
              "
                        />

                    </div>

                    {/* REMEMBER + FORGOT */}

                    <div className="flex justify-between items-center text-sm">

                        <label className="flex items-center gap-2 text-slate-300">

                            <input type="checkbox" />

                            Remember Me

                        </label>

                        <a
                            href="#"
                            className="text-sky-400 hover:text-sky-300 transition"
                        >

                            Forgot Password?

                        </a>

                    </div>

                    {/* LOGIN BUTTON */}

                    <button
                        className="
              w-full
              py-4
              rounded-xl
              bg-sky-500
              hover:bg-sky-600
              transition
              font-bold
              tracking-wide
              uppercase
              shadow-[0_15px_30px_rgba(56,189,248,0.3)]
            "
                    >

                        Login

                    </button>

                </form>

                {/* DIVIDER */}

                <div className="flex items-center my-8">

                    <div className="flex-1 h-[1px] bg-white/10"></div>

                    <span className="px-4 text-slate-400 text-sm">
                        OR
                    </span>

                    <div className="flex-1 h-[1px] bg-white/10"></div>

                </div>

                {/* GOOGLE LOGIN */}

                <button
                    className="
            w-full
            py-4
            rounded-xl
            bg-white/10
            hover:bg-white/20
            transition
            border border-white/10
            font-semibold
          "
                >

                    Continue with Google

                </button>

                {/* SIGNUP TEXT */}

                <p className="text-center text-slate-400 mt-8">

                    Don't have an account?

                    <a
                        href="#"
                        className="text-sky-400 ml-2 hover:text-sky-300 transition"
                    >

                        Sign Up

                    </a>

                </p>

            </div>

        </section>

    )
}

export default Login