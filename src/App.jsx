// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Features from "./components/Features";
// import Login from "./components/Login";

// function App() {
//   return (

//     <div className="min-h-screen bg-slate-900 p-6">

//       <Navbar />
//       <Hero/>
//       <About />
//       <Features/>
//       <Login/>
//     </div>

//   )
// }

// export default App
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>

    </BrowserRouter>

  )
}

export default App