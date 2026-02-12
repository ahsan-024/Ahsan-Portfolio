
const person = {
  firstName: "Ahsan",
  lastName: "Mughal",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "PHP/Laravel Developer",
  avatar: "/images/ahsan.png",
  email: "outreach.ahsanmughal@gmail.com",
  location: "Asia/Karachi", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  displayLocation: "Lahore, PK.", // Display location for the user.
  languages: ["English", "Urdu"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}&apos;s Newsletter</>,
  description: (
    <>
      I occasionally write about PHP/Laravel development, system design, and share
      insights on the intersection of scalability, performance, and
      human-centered technology.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://instagram.com/ahsan__024",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/muhammad-ahsan-mughal-0879b639b/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}?subject=Project%20Inquiry&body=Hi%20Ahsan,%0D%0A%0D%0AI'm:%20[Your%20Name]%0D%0AI’m%20looking%20for:%20[Brief%20Project%20Description]%0D%0ABudget%20Range:%20[Your%20Budget]%0D%0A%0D%0ALooking%20forward%20to%20your%20reply.`,
  },
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/ahsan-024",
  },
];

const home = {
  path: "/",
  image: "/images/og/Ahsan.jpeg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>👋🏼 Ahsan Mughal</>,
  featured: {
    display: true,
    title: (
      <>
        Currently at ― <strong className="ml-4">TetraLogics</strong>
      </>
    ),
    href: "https://tetralogicx.com/",
  },
  subline: (
    <>
      A {person.role} crafting elegant, secure, and scalable systems that power
      seamless digital experiences and fuel business growth.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About ― ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  gallery: {
    display: false, // Gallery section disabled
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
        Ahsan Mughal, PHP/Laravel developer who designs and delivers resilient,
        high-performance server systems. He combines meticulous attention to
        detail with a knack for practical, creative problem-solving, turning
        architectural complexity into clean, maintainable solutions that boost
        reliability, performance, and product momentum.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "TetraLogics",
        timeframe: "May 2025 - PRESENT",
        role: `${person.role}`,
        achievements: [
          <>
          Select and Rent
          <ul>
            <li>
            Developed a multi-tenant car rental management system using Laravel 11 with role-based access control (Admin, Company, Employee, Customer), implementing separate dashboards, permission management, activity logging, and IP-based security restrictions for secure multi-user operations
            </li>
            <li>
              Built an end-to-end booking and payment system integrating Stripe payment gateway, shopping cart functionality, commission calculation, multi-currency support, and automated email notifications, processing transactions with real-time booking status updates, refund management, and invoice generation
            </li>
            <li>
              Designed and implemented a scalable vehicle management system with advanced search/filtering, location-based car listings, availability tracking, calendar-based booking visualization, review/rating system, and CRUD operations for vehicles, brands, models, categories, and features
            </li>
          </ul>
          </>,
          <>
            Eform-Voting
            <ul>
              <li>
              Developed a Laravel-based electronic voting platform with role-based access control (RBAC), implementing user authentication (email/password, Google OAuth, email verification), hCaptcha integration, and session management with localStorage/sessionStorage for credential management.
              </li>
              <li>
              Built a multi-step voting event creation wizard with booking and tariff management, public voting interface with token-based access, reward system, timezone handling, and email notifications using Blade templates and Bootstrap.
              </li>
              <li>
              Integrated secure payment processing via Stripe API, implemented JavaScript-based frontend interactions, and developed responsive user interfaces with real-time voting status updates and dynamic form validation.
              </li>
            </ul>

          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
        ],
      },
      {
        company: "TetraLogics",
        timeframe: "Jan 2025 - Apr 2025",
        role: "PHP/Laravel Intern",
        achievements: [
          // biome-ignore lint/complexity/noUselessFragments: false positive
          <>
            Gained hands-on experience in full-stack web development using modern frameworks, implementing RESTful
            APIs, database design, and following MVC architecture patterns to build scalable applications.
          </>,
          // biome-ignore lint/complexity/noUselessFragments: false positive
          <>
            Developed skills in payment gateway integration, webhook handling, authentication systems, and responsive
UI development while collaborating with teams and following industry best practices for code organization.  
and version control.
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
        name: "COMSATS University Islamabad",
        description: (
          <>
            Studied software engineering. Specializing in PHP/Laravel development,
            databases, and system architecture. Graduated with a strong academic
            record and practical experience through internships and projects.
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
        title: "Laravel",
        description: (
          <>
            Experienced in building robust web applications using the Laravel
            PHP framework.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "MySQL",
        description: (
          <>
            Skilled in designing and managing relational databases for efficient
            data storage and retrieval.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "CodeIgniter",
        description: (
          <>
            Experienced in building robust web applications using the CodeIgniter
            PHP framework.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Perfex CRM",
        description: (
          <>
            Experienced in using Perfex CRM for project management, note-taking, and personal
            organization while collaborating with teams and following industry best practices for code organization.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },

      {
        title: "Bootstrap",
        description: (
          <>
            Experienced in creating responsive and visually appealing web interfaces using Bootstrap, ensuring
            consistent design patterns and cross-browser compatibility across various devices.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
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
  description: `Design projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

// const gallery = {
//   path: "/gallery",
//   label: "Gallery",
//   title: `Photo gallery ― ${person.name}`,
//   description: `A photo collection by ${person.name}`,
//   // Images by https://lorant.one
//   // These are placeholder images, replace with your own
//   images: [
//     {
//       src: "/images/gallery/about/LUMS-open-day.png",
//       alt: "Ahsan Mughal at LUMS Open Day",
//       orientation: "vertical",
//     },
//     {
//       src: "/images/gallery/about/imrtls00-speak-notion.png",
//       alt: "Sameer Faisal speaking about Notion",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/about/cbtl-meetup.png",
//       alt: "Notion Workshop at CBTL",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/about/imrtls00-speak-tech.png",
//       alt: "Sameer Faisal speaking at Tech Conference",
//       orientation: "vertical",
//     },
//     {
//       src: "/images/gallery/about/notion-com.png",
//       alt: "Notion COMSATS - Community",
//       orientation: "vertical",
//     },
//     {
//       src: "/images/gallery/about/notion-ninjas.png",
//       alt: "image",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/about/devfest22-community.png",
//       alt: "Sameer attending GDG Lahore DevFest22",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/about/imrtls00-speak-pro.png",
//       alt: "Sameer Faisal speaking about Prototyping",
//       orientation: "vertical",
//     },
//     {
//       src: "/images/gallery/about/attendee-tech.png",
//       alt: "Sameer Faisal attending Tech Conference",
//       orientation: "vertical",
//     },
//     {
//       src: "/images/gallery/about/app-devfest.png",
//       alt: "Sameer receiving sovenier from GDG Cloud Lahore",
//       orientation: "horizontal",
//     },
//   ],
// };

export { person, social, newsletter, home, about, /* blog, */ work, /* gallery */ };
