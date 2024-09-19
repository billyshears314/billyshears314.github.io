const data = {
  bio: "This is who I am",
  projects: [
    {
      name: "ABC",
    },
  ],
  skills: [
    {
      type: "Web Frameworks",
      items: ["Next.js", "Django", "Express.js", "Angular", "Vue"],
    },
    {
      type: "Programming Languages",
      items: ["Javascript", "Python", "Ruby", "Go"],
    },
    {
      type: "Databases",
      items: ["PostgreSQL", "DynamoDB", "Firebase"],
    },
    {
      type: "Miscellaneous",
      items: ["Git", "GraphQL", "Docker", "Kubernetes"],
    },
  ],
  companies: [
    {
      position: "Full Stack Engineer",
      name: "GR8 People",
      timeframe: "August 2021 - April 2024",
      companyDescription: "",
      items: [
        "Worked on integrating and syncing GR8 People's customer data (historical and real-time) to LinkedIn using their API. (TODO: FIX)",
        "Modernized company's campaign email and SMS messaging systems for scale",
      ],
    },
    {
      position: "Senior Software Engineer",
      name: "Custom Learning Designs",
      timeframe: "December 2017 - August 2021",
      companyDescription: "",
      items: [
        "Led multi-faceted software project in developing a new version of the company's primary eLearning software from the ground up working with designers and stakeholders",
        "Built many internal tools and scripts to automate tasks to improve production time of generating hundreds of customized versions of eLearning software using Node.js and Ruby",
        "Developed versious eGames and eLearning software with Vue and Firebase",
      ],
    },
    {
      position: "Full Stack Developer",
      name: "Wayfair",
      timeframe: "September 2016 - November 2017",
      companyDescription: "",
      items: [
        "Worked on the Storefront Promotions team in charge of Major Promotions, Holiday Events, and Clearance/Closeout deals",
        "Spearheaded development of internal backend tool for creating and scheduling Major Promotions",
        "Converted team's legacy code to React",
      ],
    },
  ],
  education: {
    school: "University of Massachusetts Amherst",
    degree: "Bachelor of Science in Computer Science",
    timeframe: "September 2010 - May 2014",
  },
  faq: [
    {
      question: "What are you looking for in your next role?",
      answer: "...",
    },
    {
      question: "What project are you most proud of working on?",
      answer: "...",
    },
    {
      question:
        "What was a difficult challenge you faced and how did you handle it?",
      answer: "...",
    },
  ],
};

export default data;
