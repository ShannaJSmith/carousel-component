import './App.css';
import Carousel from 'react-elastic-carousel';
import { projects } from './data';
import React, { useState } from 'react';

function App() {
  // eslint-disable-next-line
  const [items, setItems] = useState(projects);
  return (
    <>
      <div className="App">
        <h1>Carousel</h1>
        <Carousel>
          {items &&
            items.map((project) => {
              return <img src={project.image} alt="project" key={project.id} />;
            })}
        </Carousel>
      </div>
    </>
  );
}

export default App;
