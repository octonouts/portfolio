import React from "react";
import Daryl from '../../assets/images/daryl-wide-photo-reduced.png';
import '../styles/About.css'

function About() {
  return (
      <div>
          <img className="center" src={Daryl} alt="Daryl Nauman" />

          <section>
              <h2>About Me</h2>
              <p>
                  Full-Stack web developer with an Executive MBA and leadership
                  experience at post-secondary institutions. Earned a
                  certificate in full-stack web development from the University
                  of Toronto School of Continuing Studies covering topics
                  including HTML, CSS, JavaScript, Node.js, MySQL, MongoDB and
                  React. A versatile and dependable individual who loves
                  learning, problem-solving, and advancing team and client
                  goals. Known for providing sound judgment, having attention
                  to detail and a passion for leveraging technology to improve
                  lives. I am based out of Burlington, Ontario.
              </p>
          </section>
      </div>
  );
}

export default About;