import React from 'react';
import './styles/Project.css';


function Project(props) {

  return (
    <div className="card m-2">

      <h5 className="card-header">{props.title}</h5>

      <div className="card-body">
        <img src={props.image} className="card-img-top" alt={props.alt} />
      </div>

      <div className="footer mx-auto mb-4">
        <a href={props.repository} rel="noreferrer" target="_blank" className="btn btn-primary">Repository</a>
        <a href={props.deployed} rel="noreferrer" target="_blank" className="btn btn-primary">Deployed</a>
      </div>
      
    </div>
  );
}

export default Project;