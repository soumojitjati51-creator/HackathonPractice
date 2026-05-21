function About() {

  const teamMembers = [
    {
      name: "Avinish Kumar Tripathi",
      role: "Backend Developer",
      description:
        "Handles APIs, database, authentication and server logic.",
    },
    {
      name: "Soumojit Jati",
      role: "Frontend Developer",
      description:
        "Designs responsive UI using React and Tailwind CSS.",
    },

    
    {
      name: "Arindam Saha",
      role: "AI & Integration",
      description:
        "Works on AI integration, APIs and smart recommendation systems.",
    },

    {
      name: "Mahmadool Hassan",
      role: "Presentation & Data",
      description:
        "Handles documentation, PPT and data management.",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen px-[10%] py-24 text-white"
    >

      {/* Section Tag */}
      <p className="text-sky-400 text-sm tracking-widest mb-4">
        ABOUT PROJECT
      </p>

      {/* Heading */}
      <h1 className="text-5xl font-bold max-w-4xl leading-tight mb-8">
        AI Career Mentor for Smart Student Guidance
      </h1>

      {/* Description */}
      <p className="max-w-4xl text-slate-300 leading-8 text-lg mb-16">
        Our AI Career Mentor helps students discover career paths,
        improve skills, track progress and receive AI-powered
        recommendations based on their interests and strengths.
      </p>

      {/* About Cards */}
      <div className="flex flex-wrap justify-center gap-8 mb-24">

        {/* Card 1 */}
        <div className="w-[280px] p-8 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/10 transition duration-300 hover:-translate-y-3 hover:shadow-[0_0_25px_rgba(56,189,248,0.3)]">

          <h2 className="text-2xl font-bold text-sky-400 mb-4">
            Career Guidance
          </h2>

          <p className="text-slate-300 leading-7">
            Personalized AI suggestions to help students choose
            suitable career paths and technologies.
          </p>

        </div>

        {/* Card 2 */}
        <div className="w-[280px] p-8 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/10 transition duration-300 hover:-translate-y-3 hover:shadow-[0_0_25px_rgba(56,189,248,0.3)]">

          <h2 className="text-2xl font-bold text-sky-400 mb-4">
            Skill Tracking
          </h2>

          <p className="text-slate-300 leading-7">
            Students can monitor learning progress and identify
            important skills required for future goals.
          </p>

        </div>

        {/* Card 3 */}
        <div className="w-[280px] p-8 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/10 transition duration-300 hover:-translate-y-3 hover:shadow-[0_0_25px_rgba(56,189,248,0.3)]">

          <h2 className="text-2xl font-bold text-sky-400 mb-4">
            AI Recommendations
          </h2>

          <p className="text-slate-300 leading-7">
            Intelligent suggestions based on interests,
            strengths and learning performance.
          </p>

        </div>

      </div>

      {/* ================= TEAM SECTION ================= */}

      <div className="mt-10 text-center">

        <p className="text-sky-400 text-sm tracking-widest mb-4">
          OUR TEAM
        </p>

        <h1 className="text-5xl font-bold mb-16">
          Meet Our Team
        </h1>

      </div>

      {/* Team Cards */}
      <div className="flex flex-wrap justify-center gap-8">

        {teamMembers.map((member, index) => (

          <div
            key={index}
            className="w-[260px] p-8 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/10 transition duration-300 hover:-translate-y-3 hover:shadow-[0_0_25px_rgba(56,189,248,0.3)]"
          >

            {/* Profile Circle */}
            <div className="w-24 h-24 rounded-full bg-sky-400 mx-auto mb-6 flex items-center justify-center text-3xl font-bold text-slate-900">
              {member.name.charAt(0)}
            </div>

            {/* Name */}
            <h2 className="text-2xl font-bold text-center text-sky-300 mb-2">
              {member.name}
            </h2>

            {/* Role */}
            <p className="text-center text-slate-400 mb-4">
              {member.role}
            </p>

            {/* Description */}
            <p className="text-slate-300 text-center leading-7">
              {member.description}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default About;