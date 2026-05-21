function Hero() {

  return (

    <section
      id="home"
      className="
        min-h-screen pt-32
        flex
        flex-col
        justify-center
        items-center
        px-[10%]
        text-center
        text-white
      "
    >

      {/* ================= TYPING HEADING ================= */}

      <div
        className="
          overflow-hidden
          whitespace-nowrap
          border-r-4
          border-sky-400
          text-5xl
          font-bold
          text-yellow-400
          w-0
          animate-typing
        "
      >

        Welcome! Shape Your Career with AI Assistance.

      </div>

      {/* ================= DESCRIPTION ================= */}

      <div
        className="
          mt-14
          max-w-5xl
          text-slate-300
          text-xl
          leading-9
          animate-fadeup
        "
      >

        <p>

          Personalized career guidance, skill analysis,
          and AI-powered learning roadmaps.

          Discover the perfect career path through
          <span className="text-sky-400 font-bold">
            {" "}AI-powered{" "}
          </span>

          skill analysis, personalized learning roadmaps,
          and intelligent mentorship.

        </p>

      </div>

      {/* ================= BUTTONS ================= */}

      <div
        className="
          flex
          flex-wrap
          justify-center
          gap-6
          mt-14
          animate-fadeup
        "
      >

        {/* PRIMARY BUTTON */}

        <button
          className="
            px-8
            py-4
            rounded-xl
            bg-sky-400
            text-white
            font-bold
            uppercase
            tracking-wide
            shadow-[0_18px_32px_rgba(22,142,163,0.3)]
            transition
            duration-300
            hover:-translate-y-1
            hover:scale-105
          "
        >

          Start Your Journey

        </button>

        {/* SECONDARY BUTTON */}

        <a
          href="#features"
          className="
            px-8
            py-4
            rounded-xl
            bg-red-500
            text-white
            font-bold
            uppercase
            tracking-wide
            shadow-[0_18px_32px_rgba(204,44,44,0.3)]
            transition
            duration-300
            hover:-translate-y-1
            hover:scale-105
          "
        >

          Explore Features

        </a>

      </div>

    </section>

  );
}

export default Hero;