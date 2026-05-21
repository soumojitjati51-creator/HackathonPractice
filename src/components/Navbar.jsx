function Navbar() {

  return (

    <nav
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        px-6
        py-5
      "
    >

      <div className="flex justify-between items-center w-full px-6 py-4 bg-white/10 border border-white/10 rounded-2xl backdrop-blur-md shadow-2xl">

        {/* LOGO */}

        <div>

          <h2 className="text-2xl font-bold text-sky-300">
            AI Career Mentor
          </h2>

        </div>

        {/* NAV LINKS */}

        <ul className="flex gap-6 text-white font-medium">

          <li>
            <a href="#home" className="hover:text-blue-400 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-blue-400 transition">
              About
            </a>
          </li>

          <li>
            <a href="#features" className="hover:text-blue-400 transition">
              Features
            </a>
          </li>

          <li>
            <a href="#login" className="hover:text-blue-400 transition">
              Login
            </a>
          </li>

          <li>

            <button className="bg-blue-500 px-4 py-2 rounded-xl hover:bg-blue-600 transition">

              Sign Up

            </button>

          </li>

        </ul>

      </div>

    </nav>

  )
}

export default Navbar