import React, { useState } from "react";
import keeper from "./Images/keeper.png";
import notes from "./Images/notes.png";
import carrental from "./Images/car-rental.png";
import pokeglance from "./Images/pokeglance.png";
import education_template from "./Images/education_template.png";
import NetflixClone from "./Images/NetflixClone.png";
import todo from "./Images/todo.png";
import Portfolio from "./Images/Portfolio.png";

const projects = [
  
  {
    id: "popup7",
    title: "Car Rental",
    image: carrental,
    about: "A car rental website with an easy-to-use interface.",
    link: "https://pokeglance.netlify.app",
    features: [
      "Smart Search – Quickly find any Pokémon by name, type, or ID with instant results.",
      "Detailed Profiles – Explore each Pokémon’s stats, abilities, types, evolutions, and more.",
      "Clean UI – Enjoy a modern, user-friendly interface designed for smooth navigation.",
      "Responsive Design – Fully optimized for desktop, tablet, and mobile devices."
    ]
  },
  {
    id: "popup6",
    title: "PokeGlance",
    image: pokeglance,
    about: "A car rental website with a clean UI.",
    link: "https://luxurious-car-rental.netlify.app",
    features: [
      "Easy Booking – Choose date, time, and location to book your car.",
      "Vehicle Selection – Browse cars by type, brand, price, and features.",
      "Secure Payments – Pay safely online with instant booking confirmation.",
      "User Dashboard – View and manage all your bookings in one place.",
      "24/7 Support – Get help anytime with customer service and roadside assistance."
    ]
  },
  {
    id: "popup8",
    title: "Personal Portfolio",
    image: Portfolio, 
    about: "A modern, responsive personal portfolio website showcasing my work, skills, and contact information.",
    link: "https://myportfolioprakash.netlify.app/",
    features: [
      "Hero Section – Engaging introduction with name, role, and quick action buttons.",
      "Project Highlights – Interactive project cards with modal popups detailing each project.",
      "Service Section – Visual representation of offered services using clean cards and icons.",
      "Responsive Design – Fully optimized layout for desktop, tablet, and mobile viewing.",
      "Contact Form – Easily accessible contact form integrated with Web3Forms for form submission.",
      "Smooth Animations – Enhanced user experience with AOS-based scroll animations."
    ]
  },
  {
    id: "popup1",
    title: "Keeper",
    image: keeper,
    about: "Keeper where you can add and delete notes",
    link: "https://keeper-notescopy.netlify.app",
    features: [
      "Save Notes – Easily create and save notes.",
      "Edit Notes – Modify and update your notes anytime.",
      "Delete Notes – Remove unwanted notes with a simple click.",
      "Store Notes – Your notes persist even after reloads."
    ]
  },
  
  {
    id: "popup5",
    title: "Todo App",
    image: todo,
    about: "A Todo App built with React.",
    link: "https://to-do-prakash.netlify.app",
    features: [
      "Add Tasks – Users can input new tasks seamlessly.",
      "Edit Tasks – Existing tasks can be modified to reflect changes.",
      "Delete Tasks – Unwanted tasks can be removed effortlessly.",
      "Mark as Completed – Tasks can be marked to indicate completion status.",
      "Responsive Design – The application is fully responsive, ensuring usability across various devices."
    ]
  },
  {
    id: "popup2",
    title: "Notes",
    image: notes,
    about: "A Notes website where you can write important points.",
    link: "https://prakash0196.github.io/Notes/",
    features: [
      "Save Notes – Easily create and save notes.",
      "Edit Notes – Modify and update your notes anytime.",
      "Delete Notes – Remove unwanted notes with a simple click.",
      "Store Notes – Your notes persist even after reloads."
    ]
  },
  {
    id: "popup3",
    title: "Education Template",
    image: education_template,
    about: "Frontend Design of an Education Template.",
    link: "https://6809fc8d319a79ddfcaa41d5--verdant-swan-f3f244.netlify.app",
    features: [
      "Education Template Frontend Design"
    ]
  },
  {
    id: "popup4",
    title: "Netflix Front-end Design",
    image: NetflixClone,
    about: "Frontend Design of a Netflix clone.",
    link: "https://aquamarine-bublanina-bf8122.netlify.app",
    features: [
      "Netflix Frontend Design"
    ]
  }
];

const Popup = ({ project, onClose }) => {
  if (!project) return null;
  return (
    <div className="popup active">
      <button type="button" className="btn btn-danger popup-link" onClick={onClose}>
        Close
      </button>
      <hr />
      <h2>{project.title}</h2>
      <img src={project.image} alt={project.title} />
      <div className="py-2 pt-3">
        <h3>About the Project</h3>
        <p>{project.about}</p>
      </div>
      <div className="pl-20">
        <ul>
          {project.features.map((feature, index) => (
            <li key={index}><strong>{feature}</strong></li>
          ))}
        </ul>
        <a href={project.link} target="_blank" rel="noopener noreferrer">Go to the site</a>
      </div>
    </div>
  );
};

export const Project = () => {
  const [activePopup, setActivePopup] = useState(null);

  const handleOpen = (popupId) => {
    const project = projects.find((proj) => proj.id === popupId);
    setActivePopup(project);
  
    // Save scroll position and freeze scroll
    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.dataset.scrollY = scrollY;
    
  };
  
  const handleClose = () => {
    const scrollY = document.body.dataset.scrollY;
  
    // Restore scroll position
    document.body.style.position = "";
    document.body.style.top = "";
    window.scrollTo(0, parseInt(scrollY || "0"));
    document.body.removeAttribute("data-scroll-y");
  
    setActivePopup(null);
  };
  
  

  return (
    <section className="blog py-5">
      <div id="blur" className={activePopup ? "active" : ""}>
        <div className="container py-5" id="blog">
          <h1 className="text-center pb-5">Projects.</h1>
          <p className="text-center">scroll right to see more --</p>

          <div className="row blog-card py-5">
            {projects.map((project) => (
              <div className="col-lg-4 blog-item mb-3 blog-scale blog-card-scroll" key={project.id}>
                <div className="card">
                  <img src={project.image} style={{ width: "100%" }} className="img-fluid" alt="" />
                  <small className="px-3 py-3 font-weight-bold">Web Design</small>
                  <h5 className="font-weight-bold px-3">{project.title}</h5>
                  <a
                    className="font-weight-bold px-3 pb-4 popup-link"
                    onClick={() => handleOpen(project.id)}
                  >
                    <u>Read More</u>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {activePopup && <Popup project={activePopup} onClose={handleClose} />}
    </section>
  );
};
