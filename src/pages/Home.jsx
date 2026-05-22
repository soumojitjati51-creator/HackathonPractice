import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";

function Home() {

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900">

      <Navbar />

      <Hero />

      <About />

      <Features />

    </div>

  )
}

export default Home