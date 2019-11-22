import React from 'react';
import Page from './Page';

const myProjects = [
  {
    name: 'UberEats',
    img: 'ubereats.jpg',
    used: 'HTML, CSS',
    io: 'https://olgalyubicheva.github.io/layout_uber-eats/',
    gh: 'https://github.com/OlgaLyubicheva/layout_uber-eats'
  },
  {
    name: 'ToDo',
    img: 'todo.jpg',
    used: 'HTML, CSS, Javascript, React',
    io: 'https://olgalyubicheva.github.io/react_todo-app/',
    gh: 'https://github.com/OlgaLyubicheva/react_todo-app'
  },
  {
    name: 'Calendar',
    img: 'calendar.jpg',
    used: 'HTML, CSS, Javascript, React, FullCalendar library',
    io: 'https://olgalyubicheva.github.io/jointoit-test/',
    gh: 'https://github.com/OlgaLyubicheva/jointoit-test'
  },
  {
    name: 'Phone Catalog',
    img: 'phonecatalog.jpg',
    used: 'HTML, CSS, Javascript, React',
    io: 'https://olgalyubicheva.github.io/react_phone-catalog/',
    gh: 'https://github.com/OlgaLyubicheva/react_phone-catalog'
  }
];

const MyWork = () => {
  return (
    <Page title='My Work' smTitle='Check out some of my projects...'>
      <div className="projects">
        {
          myProjects.map(item => (
            <MyWork.WorkCard project={item}/>
          ))
        }
      </div>
    </Page>
  );
};

MyWork.WorkCard = ({ project }) => {
  return (
    <div className="projects__item">
      <a href={project.io} className="projects__img">
        <img src={`img/projects/${project.img}`} alt={project.name}/>

        <div className="projects__info">
          <h3>{project.name}</h3>
          <p>
            Technologies used:
            <br/>
            {project.used}
          </p>
        </div>
      </a>

      <a href={project.io} className="btn btn-light">
        <i className="fas fa-eye"></i>
        Project
      </a>

      <a href={project.gh} className="btn btn-dark">
        <i className="fab fa-github"></i>
        GitHub
      </a>
    </div>
  );
};

export default MyWork;