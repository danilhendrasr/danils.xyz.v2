// import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Danil",
  lastName: "Suryawan",
  get name() {
    return `${this.firstName} H. ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/portrait.jpeg",
  email: "danilhendrasr@gmail.com",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa Indonesia"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I write about books, technical deep dive, AI, and a little bit of poems
      every now and then.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/danilhendrasr",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/danilhendrasr",
  },
  // {
  //   name: "Threads",
  //   icon: "threads",
  //   link: "https://www.threads.com/@once_ui",
  // },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/portrait.jpeg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: (
    <>Leading with technical mastery, cultivating high-quality solutions.</>
  ),
  featured: {
    display: false,
    title: (
      <>
        Recent project: <strong className="ml-4">Once UI</strong>
      </>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Danil, a software engineer at{" "}
      <a href="https://speechify.com">Speechify</a>, where I craft high-quality
      products and engineer robust solutions.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/danilhendrasr",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hi 👋 <br /> <br /> I'm a Surabaya-based software engineer with a
        passion to deliver high-quality and successful solutions. I relentlessly
        chase excellence in every area of my work. Enabling me to bring my
        technical leadership, exceptional degree of ownership, high technical
        bar and mastery, breadth of knowledge, and resourcefulness to every team
        and every project I'm in.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Speechify",
        timeframe: "2024 - Present",
        role: "Product Engineer",
        achievements: [
          <>Recognized by key stakeholders as a high performer.</>,
          <>Led multiple working groups to deliver major features.</>,
        ],
        images: [
          {
            src: "/images/projects/booktok/image-01.webp",
            alt: "BookTok",
            width: 6,
            height: 12,
          },
          {
            src: "/images/projects/booktok/image-02.webp",
            alt: "BookTok",
            width: 6,
            height: 12,
          },
          {
            src: "/images/projects/booktok/image-03.webp",
            alt: "BookTok",
            width: 6,
            height: 12,
          },
          {
            src: "/images/projects/booktok/image-04.webp",
            alt: "BookTok",
            width: 6,
            height: 12,
          },
          {
            src: "/images/projects/booktok/image-05.webp",
            alt: "BookTok",
            width: 6,
            height: 12,
          },
          {
            src: "/images/projects/booktok/image-06.webp",
            alt: "BookTok",
            width: 6,
            height: 12,
          },
          {
            src: "/images/projects/booktok/image-07.webp",
            alt: "BookTok",
            width: 6,
            height: 12,
          },
          {
            src: "/images/projects/booktok/image-08.webp",
            alt: "BookTok",
            width: 6,
            height: 12,
          },
        ],
      },
      {
        company: "SelarasTech",
        timeframe: "2023 - 2024",
        role: "Software Engineer",
        achievements: [
          <>
            Successfully optimized an internal payroll system, made a crucial
            process run 6x faster and cut the time to generate a report from 30
            minutes down to 2 seconds.
          </>,

          <>
            Designed and implemented a more automated and fault-tolerant data
            synchronization mechanism between Ginee (an omnichannel platform)
            and Magento (an e-commerce channel) using cron jobs, message queue,
            and retry mechanism.
          </>,

          <>
            Single-handedly stabilized a critical project by conducting
            extensive refactorings, fixing major data integrity issues,
            improving security, and adopting automated tests.
          </>,

          <>
            Got “exceeded expectations” for first-year performance appraisal.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: false, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "UPN Jawa Timur",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: false, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writings about books, tech, and poems...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
