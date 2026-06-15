/* eslint-disable turbo/no-undeclared-env-vars -- no*/
export const metadata = {
  title: 'Duke Resume',
  description: '',
};

export default function Page() {

  const cvURL = `${process.env.NODE_ENV === 'production' ? '/duck-monorepo' : ''}/DucNg.pdf`;

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.7s ease-out both;
        }
        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.3s; }
        .delay-4 { animation-delay: 0.4s; }
        .delay-5 { animation-delay: 0.5s; }
        .delay-6 { animation-delay: 0.6s; }
        .delay-7 { animation-delay: 0.7s; }
        .delay-8 { animation-delay: 0.8s; }
        .delay-9 { animation-delay: 0.9s; }
      `}</style>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <header className="mb-12 animate-fade-in-up">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight mb-2">Nguyen Khanh Duc</h1>
          <p className="text-lg text-gray-600 font-medium">Software Engineer &amp; System Architect</p>
          <div className="text-sm text-gray-500 mt-3">
            <span>Hanoi, Vietnam</span>
            <span className="mx-2">|</span>
            <a href="mailto:immonnguyen@gmail.com" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">immonnguyen@gmail.com</a>
            <span className="mx-2">|</span>
            <span>+84 326234477</span>
            <span className="mx-2">|</span>
            <a href="https://duck-monorepo.github.io" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-gray-900 underline underline-offset-2">duck-monorepo.github.io</a>
          </div>
        </header>

        <section className="mb-12 animate-fade-in-up delay-1">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Professional Summary</h2>
          <p className="text-gray-700 leading-relaxed">
            Software Engineer with 7+ years of experience building scalable web applications using React.js, Next.js, NestJS, and Node.js. Strong expertise in frontend architecture, backend API development, micro frontends, and cloud-native systems. Experienced in delivering high-performance products.
          </p>
        </section>

        <section className="mb-12 animate-fade-in-up delay-2">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Technical Skills</h2>
          <div className="space-y-3">
            <div>
              <p className="text-sm font-medium text-gray-900 mb-1.5">Frontend: <span className="text-gray-700">React.js, Next.js, TypeScript, JavaScript, Redux, Zustand, Tailwind, Micro Frontend, React Query</span></p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900 mb-1.5">Backend: <span className="text-gray-700">Node.js, NestJS, Express.js, REST APIs, GraphQL, WebSockets, Authentication (JWT/OAuth), Prisma</span></p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900 mb-1.5">Database &amp; Cloud: <span className="text-gray-700">PostgreSQL, MongoDB, Redis, AWS, Docker, Firebase, Vercel, CI/CD, GitHub Actions</span></p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900 mb-1.5">Tools: <span className="text-gray-700">Git, TurboRepo, NX, Storybook, Jest, Playwright, ESLint, Prettier, Webpack, Vite, Cursor, Claude Code</span></p>
            </div>
          </div>
        </section>

        <section className="mb-12 animate-fade-in-up delay-3">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Work Experience</h2>
          <div className="relative">
            <div className="absolute left-[7px] top-0 bottom-0 w-px bg-gray-200 hidden md:block" />

            <div className="space-y-8">
              <div className="relative animate-fade-in-up delay-4">
                <div className="hidden md:block absolute left-0 top-1.5 w-3.5 h-3.5 bg-blue-500 rounded-full border-4 border-white shadow-md" />
                <div className="md:pl-10">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                    <h3 className="text-base font-semibold text-gray-900">Lead Software Engineer</h3>
                    <span className="text-sm text-blue-600 font-mono">Dec 2023 – Present</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-3">Deputy — Hanoi, Vietnam</p>
                  <ul className="list-disc list-inside text-gray-700 text-sm leading-relaxed space-y-1.5">
                    <li>Led development of end-to-end encrypted Deputy Messaging web-app from the early idea stage to serving 10K+ concurrent users on production, achieving 99.9% uptime</li>
                    <li>Designed mechanisms for message sync, offline-first experiences, optimistic sending, delivery/read receipts, retry handling, conflict resolution to ensure a reliable chat experience under varying network conditions.</li>
                    <li>Contributed to the Micro Frontend platform by building shared SDKs, improving Storybook, and defining common patterns used across teams</li>
                    <li>Guided teammates through code reviews, pair programming, and technical discussions.</li>
                    <li>Improved Messaging performance by reducing unnecessary re-renders, virtualizing large message lists, and optimizing real-time updates for smoother user interactions.</li>
                  </ul>
                </div>
              </div>

              <div className="relative animate-fade-in-up delay-5">
                <div className="hidden md:block absolute left-0 top-1.5 w-3.5 h-3.5 bg-blue-500 rounded-full border-4 border-white shadow-md" />
                <div className="md:pl-10">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                    <h3 className="text-base font-semibold text-gray-900">Senior Software Engineer</h3>
                    <span className="text-sm text-blue-600 font-mono">June 2022 – Nov 2023</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-3">EPAM Systems — Ho Chi Minh City, Vietnam</p>
                  <ul className="list-disc list-inside text-gray-700 text-sm leading-relaxed space-y-1.5">
                    <li>Contributed to the development of Primark Click&amp;Collect, serving customers across the UK and Europe to browse, reserve, and collect products in-store</li>
                    <li>Built high-performance experiences using Next.js, React.js, and TypeScript, supporting large-scale retail traffic</li>
                    <li>Developed scalable frontend modules for product discovery, store selection, order tracking, and collection workflows integrated with GraphQL APIs</li>
                    <li>Enhanced accessibility compliance (WCAG) and expanded automated testing coverage</li>
                  </ul>
                </div>
              </div>

              <div className="relative animate-fade-in-up delay-6">
                <div className="hidden md:block absolute left-0 top-1.5 w-3.5 h-3.5 bg-blue-500 rounded-full border-4 border-white shadow-md" />
                <div className="md:pl-10">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                    <h3 className="text-base font-semibold text-gray-900">Software Engineer</h3>
                    <span className="text-sm text-blue-600 font-mono">Sep 2020 – June 2022</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-3">OPSWAT — Ho Chi Minh City, Vietnam</p>
                  <ul className="list-disc list-inside text-gray-700 text-sm leading-relaxed space-y-1.5">
                    <li>Developed and maintained OPSWAT MetaDefender Kiosk, a secure media scanning and threat prevention platform used in critical infrastructure environments</li>
                    <li>Built a React/Electron frontend that consumed Protocol Buffer streams from a C++ scanning engine to visualize and navigate 100K+ scanned files using lazy loading and virtualized tree rendering, maintaining a responsive user experience files traversal and during real-time scans.</li>
                    <li>Built and maintained complex workflow management features in a React application integrated with enterprise LDAP/Active Directory systems, supporting large organizations and U.S. police departments.</li>
                  </ul>
                </div>
              </div>

              <div className="relative animate-fade-in-up delay-7">
                <div className="hidden md:block absolute left-0 top-1.5 w-3.5 h-3.5 bg-blue-500 rounded-full border-4 border-white shadow-md" />
                <div className="md:pl-10">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                    <h3 className="text-base font-semibold text-gray-900">Intern Software Engineer</h3>
                    <span className="text-sm text-blue-600 font-mono">Nov 2018 – Jan 2020</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-3">Comspaces — Ho Chi Minh City, Vietnam</p>
                  <ul className="list-disc list-inside text-gray-700 text-sm leading-relaxed space-y-1.5">
                    <li>Developed social networking and messaging platforms using React.js and Node.js</li>
                    <li>Worked with microservices and distributed databases for scalable application architecture</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12 animate-fade-in-up delay-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Education</h2>
          <div className="border border-gray-200 rounded-lg p-5">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <h3 className="text-base font-semibold text-gray-900">Bachelor of Information Technology</h3>
                <p className="text-sm text-gray-600 mt-1">Ho Chi Minh City University of Technology and Education</p>
              </div>
              <span className="text-sm text-gray-500 font-mono mt-2 md:mt-0">Sep 2016 – Sep 2020</span>
            </div>
          </div>
        </section>

        <div className="flex flex-col items-center gap-3 pt-6 border-t border-gray-100 animate-fade-in-up delay-9">
          <a
            className="inline-flex items-center gap-2 rounded-lg bg-gray-900 text-white px-5 py-2.5 font-semibold text-sm hover:bg-gray-800 active:bg-gray-950 transition-colors"
            download
            href={cvURL}
          >
            Download PDF Resume
          </a>
          <p className="text-xs text-gray-400">Full resume with project details and references</p>
        </div>
      </div>
    </div>
  );
}
