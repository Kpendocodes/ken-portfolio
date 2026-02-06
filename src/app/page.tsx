import Image from "next/image";

const socials = {
  github: "https://github.com/Kpendocodes",
  linkedin: "https://www.linkedin.com/in/kenneth-oluoch-2ab634380",
  email: "mailto:Kmpoluoch@gmail.com",
  instagram: "https://instagram.com/mosespendo_",
};

const projects = [
  {
    title: "Smart Driver Scoring App",
    desc: "Monitoring + feedback system that tracks driving behavior and turns it into actionable safety insights. I contributed heavily across core features and UI.",
    tags: ["Telemetry", "Analytics", "Dashboard UI"],
    links: { code: "https://github.com/johannTom/Group2F25" },
    images: [
      {
        src: "/projects/smart-driving/login.jpeg",
        alt: "Smart Driving login screen",
      },
      {
        src: "/projects/smart-driving/children.jpeg",
        alt: "Manage children screen",
      },
      {
        src: "/projects/smart-driving/child-dashboard.jpeg",
        alt: "Child dashboard screen",
      },
      {
        src: "/projects/smart-driving/driver-dashboard.jpeg",
        alt: "Driver dashboard screen",
      },
    ],
  },
  {
    title: "SendHome — Mock Money Transfer App",
    desc: "A clean money transfer flow: balances, transactions, and modern UX for sending/receiving money.",
    tags: ["Product Flow", "State + Forms", "UI Polish"],
    links: { code: "https://github.com/Kpendocodes/sendhome" },
    images: [
      {
        src: "/projects/sendhome/wallet.jpeg",
        alt: "SendHome wallet screen",
      },
      {
        src: "/projects/sendhome/transactions.jpeg",
        alt: "SendHome transactions screen",
      },
    ],
  },
  {
    title: "Fizz — Pomodoro Timer",
    desc: "Minimal focus timer designed to keep you consistent: sessions, breaks, and smooth interactions.",
    tags: ["Timers", "UX", "Frontend"],
    links: {
      code: "https://github.com/Kpendocodes/Fizz",
      live: "https://fizz-navy.vercel.app/",
    },
    images: [
      {
        src: "/projects/fizz/screen.png",
        alt: "Fizz pomodoro timer screen",
      },
    ],
  },
];

const tools = [
  "React / Next.js",
  "TypeScript",
  "Tailwind CSS",
  "JavaScript",
  "Python",
  "C#",
  "C++",
  "Java",
  "Git + GitHub",
  "Debugging",
  "OOP + clean structure",
  "Full-stack Development",
  "Front-end Development",
  "Performance Load Testing",
  "Figma",
  "Wireshark",
  "User Experience",
];

const experience = [
  {
    role: "BASc Computer Science (Honours) (Co-op)",
    org: "Canada",
    date: "Present",
    bullets: [
      "Building full-stack and systems-flavored projects with a focus on clean architecture.",
      "Strong interest in practical monitoring/analytics and product-quality UI.",
    ],
  },
  {
    role: "Team Projects",
    org: "Class / Personal",
    date: "Ongoing",
    bullets: [
      "Shipped multiple projects end-to-end (planning → build → test → polish).",
      "Comfortable breaking code into classes/modules for maintainability.",
    ],
  },
];

function cn(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-zinc-800 bg-zinc-950/40 px-3 py-1 text-xs text-zinc-300">
      {children}
    </span>
  );
}

