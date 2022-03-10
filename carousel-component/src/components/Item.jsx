import React from 'react';
import { projects } from '../data';

const Item = () => {
  return (
    <>
      {projects.map((project, index) => {
        return <img src={project.image} alt="project-image" />;
      })}
    </>
  );
};

export default Item;
