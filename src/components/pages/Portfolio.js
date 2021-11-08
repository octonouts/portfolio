import React from "react";
import Project from "../Project";
import Images from '../../assets/images/projects';

const projects = [
  {
    title: "Plan Your Trip",
    image: Images.planYourTripScreenshot,
    alt: "screenshot of website with navigation bar",
    repository: "https://github.com/darylnauman/cold-travel-planner",
    deployed: "https://intense-savannah-61016.herokuapp.com/"
  },
  {
    title: "Find My Coder",
    image: Images.findMyCoderScreenshot,
    alt: "screenshot of Find My Coder landing page",
    repository: "https://github.com/AnaMolly/Code_Solutions",
    deployed: "https://find-my-coder.herokuapp.com/"
  },
  {
    title: "Weather Dashboard",
    image: Images.weatherDashboardScreenshot,
    alt: "screenshot of weather dashboard website with current city weather and five-day forecast",
    repository: "https://github.com/darylnauman/weather-dashboard",
    deployed: "https://darylnauman.github.io/weather-dashboard/"
  },
  {
    title: "Film Dimension",
    image: Images.filmDimensionScreenshot,
    alt: "screenshot of website with moview review and trailer",
    repository: "https://github.com/andresaponte22/film-dimension",
    deployed: "https://andresaponte22.github.io/film-dimension/"
  },
  {
    title: "Techmania",
    image: Images.techBlogScreenshot,
    alt: "screenshot of tech blog post if not author of post to comment",
    repository: "https://github.com/darylnauman/tech-blog",
    deployed: "https://polar-badlands-86538.herokuapp.com/"
  },
  {
    title: "Employee Tracker",
    image: Images.employeeTrackerScreenshot,
    alt: "screenshot of application ",
    repository: "https://github.com/darylnauman/employee-tracker",
    deployed: "https://github.com/darylnauman/employee-tracker"
  },
  {
    title: "Code Refractor",
    image: Images.horiseonScreenshot,
    alt: "screenshot of website with people around desk",
    repository: "https://github.com/darylnauman/Code_Refactor",
    deployed: "https://darylnauman.github.io/Code_Refactor/"
  },
  {
    title: "Spacestagram",
    image: Images.spacestagramScreenshot,
    alt: "screenshot of main page with cards of space images and descriptions",
    repository: "https://github.com/darylnauman/spacestagram/",
    deployed: "https://darylnauman.github.io/spacestagram/"
  },
];

function Portfolio() {
  return (
    <section>
      <h2>Portfolio</h2>
      <div className="work-container">
        {projects.map( (project) =>
          <Project title={project.title} image={project.image} alt={project.alt} repository={project.repository} deployed={project.deployed}/>
        )}
      </div>
    </section>
  );
}

export default Portfolio;

  // title: "Professional Portfolio",
  // image: Images.portfolioPageScreenshot,
  // alt: "screenshot of portfolio website",
  // repository: "https://github.com/darylnauman/portfolio-page",
  // deployed: "https://darylnauman.github.io/portfolio-page/"