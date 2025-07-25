const data: any = {
  about: {
    profileImg: "img/profile.jpg",
    name: "Alex Filipek",
    title: "Full Stack Developer",
    location: "Boston, MA, USA",
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
        link: "mailto:alexfilipek@gmail.com",
        icon: "email",
      },
    ],
    description:
      "I am a frontend-leaning full stack developer.  I like to dig deep and solve problems both big and small.  My preferred tech stack is Node.js and React with TypeScript.",
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
        "Worked on integrating and syncing GR8 People’s customer data to LinkedIn using their API for Talent Solutions",
        "Modernized campaign email and SMS messaging systems from ColdFusion to microservice system and redesigned frontend with our tech stack (Go, DynamoDB, GraphQL, React)",
      ],
      technologies: [
        {
          name: "React",
          icon: "react",
        },
        {
          name: "Next.js",
          icon: "nextjs",
        },
        {
          name: "Golang",
          icon: "go",
        },
        {
          name: "GraphQL",
          icon: "graphql",
        },
        {
          name: "DynamoDB",
          icon: "dynamodb",
        },
        {
          name: "SQL",
          icon: "sql",
        },
        {
          name: "Docker",
          icon: "docker",
        },
        {
          name: "Kubernetes",
          icon: "kubernetes",
        },
        {
          name: "Elasticsearch",
          icon: "elasticsearch",
        },
      ],
    },
    {
      startDate: "2017-12-12",
      endDate: "2021-08-27",
      position: "Senior Software Engineer",
      company: "Customer Learning Designs",
      companyLink: "https://www.cldinc.com/",
      location: "Belmont, MA",
      summary:
        "Extending and maintaining SaaS application of Application Tracking System capabilities and career site pages for customer's.",
      responsibilities: [
        "Led frontend project in developing a new version of the company’s primary eLearning software from the ground up",
        "Built many internal tools and scripts to automate tasks to improve production time of generating hundreds of customized versions of eLearning software",
        "Developed multiplayer question-based games",
        "Research/Prototyping of AR software",
      ],
      technologies: [
        {
          name: "Vue",
          icon: "vuejs",
        },
        {
          name: "Angular",
          icon: "angular",
        },
        {
          name: "Node",
          icon: "nodejs",
        },
        {
          name: "Ruby",
          icon: "ruby",
        },
        {
          name: "Python",
          icon: "python",
        },
      ],
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
      technologies: [
        {
          name: "React",
          icon: "react",
        },
        {
          name: "PHP",
          icon: "php",
        },
        {
          name: "SQL",
          icon: "sql",
        },
      ],
    },
    {
      startDate: "2015-1-21",
      endDate: "2016-09-09",
      position: "Software Engineer",
      company: "Customer Learning Designs",
      companyLink: "https://www.cldinc.com/",
      location: "Belmont, MA",
      summary: "",
      responsibilities: [
        "Worked with tech team to develop custom eLearning pieces with custom content",
        "Developed portals and eGames",
        "Created full stack tool to search internal documents using Solr",
        "Developed solution using open source technologies for virtual microscopy project",
      ],
      technologies: [
        {
          name: "Angular",
          icon: "angular",
        },
        {
          name: "Node",
          icon: "nodejs",
        },
        {
          name: "Ruby",
          icon: "ruby",
        },
        {
          name: "Javascript",
          icon: "javascript",
        },
        {
          name: "Solr",
          icon: "solr",
        },
      ],
    },
  ],
  projects: [
    {
      title: "Blackjack CLI",
      description: "A blackjack game using the Deck of Cards API.",
      link: "https://github.com/billyshears314/BlackjackCLI",
      image: "img/projects/blackjack.png",
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
    {
      name: "HTML5",
      icon: "html",
      level: "Expert",
      keywords: ["Web Development", "Frontend"],
    },
    {
      name: "CSS",
      icon: "css",
      level: "Intermediate",
      keywords: ["Web Development", "Frontend", "Responsive Design"],
    },
    {
      name: "Tailwind",
      icon: "tailwind",
      level: "Intermediate",
      keywords: [
        "Web Development",
        "Frontend",
        "CSS Framework",
        "Responsive Design",
      ],
    },
    {
      name: "JavaScript",
      icon: "javascript",
      level: "Expert",
      keywords: ["Web Development", "Frontend", "Backend", "Fullstack"],
    },
    {
      name: "TypeScript",
      icon: "typescript",
      level: "Expert",
      keywords: [
        "Web Development",
        "Frontend",
        "Backend",
        "JavaScript Superset",
      ],
    },
    {
      name: "Node",
      icon: "nodejs",
      level: "Expert",
      keywords: ["Web Development", "Backend", "JavaScript", "Server"],
    },
    {
      name: "SQL",
      icon: "postgresql",
      level: "Intermediate",
      keywords: ["Databases", "SQL", "Data Storage", "Backend"],
    },
    {
      name: "Git",
      icon: "git",
      level: "Intermediate",
      keywords: ["Version Control", "Collaboration", "Source Code"],
    },
    {
      name: "Next.js",
      icon: "nextjs",
      level: "Intermediate",
      keywords: [
        "Web Development",
        "Frontend",
        "React Framework",
        "SSR",
        "Static Generation",
      ],
    },
    {
      name: "React",
      icon: "react",
      level: "Expert",
      keywords: ["Web Development", "Frontend", "JavaScript Library", "UI"],
    },
    {
      name: "Angular",
      icon: "angular",
      level: "Intermediate",
      keywords: ["Web Development", "Frontend", "JavaScript Library", "UI"],
    },
    {
      name: "Vue",
      icon: "vuejs",
      level: "Intermediate",
      keywords: ["Web Development", "Frontend", "JavaScript Library", "UI"],
    },
    {
      name: "Docker",
      icon: "docker",
      level: "Intermediate",
      keywords: ["Virtual Environments", "Backend"],
    },
    {
      name: "Kubernetes",
      icon: "kubernetes",
      level: "Intermediate",
      keywords: [],
    },
    {
      name: "Golang",
      icon: "go",
      level: "Intermediate",
      keywords: ["Backend", "Cloud Service"],
    },
    {
      name: "PHP",
      icon: "php",
      level: "Intermediate",
      keywords: ["Web Development", "Backend", "Fullstack"],
    },
    {
      name: "Python",
      icon: "python",
      level: "Intermediate",
    },
  ],
};

export default data;
