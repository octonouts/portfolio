import React from "react";
import Icons from "../../assets/images/icons";

const proficiencies = [
  {
    name: "HTML",
    image: Icons.html,
    alt: "HTML icon"
  },
  {
    name: "CSS",
    image: Icons.css,
    alt: "CSS icon"
  },
  {
    name: "JavaScript",
    image: Icons.javascript,
    alt: "JavaScript icon"
  },
  {
    name: "jQuery",
    image: Icons.jquery,
    alt: "jQuery icon"
  },
  {
    name: "Bootstrap",
    image: Icons.bootstrap,
    alt: "Bootstrap icon"
  },
  {
    name: "Node",
    image: Icons.node,
    alt: "Node icon"
  },
  {
    name: "mySQL",
    image: Icons.mysql,
    alt: "mySQL icon"
  },
  {
    name: "MongoDB",
    image: Icons.mongodb,
    alt: "MongoDB icon"
  },
  {
    name: "React",
    image: Icons.react,
    alt: "React icon"
  },
  {
    name: "GraphQL",
    image: Icons.graphql,
    alt: "GraphQL icon"
  }
]

function Resume() {
  return (
    <section>
      <h2>Resume &amp; Proficiencies</h2>
      
      <h3>Resume</h3>
      
      <p>
        <a href="https://drive.google.com/file/d/11uytLHmNLSSHPU2tjGtsYL25xmEh4aeY/view?usp=sharing" rel="noreferrer" target="_blank">Download my resume (PDF)</a>
      </p>

      <h3> Proficiencies </h3>

      <div className="row" style={{display:'flex', justifyContent:'space-around'}}>
        { proficiencies.map( (proficiency) =>     
          <div className="card mb-3" style={{maxWidth: '500px', margin: '10px', borderColor: 'var(--color-lighter-blue)'}} key={proficiency.name}>
            <div className="row g-0">
              <div className="col-md-4 my-auto">
                <img src={proficiency.image} className="img-fluid" style={{padding: "10px"}} alt={proficiency.alt} />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title pt-3">{proficiency.name}</h5>
                </div>
              </div>
            </div>
          </div>
          )
        }
      </div>

    </section>
  );
}

export default Resume;