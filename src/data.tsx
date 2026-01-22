const data: any = {
  about: {
    profileImg: "img/profile.jpg",
    name: "Alex Filipek",
    title: "Full Stack Developer",
    location: "Austin, TX, USA",
    email: "awfilipek@gmail.com",
    links: [
      {
        name: "Resume",
        link: "doc/resume.pdf",
        icon: "document",
      },
      {
        name: "Github Profile",
        link: "https://github.com/billyshears314",
        icon: "github",
      },
      {
        name: "Send email to me",
        link: "mailto:awfilipek@gmail.com",
        icon: "email",
      },
    ],
    description:
      "I am a frontend-leaning full stack developer.  I enjoy turning complex problems into simple, user-friendly solutions.  My preferred tech stack is Node.js and React with TypeScript.",
  },
  experience: [
    {
      startDate: "2021-0-30",
      endDate: "2024-04-25",
      position: "Full Stack Developer",
      company: "GR8 People",
      companyLink: "https://www.gr8people.com/",
      location: "Yardley, PA - Remote",
      summary: "",
      responsibilities: [
        "Implemented robust integrations connecting GR8 People to LinkedIn, providing direct visibility of customer data within the LinkedIn platform",
        "Reengineered email and SMS campaign platforms, moving from ColdFusion to Go microservices and rebuilding the frontend to React, enhancing performance and maintainability",
      ],
      technologies: [
        "react",
        "nextjs",
        "go",
        "graphql",
        "dynamodb",
        "sql",
        "docker",
        "kubernetes",
        "elasticsearch",
      ],
    },
    {
      startDate: "2017-12-12",
      endDate: "2021-08-27",
      position: "Senior Software Engineer",
      company: "Custom Learning Designs",
      companyLink: "https://www.cldinc.com/",
      location: "Belmont, MA",
      summary:
        "Extending and maintaining SaaS application of Application Tracking System capabilities and career site pages for customer's.",
      responsibilities: [
        "Led the redevelopment of the company’s flagship eLearning software in Angular, delivering a modernized user experience in collaboration with designers and stakeholders",
        "Automated production workflows using Node.js and Ruby, cutting lengthy turnaround time for generating hundreds of customized eLearning software versions",
        "Developed multiplayer question-based games",
        "Research/Prototyping of augmented reality software with ARKit 2",
      ],
      technologies: ["vuejs", "angular", "nodejs", "ruby", "python"],
    },
    {
      startDate: "2016-09-19",
      endDate: "2017-11-08",
      position: "Full Stack Developer",
      company: "Wayfair",
      companyLink: "https://www.wayfair.com/",
      location: "Boston, MA",
      summary:
        "Extending and maintaining SaaS application of Application Tracking System capabilities and career site pages for customer's.",
      responsibilities: [
        "Developed customer facing code for Promotions Team (in charge of Event Pages and Closeout/Clearance pages)",
        "Built internal tool for scheduling and customizing Major Promotional Events",
      ],
      technologies: ["react", "php", "sql"],
    },
    {
      startDate: "2015-1-21",
      endDate: "2016-09-09",
      position: "Software Engineer",
      company: "Custom Learning Designs",
      companyLink: "https://www.cldinc.com/",
      location: "Belmont, MA",
      summary: "",
      responsibilities: [
        "Collaborated with tech team to develop custom eLearning pieces with custom content",
        "Developed portals and eGames",
        "Created full stack tool to search internal documents using Solr",
        "Developed solution using open source technologies for virtual microscopy project",
      ],
      technologies: ["angular", "nodejs", "ruby", "python", "solr"],
    },
  ],
  projects: [
    {
      title: "Personal Finance",
      description:
        "A fullstack responsive application for managing one's personal finances.",
      source: "https://github.com/billyshears314/Personal-Finance",
      demo: "https://personal-finance-dusky.vercel.app",
      // TODO: REPLACE WITH REAL IMAGES
      images: [
        {
          src: "img/projects/personal-finance/overview_screenshot.png",
          caption: "Overview (Desktop)",
          isMobile: false,
        },
        {
          src: "img/projects/personal-finance/overview_screenshot_mobile.png",
          caption: "Overview (Mobile)",
          isMobile: true,
        },
        {
          src: "img/projects/personal-finance/transactions_screenshot.png",
          caption: "Transactions (Desktop)",
          isMobile: false,
        },
        {
          src: "img/projects/personal-finance/transactions_screenshot_mobile.png",
          caption: "Transactions (Mobile)",
          isMobile: true,
        },
        {
          src: "img/projects/personal-finance/budgets_screenshot.png",
          caption: "Budgets (Desktop)",
          isMobile: false,
        },
        {
          src: "img/projects/personal-finance/budgets_screenshot_mobile.png",
          caption: "Budgets (Mobile)",
          isMobile: true,
        },
        {
          src: "img/projects/personal-finance/pots_screenshot.png",
          caption: "Pots (Desktop)",
          isMobile: false,
        },
        {
          src: "img/projects/personal-finance/pots_screenshot_mobile.png",
          caption: "Pots (Mobile)",
          isMobile: true,
        },
        {
          src: "img/projects/personal-finance/recurring_bills_screenshot.png",
          caption: "Recurring Bills (Desktop)",
          isMobile: false,
        },
        {
          src: "img/projects/personal-finance/recurring_bills_screenshot_mobile.png",
          caption: "Recurring Bills (Mobile)",
          isMobile: true,
        },
      ],
      technologies: [
        "nextjs",
        "react",
        "nodejs",
        "typescript",
        "postgresql",
        // "typeorm",
      ],
    },
    {
      title: "Blackjack CLI",
      description: `A blackjack game using the <a href="https://deckofcardsapi.com">Deck of Cards API</a>.`,
      source: "https://github.com/billyshears314/BlackjackCLI",
      images: [
        {
          src: "img/projects/blackjack.png",
          caption: "Blackjack CLI",
          isMobile: true,
        },
      ],
      technologies: ["nodejs", "typescript"],
    },
  ],
  education: [
    {
      institution: "University of Massachusetts Amherst",
      url: "",
      degree: "Computer Science - Bachelor of Science",
      startDate: "2010-9-01",
      endDate: "2014-5-10",
    },
  ],
  skills: [
    "html",
    "css",
    "tailwind",
    "javascript",
    "typescript",
    "nodejs",
    "postgresql",
    "git",
    "nextjs",
    "react",
    "angular",
    "vuejs",
    "docker",
    "kubernetes",
    "go",
    "php",
    "python",
  ],
};

export default data;