function SectionHeading({
  title,
  desc,
}: {
  title: string;
  desc?: string;
}) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
        {title}
      </h2>
      {desc ? <p className="mt-2 text-zinc-400">{desc}</p> : null}
    </div>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-red-500/30">
      {/* Background: subtle red glow */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-28 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-red-600/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-red-600/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,0,0,0.12),transparent_55%)]" />
      </div>

      {/* Top Nav */}
      <header className="sticky top-0 z-20 border-b border-zinc-800/60 bg-zinc-950/70 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-red-500 shadow-[0_0_18px_rgba(239,68,68,0.8)]" />
            <span className="text-sm tracking-wide text-zinc-200">
              Kenneth Oluoch
            </span>
          </a>

          <div className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
            <a className="hover:text-white" href="#projects">
              Projects
            </a>
            <a className="hover:text-white" href="#experience">
              Experience
            </a>
            <a className="hover:text-white" href="#tools">
              Tools
            </a>
            <a className="hover:text-white" href="#resume">
              Resume
            </a>
            <a className="hover:text-white" href="#contact">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm text-red-200 shadow-[0_0_25px_rgba(239,68,68,0.15)] transition hover:bg-red-500/15 hover:text-red-100"
          >
            Let’s talk
          </a>
        </nav>
      </header>

      <main className="relative mx-auto max-w-6xl px-6">
        {/* Hero / Above the fold (Sawad-ish split) */}
        <section className="py-10 md:py-16">
          <div className="grid gap-6 md:grid-cols-[360px_1fr] md:gap-10">
            {/* Left Profile Card */}
            <aside className="rounded-3xl border border-zinc-800 bg-zinc-900/20 p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs text-zinc-400">Profile</p>
                  <h1 className="mt-2 text-xl font-semibold tracking-tight">
                    Kenneth Oluoch
                  </h1>
                  <p className="mt-1 text-sm text-zinc-300">
                    CS (Honours) • Software Developer
                  </p>
                </div>
              </div>

              <div className="mt-4 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/30">
                <Image
                  src="/images/professional-shot.png"
                  alt="Professional portrait of Kenneth Oluoch"
                  width={360}
                  height={192}
                  className="h-56 w-full object-cover object-[50%_30%]"
                  priority
                />
              </div>

              <div className="mt-5 space-y-3 text-sm text-zinc-300">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-zinc-400">Location</span>
                  <span>Canada</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-zinc-400">Focus</span>
                  <span>Systems + UX</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-zinc-400">Currently</span>
                  <span>Building + learning</span>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full rounded-2xl border border-zinc-800 bg-zinc-950/30 px-4 py-3 text-center text-sm text-zinc-200 transition hover:border-red-500/40"
                >
                  GitHub
                </a>
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full rounded-2xl border border-zinc-800 bg-zinc-950/30 px-4 py-3 text-center text-sm text-zinc-200 transition hover:border-red-500/40"
                >
                  LinkedIn
                </a>
                <a
                  href={socials.email}
                  className="w-full rounded-2xl bg-red-500 px-4 py-3 text-center text-sm font-medium text-zinc-950 shadow-[0_0_25px_rgba(239,68,68,0.35)] transition hover:brightness-110"
                >
                  Email me
                </a>
              </div>

              <p className="mt-6 text-xs leading-relaxed text-zinc-400">
                I build software that feels fast, looks clean, and stays readable.
                Big on structure (OOP), clean abstractions, and real features.
              </p>
            </aside>

            {/* Right Hero Type */}
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/10 p-6 md:p-8">
              <p className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/30 px-4 py-2 text-xs text-zinc-300">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                Available for internships + collaborations
              </p>

              <h2 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
                Building{" "}
                <span className="text-red-400 drop-shadow-[0_0_18px_rgba(239,68,68,0.25)]">
                  bold
                </span>{" "}
                products with{" "}
                <span className="text-zinc-200">systems discipline</span>.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-300 md:text-lg">
                Eager to learn, I care about clear communication and building with
                intention.
              </p>

              {/* Stats row */}
              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {[
                  { k: "Featured", v: "3 projects" },
                  { k: "Strength", v: "OOP + structure" },
                  { k: "Style", v: "Dark + red accent" },
                ].map((s) => (
                  <div
                    key={s.k}
                    className="rounded-2xl border border-zinc-800 bg-zinc-950/20 p-4"
                  >
                    <p className="text-xs text-zinc-400">{s.k}</p>
                    <p className="mt-1 text-sm text-zinc-200">{s.v}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="rounded-full bg-red-500 px-5 py-2.5 text-sm font-medium text-zinc-950 shadow-[0_0_25px_rgba(239,68,68,0.35)] transition hover:brightness-110"
                >
                  View projects
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-zinc-800 bg-zinc-950/20 px-5 py-2.5 text-sm text-zinc-200 transition hover:border-red-500/40"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-14">
          <SectionHeading
            title="Recent projects"
            desc="Three builds that show range: monitoring, product flow, and focus tooling."
          />

          <div className="grid gap-4">
            {projects.map((p) => (
              <article
                key={p.title}
                className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/20 p-6 transition hover:border-red-500/40 hover:bg-zinc-900/30"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                  <div className="absolute -top-24 left-16 h-56 w-56 rounded-full bg-red-500/15 blur-3xl" />
                  <div className="absolute -bottom-24 right-8 h-56 w-56 rounded-full bg-red-500/10 blur-3xl" />
                </div>

                <div className="relative">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                        {p.title}
                      </h3>
                      <p className="mt-2 max-w-3xl text-zinc-300">{p.desc}</p>
                    </div>

                    <div className="flex gap-2">
                      <a
                        href={p.links.code}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-zinc-800 bg-zinc-950/20 px-4 py-2 text-sm text-zinc-200 transition hover:border-red-500/40"
                      >
                        Code
                      </a>
                      {p.links.live ? (
                        <a
                          href={p.links.live}
                          className="rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm text-red-200 transition hover:bg-red-500/15"
                        >
                          Live
                        </a>
                      ) : null}
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Pill key={t}>{t}</Pill>
                    ))}
                  </div>

                  {p.images ? (
                    <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                      {p.images.map((img) => (
                        <div
                          key={img.src}
                          className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/20"
                        >
                          <img
                            src={img.src}
                            alt={img.alt}
                            className="h-full w-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </div>

        </section>

        {/* Experience */}
        <section id="experience" className="py-14">
          <SectionHeading
            title="Experience"
            desc="What I’ve been doing — condensed and clean."
          />

          <div className="grid gap-4 md:grid-cols-2">
            {experience.map((e) => (
              <div
                key={e.role}
                className="rounded-3xl border border-zinc-800 bg-zinc-900/20 p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-medium text-zinc-100">{e.role}</p>
                    <p className="mt-1 text-sm text-zinc-400">{e.org}</p>
                  </div>
                  <span className="rounded-full border border-zinc-800 bg-zinc-950/40 px-3 py-1 text-xs text-zinc-300">
                    {e.date}
                  </span>
                </div>

                <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                  {e.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-red-500/90" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Tools */}
        <section id="tools" className="py-14">
          <SectionHeading title="Tools" desc="What I use to build and ship." />

          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {tools.map((t) => (
              <div
                key={t}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-4 text-sm text-zinc-200 transition hover:border-red-500/40"
              >
                {t}
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="resume" className="py-14">
          <SectionHeading
            title="Resume"
            desc="PDF preview and download."
          />

          <div className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/20 p-6 transition hover:border-red-500/40 hover:bg-zinc-900/30">
            <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
              <div className="absolute -top-24 left-16 h-56 w-56 rounded-full bg-red-500/15 blur-3xl" />
              <div className="absolute -bottom-24 right-8 h-56 w-56 rounded-full bg-red-500/10 blur-3xl" />
            </div>

            <p className="relative mb-4 text-sm text-zinc-300">
              Snapshot of my experience, projects, and skills in a clean one-pager.
            </p>

            <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/20">
              <iframe
                title="Kenneth Oluoch Resume"
                src="/resume.pdf"
                className="h-[520px] w-full"
              />
            </div>

            <div className="relative mt-4 flex flex-wrap gap-3">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2.5 text-sm text-red-200 transition hover:bg-red-500/15"
              >
                View / Download Resume
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="py-14">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/20 p-8">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Contact
            </h2>
            <p className="mt-2 text-zinc-400">
              Want to collaborate or talk internships? Email is best.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={socials.email}
                className="rounded-full bg-red-500 px-5 py-2.5 text-sm font-medium text-zinc-950 shadow-[0_0_25px_rgba(239,68,68,0.35)] transition hover:brightness-110"
              >
                Email me
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-zinc-800 bg-zinc-950/20 px-5 py-2.5 text-sm text-zinc-200 transition hover:border-red-500/40"
              >
                LinkedIn
              </a>
              <a
                href={socials.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-zinc-800 bg-zinc-950/20 px-5 py-2.5 text-sm text-zinc-200 transition hover:border-red-500/40"
              >
                GitHub
              </a>
            </div>

            <div className="mt-8 border-t border-zinc-800/70 pt-6 text-xs text-zinc-500">
              © {new Date().getFullYear()} Kenneth Oluoch • Built with Next.js +
              Tailwind
            </div>
          </div>
        </section>

        <div className="h-10" />
      </main>

      <a
        href={socials.instagram}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-30 inline-flex h-12 w-12 items-center justify-center rounded-full border border-pink-500/40 bg-pink-500/15 text-sm font-semibold text-pink-100 shadow-[0_0_25px_rgba(236,72,153,0.35)] transition hover:bg-pink-500/25"
        aria-label="Instagram"
      >
        IG
      </a>
    </div>
  );
}
