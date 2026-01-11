import { useState } from "react";
import { motion } from "framer-motion";

const PROFILE = {
  name: "Zainab Azeem",
  title: "Full Stack Developer · SQA Engineer",
  summary:
    "Full-Stack Web Developer (MERN | Next.js) with hands-on experience building and maintaining production web applications. Skilled in React, Node.js, Python (Flask), and MongoDB, with a focus on feature development, API integration, and performance improvement.",
  email: "zazeem159@gmail.com",
  location: "Pakistan",
  links: {
    linkedin: "https://www.linkedin.com/in/zainab-azeem-43a66124a/",
    github: "https://github.com/Zainab-Azeem",
    resume: "/Zainab_CV.pdf",
  },
};

const SKILLS = [
  "Python",
  "C++",
  "JavaScript (ES6+)",
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "SQL",
  "HTML5/CSS3",
  "Tailwind CSS",
  "REST APIs",
  "Git & GitHub",
  "JIRA",
  "SQA/Testing",
];

const PROJECTS = [
  {
    title: "TrackMate – Smart Stick",
    desc: "IoT navigation aid using Arduino, ultrasonic & moisture sensors to detect obstacles, stairs, and water.",
    stack: ["Arduino", "C/C++", "Sensors"],
    code: null,
    live: null,
  },
  {
    title: "Mood Journal App (MERN)",
    desc: "Journal moods with notes and timeline view. CRUD, responsive UI, and simple auth baseline.",
    stack: ["MongoDB", "Express", "React", "Node"],
    code: "https://github.com/Zainab-Azeem/Mood-Journal-MERN-App",
    live: null,
  },
  {
    title: "TaskFlow",
    desc: "A simple and interactive Task Management React App to help you stay organized and track your tasks efficiently.",
    stack: ["React.js", "Tailwind CSS"],
    code: "https://github.com/Zainab-Azeem/TaskFlow",
    live: null,
  },
  {
    title: "Tour & Travel Management",
    desc: "Dynamic PHP portal to manage tours, bookings, and customer queries.",
    stack: ["PHP", "MySQL", "HTML", "CSS"],
    code: "https://github.com/Zainab-Azeem/Tour-and-Travel-Management-system",
    live: null,
  },
  {
    title: "Resume Optimization & Job Insights",
    desc: "Python/ML scripts to analyze resumes, identify skill gaps, and visualize job trends.",
    stack: ["Python", "Pandas", "scikit-learn"],
    code: "https://github.com/Zainab-Azeem/Resume-Optimizer",
    live: null,
  },
];

const EXPERIENCE = [
  {
    role: "Full-Stack Web Developer (Remote)",
    org: "Veritas Accounting & Tax Consultants (Canada)",
    period: "Dec 2025 – Present",
    points: [
      "Built and maintained full-stack features using Next.js.",
      "Developed backend APIs using Python (Flask) and supported frontend–backend data flow.",
      "Handled forms, validations, bug fixes, and improved application performance.",
    ],
  },
  {
    role: "MERN Stack Developer",
    org: "E-Digital Pakistan",
    period: "Nov 2025 – Present",
    points: [
      "Selected for a PSEB-supported apprenticeship program",
      "Working as a MERN stack full-stack developer",
      "Gaining hands-on experience with React.js, Node.js, Express.js, and MongoDB",
    ],
  },
  {
    role: "Web Developer",
    org: "The Korn",
    period: "Oct 2025",
    points: [
      "Designed and deployed a production website used by a real business, including responsive UI, domain hosting, and post-deployment updates.",
      "Managed custom domain deployment and handled post-deployment updates.",
    ],
    live: "https://thekorn.com.pk/",
  },

  {
    role: "Software Quality Assurance Engineer",
    org: "Productbox",
    period: "Mar 2025 – Aug 2025",
    points: [
      "Tested features end-to-end, raised & tracked bugs, improved UI/UX consistency.",
      "Wrote user stories and managed tasks in JIRA.",
    ],
  },
  {
    role: "Teaching Assistant (SE & Automata)",
    org: "FAST NUCES",
    period: "Aug 2024 – Jun 2025",
    points: [
      "Guided students, designed rubrics, and evaluated assignments & labs.",
      "Held office hours to clarify core CS concepts.",
    ],
  },
];

const ACHIEVEMENTS = [
  "Dean’s List of Honor (×5) & Silver Medals (4th–8th semesters)",
  "2nd place – FAST Problem-Solving Challenge (2024)",
  "ICPC Asia Topi participant (2023 & 2024)",
  "GDSC Team Member; completed 15-day Flutter program",
];

// ---------- UI Helpers ----------
function SectionTitle({ children }) {
  return (
    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-8">
      {children}
    </h2>
  );
}

function Chip({ label }) {
  return (
    <span className="inline-block rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-center">
      {label}
    </span>
  );
}

function Card({ children }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm hover:shadow-lg transition">
      {children}
    </div>
  );
}

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5 },
};

