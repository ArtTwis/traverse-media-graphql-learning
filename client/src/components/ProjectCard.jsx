import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className='col-md-3'>
      <div className='card mb-3'>
        <div className='card-body'>
          <p className='card-title'>
            <strong>{project.name}</strong>
          </p>
          <p className='small'>
            Status: <strong>{project.status}</strong>
          </p>
          <a className='btn btn-secondary' href={`/project/${project.id}`}>
            View
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
