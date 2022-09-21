export const projectData = [
  {
    name: "Hotels-Booking",
    description:
      "A full stack web application that allow people post or book hotel rooms.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    selected: true,
    detials: {
      frontend: [
        "React.js as front-end library",
        "Bootstrap and Ant-Design for styling",
        "React-Redux for state management",
        "Google Map API for location search prediction and autocomplete input",
      ],
      backend: [
        "Node.js as back-end runtime",
        "Express.js as server",
        "MongoDB as database",
        "JWT for authentication",
        "Stripe for payment",
      ],
      features: [
        {
          page: "home-page",
          image: "",
          content: [
            "User can browse the hotels room on home page.",
            "Search by location, dates or number of bed, the filtered hotels will render under the search-bar.",
            "Click on a hotel card will redirect to the hotel's details page.",
          ],
        },
        {
          page: "auth-page",
          image: "",
          content: ["User can register or login to access the dashboard."],
        },
        {
          page: "hotel-detials-page",
          image: "",
          content: [
            "User can click the booking button and will be bring to the stripe payment page.",
          ],
        },
        {
          page: "dashboard-page",
          image: "",
          content: [
            "The booking order will display on the list.",
            "User can also connect and create a stripe account to access the seller-dashboard.",
          ],
        },
        {
          page: "seller-dashboard-page",
          image: "",
          content: [
            "User can also connect and create a stripe account to access the seller-dashboard.",
          ],
        },
        {
          page: "add-hotel-page",
          image: "",
          content: ["Seller can post hotel rooms from the add hotel page."],
        },
      ],
    },
  },
  {
    name: "E-Commerce-Website",
    description:
      "A single-page e-commerce website application build with React.js and redux-saga.",
    tech: ["React.js", "Firebase"],
    selected: true,
  },
  {
    name: "Personal-Portfolio-Website",
    description:
      "My personal portfolio website for introduce my-self, and the collection of my projects. This website contain a typical page and also a 3D game mode.",
    tech: ["Next.js", "React.js"],
    selected: true,
  },
];

export const skillsData = [
  { title: "HTML", description: "HTML 5" },
  { title: "CSS", description: "CSS 3" },
  { title: "javascript", description: "ES6" },
  { title: "react.js", description: "Front-end Library" },
  { title: "next.js", description: "Full-stack Framework" },
  { title: "node.js", description: "Back-end Runtime" },
  { title: "express.js", description: "Server Framework" },
  { title: "mongoDB", description: "NoSQL Database" },
];