// ---------- MAIN ----------
export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-black text-slate-100 transition-all duration-300">
      {/* Navbar */}
      <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3 ">
          <a href="#home" className="text-lg font-semibold tracking-tight">
            {PROFILE.name}
          </a>

          {/* Hamburger for mobile */}
          <button
            className="text-2xl sm:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          {/* Menu */}
          <ul
            className={`${
              menuOpen ? "block" : "hidden"
            } sm:flex gap-6 text-center sm:text-left absolute sm:static top-14 left-0 w-full sm:w-auto bg-slate-950 sm:bg-transparent border-t sm:border-none border-white/10 sm:mt-0 mt-2 sm:p-0 p-4`}
          >
            <li>
              <a
                href="#about"
                className="block py-2 sm:py-0 hover:text-fuchsia-400"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="block py-2 sm:py-0 hover:text-fuchsia-400"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block py-2 sm:py-0 hover:text-fuchsia-400"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="block py-2 sm:py-0 hover:text-fuchsia-400"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 sm:py-0 hover:text-fuchsia-400"
              >
                Contact
              </a>
            </li>
            <li className="mt-3 sm:hidden">
              <a
                href={PROFILE.links.resume}
                className="block rounded-xl bg-fuchsia-600 px-4 py-2 text-sm font-semibold hover:bg-fuchsia-500"
                target="_blank"
              >
                Resume
              </a>
            </li>
          </ul>

          <a
            href={PROFILE.links.resume}
            className="hidden sm:inline rounded-xl bg-fuchsia-600 px-4 py-2 text-sm font-semibold hover:bg-fuchsia-500"
            target="_blank"
          >
            Resume
          </a>
        </nav>
      </header>

      {/* profile */}
      <section
        id="home"
        className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8
             pt-20 sm:pt-28
             pb-[20px]
             text-center"
      >
        <motion.div {...fadeUp}>
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-fuchsia-300/80">
            Full Stack · MERN · QA
          </p>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Hi, I’m {PROFILE.name}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-slate-300">
            {PROFILE.summary}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#projects"
              className="rounded-xl bg-fuchsia-600 px-5 py-3 font-semibold hover:bg-fuchsia-500"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-white/15 px-5 py-3 font-semibold hover:bg-white/10"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-3 text-slate-400 text-sm sm:text-base">
            <span>{PROFILE.location}</span>
            <div className="flex gap-4">
              <a
                className="underline-offset-4 hover:underline"
                href={PROFILE.links.linkedin}
                target="_blank"
              >
                LinkedIn
              </a>
              <a
                className="underline-offset-4 hover:underline"
                href={PROFILE.links.github}
                target="_blank"
              >
                GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* About */}
      <section
        id="about"
        className="mx-auto max-w-6xl px-3 sm:px-6 lg:px-8 py-16"
      >
        <motion.div {...fadeUp}>
          <SectionTitle>About</SectionTitle>
          <p className="max-w-3xl mx-auto text-slate-300 text-center leading-relaxed">
            I’m a Computer Science graduate from FAST NUCES with hands-on
            experience in full-stack web development and software quality
            assurance. I enjoy turning ideas into clean, accessible, and
            production-ready applications, and I’ve worked with React, Next.js,
            Node.js, and modern development workflows on real-world projects.
          </p>
        </motion.div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16"
      >
        <motion.div {...fadeUp}>
          <SectionTitle>Skills</SectionTitle>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
            {SKILLS.map((s) => (
              <Chip key={s} label={s} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16"
      >
        <motion.div {...fadeUp}>
          <SectionTitle>Projects</SectionTitle>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((p) => (
              <Card key={p.title}>
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-slate-300 text-sm sm:text-base">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-white/10 px-2 py-1 text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex gap-3">
                  {p.code && (
                    <a
                      className="text-sm underline underline-offset-4 hover:text-fuchsia-300"
                      href={p.code}
                      target="_blank"
                    >
                      Code
                    </a>
                  )}
                  {p.live && (
                    <a
                      className="text-sm underline underline-offset-4 hover:text-fuchsia-300"
                      href={p.live}
                      target="_blank"
                    >
                      Live
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16"
      >
        <motion.div {...fadeUp}>
          <SectionTitle>Experience</SectionTitle>
          <div className="grid gap-6 md:grid-cols-2">
            {EXPERIENCE.map((e) => (
              <Card key={e.role + e.org}>
                <h3 className="text-lg font-semibold">
                  {e.role} · <span className="opacity-80">{e.org}</span>
                </h3>
                <p className="mt-1 text-sm text-slate-400">{e.period}</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300 text-sm sm:text-base">
                  {e.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
                {e.live && (
                  <a
                    href={e.live}
                    target="_blank"
                    className="mt-3 inline-flex items-center gap-1 text-sm font-semibold hover:text-fuchsia-300"
                  >
                    🔗
                    <span className="underline underline-offset-4">LIVE</span>
                  </a>
                )}
              </Card>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Achievements */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <motion.div {...fadeUp}>
          <SectionTitle>Achievements</SectionTitle>
          <ul className="list-disc space-y-2 pl-5 text-slate-300 max-w-3xl mx-auto text-sm sm:text-base">
            {ACHIEVEMENTS.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 text-center"
      >
        <motion.div {...fadeUp}>
          <SectionTitle>Contact</SectionTitle>
          <p className="mt-4 text-slate-300 text-sm sm:text-base">
            I’m open to full-time roles and freelance work. Let’s build
            something great together.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${PROFILE.email}`}
              className="rounded-xl bg-fuchsia-600 px-5 py-3 font-semibold hover:bg-fuchsia-500"
            >
              Email Me
            </a>
            <a
              className="rounded-xl border border-white/15 px-5 py-3 font-semibold hover:bg-white/10"
              href={PROFILE.links.linkedin}
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              className="rounded-xl border border-white/15 px-5 py-3 font-semibold hover:bg-white/10"
              href={PROFILE.links.github}
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </section>

      <footer className="border-t border-white/10 py-10 text-center text-sm text-slate-400">
        © 2025 {PROFILE.name}.
      </footer>
    </div>
  );
}
