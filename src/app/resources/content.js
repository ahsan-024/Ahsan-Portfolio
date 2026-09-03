
const person = {
  firstName: "Ahsan",
  lastName: "Mughal",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer — PHP / Laravel / MySQL",
  avatar: "/images/avatar.jpg",
  email: "mughalahsan718@gmail.com",
  location: "Asia/Karachi", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  displayLocation: "Lahore, PK.", // Display location for the user.
  languages: ["English", "Urdu"], // optional: Leave the array empty if you don't want to display languages
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/ahsanidrees11",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/ahsanidrees11",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}?subject=Project%20Inquiry&body=Hi%20Ahsan,%0D%0A%0D%0AI'm:%20[Your%20Name]%0D%0AI’m%20looking%20for:%20[Brief%20Project%20Description]%0D%0ABudget%20Range:%20[Your%20Budget]%0D%0A%0D%0ALooking%20forward%20to%20your%20reply.`,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://instagram.com/ahsan__024",
  },
];

const home = {
  path: "/",
  image: "/images/avatar.jpg",
  label: "Home",
  title: `${person.name} — Software Engineer (PHP / Laravel / MySQL)`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>I make slow, sprawling systems fast and safe to change</>,
  featured: {
    display: true,
    title: (
      <>
        Currently at ― <strong className="ml-4">Bristol Mayer Biotech</strong>
      </>
    ),
    href: "/about",
  },
  subline: (
    <>
      Backend engineer building secure, scalable PHP/Laravel systems — from
      multi-tenant SaaS products to pharmaceutical ERP reporting tuned for
      multi-million-row datasets.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About ― ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.displayLocation}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    // calendar = resume.
    display: true,
    displayIcon: true,
    link: "/docs/Ahsan Mughal-CV.pdf",
    title: "Download CV",
    file: "Ahsan Mughal-CV.pdf",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Backend PHP developer with hands-on experience across both Laravel
        product development and large legacy PHP/MySQL systems. I build secure,
        scalable web applications and RESTful APIs, integrate Stripe, OAuth and
        anti-bot protection, and tune MySQL for multi-million-row reporting
        workloads — with a focus on role-based access control, query
        optimization, automated testing and CI/CD inside Agile teams.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Bristol Mayer Biotech Pakistan",
        timeframe: "May 2026 - PRESENT",
        role: "Software Engineer (PHP/MySQL)",
        achievements: [
          // biome-ignore lint/complexity/noUselessFragments: false positive
          <>
            Rebuilt the entire <strong>Sales &amp; Reporting suite</strong> of a
            pharmaceutical ERP (Sales Report, Primary/Secondary/Primary-vs-Secondary
            Sales Trend, Distributor Trend, Monthly Target, Sales Target,
            Target-vs-Achievement), cutting report times from <strong>~6s to
            sub-second on 2M+ row datasets</strong> through a trigger-synced day-grain
            rollup table (2.0M rows / 258MB reduced to 700K rows / 40MB with verified
            zero drift), index-aware query optimization and result caching; delivered
            multi-level drilldowns, KPI cards, charts, A4 print and Excel export.
          </>,
          // biome-ignore lint/complexity/noUselessFragments: false positive
          <>
            Designed the <strong>role-based data-scoping model</strong> enforced
            across every sales screen — a 5-level territory hierarchy (MR / RSM / SM /
            BM / NSM), product-group locking, and a dual-tenant ID pattern for
            multi-company admin accounts — closing a data-visibility leak in which
            field managers could see products not credited to their team (verified 42
            to 23 products for a test account, consistent across 4 role levels).
          </>,
          // biome-ignore lint/complexity/noUselessFragments: false positive
          <>
            Built the <strong>Doctor Activity Requisition &amp; Approval system</strong>{" "}
            end to end — 5-step wizard, approvals inbox, printable A4 payment voucher
            and recorded payment — with a status engine, immutable line-item snapshots
            written in a single transaction, capability-based access control as one
            source of truth for page, API and menu guards, a database-lock critical
            section closing a voucher-numbering race condition, and server-side amount
            re-validation blocking client-side tampering; verified by{" "}
            <strong>250 automated checks across 4 test suites</strong>.
          </>,
          // biome-ignore lint/complexity/noUselessFragments: false positive
          <>
            Built the <strong>Organogram</strong> and <strong>Team Division</strong>{" "}
            modules — the system&apos;s only write interface for assigning and
            unassigning a territory&apos;s full reporting chain, with region-scoped
            candidate pickers and trigger-backed hierarchy synchronization — plus
            divisional headcount analytics and 4 data-integrity reports (orphan reps,
            unassigned territories, missing divisions, cross-region managers).
          </>,
          // biome-ignore lint/complexity/noUselessFragments: false positive
          <>
            Built the <strong>Quotation Letter</strong> module, replacing a manual
            document process: transactional save with snapshotted price lines (an
            issued quote never changes when the catalogue does), auto-generated
            quotation numbers, live discount pricing, and a print engine using an
            isolated iframe so the letterhead and address block repeat correctly on
            every A4 page.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
        ],
      },
      {
        company: "TetraLogicx",
        timeframe: "Jan 2025 - Apr 2026",
        role: "Junior Laravel Developer",
        achievements: [
          // biome-ignore lint/complexity/noUselessFragments: false positive
          <>
            Delivered a <strong>multi-tenant car rental management system</strong> in
            Laravel 11 serving 4 user roles (Admin, Company, Employee, Customer) under
            role-based access control, covering the full booking lifecycle — search,
            cart, reservation, Stripe checkout and commission-based revenue tracking —
            with multi-currency and localization support, advanced vehicle
            search/filtering, automated email notifications, and analytics dashboards
            onboarding <strong>10+ rental companies</strong> and processing{" "}
            <strong>500+ bookings</strong>.
          </>,
          // biome-ignore lint/complexity/noUselessFragments: false positive
          <>
            Built a Laravel <strong>electronic voting platform</strong> with RBAC and 3
            sign-in paths (email/password, Google OAuth, email verification), a
            multi-step event-creation wizard, a public voting interface with
            token-based access, Stripe payments, booking/tariff management, a reward
            system, hCaptcha bot protection, session management, timezone handling and
            email notifications; ran <strong>10+ voting events</strong> totalling{" "}
            <strong>1,000+ votes</strong> with zero double-vote incidents.
          </>,
          // biome-ignore lint/complexity/noUselessFragments: false positive
          <>
            Developed a full-stack Laravel 11 application for a{" "}
            <strong>private equity firm</strong> — public website plus secure admin
            panel — with CRUD operations, authentication and authorization (Laravel
            Breeze), file uploads, email notifications, Eloquent ORM data management
            and a responsive Bootstrap UI, shipped to production in 6 weeks.
          </>,
          // biome-ignore lint/complexity/noUselessFragments: false positive
          <>
            Maintained <strong>Almiranta Cap-Ex Plan</strong>, a production-grade
            LAAM-stack application with modular architecture, delivering CapEx
            workflows (budgeting, tracking, dashboards, cron/export automation) with
            multi-view analysis and customizable UI logic across{" "}
            <strong>10+ cost centres</strong>, resolving{" "}
            <strong>25+ production issues</strong> against live client data.
          </>,
          // biome-ignore lint/complexity/noUselessFragments: false positive
          <>
            Owned <strong>deployment and release</strong> for these applications:
            managed local, staging and production environments, environment-variable
            and secrets configuration, database migrations against live data, and
            GitHub Actions CI pipelines running lint, type-check and build gates on
            every push and pull request.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "COMSATS University Lahore",
        description: (
          <>
            BS in Software Engineering, Feb 2021 – Dec 2024. Coursework in Data
            Structures and Algorithms (C++), Requirements Analysis and System
            Architecture, Web Technologies, Discrete Structures, Software Project
            Management, and Software Testing.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "PHP & Laravel",
        description: (
          <>
            Laravel 11 with Blade, Eloquent ORM and Laravel Breeze, plus large
            legacy PHP/MySQL codebases. MVC, modular and multi-tenant architecture,
            the Factory pattern, service-layer separation, and secure coding
            practices — SQL injection prevention, input validation and server-side
            re-validation of anything a client can tamper with.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "MySQL & Query Optimization",
        description: (
          <>
            Schema design, migrations, indexing and query optimization, stored
            procedures, triggers, transactions and aggregation/rollup tables.
            Comfortable profiling multi-million-row reporting workloads and
            rebuilding them around day-grain rollups, index-aware queries and
            result caching — 2M+ row reports taken from ~6s to sub-second.
          </>
        ),
        images: [],
      },
      {
        title: "APIs & Integrations",
        description: (
          <>
            RESTful API design, AJAX, and webhook handling. Stripe payments and
            webhooks, Google OAuth sign-in, hCaptcha bot protection, and
            SMTP/email notification pipelines wired into booking, approval and
            checkout flows.
          </>
        ),
        images: [],
      },
      {
        title: "Auth, RBAC & Access Control",
        description: (
          <>
            Authentication, session management and capability-based authorization
            used as a single source of truth for page, API and menu guards.
            Multi-level territory hierarchies, product-group locking and
            dual-tenant ID patterns for multi-company admin accounts.
          </>
        ),
        images: [],
      },
      {
        title: "JavaScript & Frontend",
        description: (
          <>
            JavaScript (ES6+) and TypeScript with jQuery, Bootstrap and Tailwind
            CSS, plus React 19 and Next.js 15 for modern frontends. Responsive
            HTML5/CSS3/SCSS interfaces, dynamic form validation, and print-accurate
            A4 document rendering.
          </>
        ),
        images: [],
      },
      {
        title: "Data Visualization & Reporting",
        description: (
          <>
            Interactive dashboards with Chart.js, Plotly.js and Google Charts —
            KPI cards, multi-level drilldowns, trend comparisons — alongside A4
            print layouts and Excel export for the reports people actually take
            into meetings.
          </>
        ),
        images: [],
      },
      {
        title: "Testing & Code Quality",
        description: (
          <>
            Automated testing and regression suites written to pin down risky
            behaviour — race conditions, tampering, permission leaks — before it
            reaches production; one approval module shipped behind 250 automated
            checks across 4 test suites. Code review and Agile/Scrum delivery.
          </>
        ),
        images: [],
      },
      {
        title: "DevOps & Deployment",
        description: (
          <>
            CI/CD with GitHub Actions (lint, type-check and build gates on every
            push and PR), Docker-based development environments, Git branching and
            code review workflows, environment and secrets configuration, database
            migrations against live data, and releases to Vercel, shared hosting
            and VPS.
          </>
        ),
        images: [],
      },
    ],
  },
};

// const blog = {
//   path: "/blog",
//   label: "Blog",
//   title: "Writing about design, tech and humans...",
//   description: `Read what ${person.name} has been up to recently`,
//   // Create new blog posts by adding a new .mdx file to app/blog/posts
//   // All posts will be listed on the /blog route
// };

const work = {
  path: "/work",
  label: "Work",
  title: `Projects ― ${person.name}`,
  description: `PHP, Laravel and MySQL projects built by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};


export { person, social, home, about, work };
