function Features() {

  const features = [

    {
      title: "AI Career Recommendations",
      description:
        "Receive intelligent career suggestions based on your skills, interests, strengths and learning preferences.",
      icon: "🤖",
    },

    {
      title: "Personalized Learning Roadmaps",
      description:
        "Generate structured learning paths and technology roadmaps to achieve career goals efficiently.",
      icon: "🛣️",
    },

    {
      title: "Skill Gap Analysis",
      description:
        "Identify missing skills and receive smart recommendations to improve future career readiness.",
      icon: "📊",
    },

    {
      title: "Resume & Portfolio Guidance",
      description:
        "Improve resumes, portfolios and professional profiles using AI-powered feedback and suggestions.",
      icon: "📄",
    },

    {
      title: "Progress Tracking Dashboard",
      description:
        "Track learning growth, completed milestones and overall skill development through analytics.",
      icon: "📈",
    },

    {
      title: "Future Expansion Ready",
      description:
        "Designed with scalable architecture for future AI integrations, mentorship systems and analytics.",
      icon: "⚡",
    },

  ];

  return (

    <section
      id="features"
      className="min-h-screen px-[10%] py-24 text-white"
    >

      {/* ================= HEADING SECTION ================= */}

      <div className="text-center mb-20">

        <p className="text-sky-400 tracking-[4px] text-sm mb-4">
          FEATURES
        </p>

        <h1 className="text-5xl font-bold mb-6 leading-tight">
          Smart AI Features Designed For Future Innovators
        </h1>

        <p className="max-w-3xl mx-auto text-slate-300 leading-8 text-lg">

          Explore intelligent AI-powered tools designed to guide
          students, analyze skills, recommend career paths and
          support future-ready learning experiences.

        </p>

      </div>

      {/* ================= FEATURE CARDS ================= */}

      <div className="flex flex-wrap justify-center gap-8">

        {features.map((feature, index) => (

          <div
            key={index}
            className="
              w-[300px]
              p-8
              rounded-3xl
              bg-white/10
              backdrop-blur-lg
              border border-white/10
              transition duration-300
              hover:-translate-y-3
              hover:shadow-[0_0_25px_rgba(56,189,248,0.3)]
            "
          >

            {/* ICON */}

            <div className="text-5xl mb-6">
              {feature.icon}
            </div>

            {/* TITLE */}

            <h2 className="text-2xl font-bold text-sky-400 mb-4">
              {feature.title}
            </h2>

            {/* DESCRIPTION */}

            <p className="text-slate-300 leading-7">
              {feature.description}
            </p>

          </div>

        ))}

      </div>

    </section>

  );
}

export default Features;