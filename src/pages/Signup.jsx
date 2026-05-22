function Signup() {

  return (

    <section
      id="signup"
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

      {/* BACKGROUND GLOW EFFECTS */}

      <div className="absolute w-72 h-72 bg-sky-500/20 blur-3xl rounded-full top-10 left-10"></div>

      <div className="absolute w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full bottom-10 right-10"></div>

      {/* ================= SIGNUP CARD ================= */}

      <div
        className="
          relative
          z-10
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
            Create Account
          </h1>

          <p className="text-slate-300">
            Start your AI-powered career journey today.
          </p>

        </div>

        {/* FORM */}

        <form className="flex flex-col gap-6">

          {/* FULL NAME */}

          <div>

            <label className="block mb-2 text-slate-300">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
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

          {/* EMAIL */}

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

          {/* PASSWORD */}

          <div>

            <label className="block mb-2 text-slate-300">
              Password
            </label>

            <input
              type="password"
              placeholder="Create password"
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

          {/* CONFIRM PASSWORD */}

          <div>

            <label className="block mb-2 text-slate-300">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm password"
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

          {/* TERMS */}

          <label className="flex items-center gap-3 text-slate-300 text-sm">

            <input type="checkbox" />

            I agree to the Terms & Conditions

          </label>

          {/* SIGNUP BUTTON */}

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

            Create Account

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

        {/* GOOGLE BUTTON */}

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

        {/* LOGIN REDIRECT */}

        <p className="text-center text-slate-400 mt-8">

          Already have an account?

          <a
            href="/login"
            className="text-sky-400 ml-2 hover:text-sky-300 transition"
          >

            Login

          </a>

        </p>

      </div>

    </section>

  )
}

export default Signup