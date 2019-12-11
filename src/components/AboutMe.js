import React from 'react';
import Page from './Page';

const blocks = [
  {
    title: 'Hard skills',
    text: '❏ React, Redux, JavaScript\n\
    ❏ CSS3, HTML5, Sass(SCSS)\n\
    ❏ Git, NPM, Eslint\n\
    ❏ Photoshop'
  },
  {
    title: 'Education',
    text: 'Donetsk National University\n\
    Mathematics department (Specialization Information Technology)\n\
    MA Degree'
  },
  {
    title: 'Self- Education',
    text: 'Freecodecamp (HTML, CSS, JavaScript)\n\
    Learn.javascript.ru​ , ​ reactjs.org​ , ​ redux.js.org​ (JS, React\\Redux)'
  }
];

const AboutMe = () => {
  return (
    <Page title='About Me' smTitle='Let me tell you a few things...'>
      <div className="about__info">
        <img
          src="img/portrait/portrait-lg.jpg"
          alt="Olga Liubicheva"
          className="about__bio-img portrait"
        />
        <div className="about__bio-text">
          <h3 className="text-secondary">
            BIO
            <a href="CV_Liubicheva_O.pdf" download className="icon" title="Load CV in pdf">
              <i class="fas fa-file-download"></i>
            </a>
          </h3>
          
          <p>A responsible, hardworking, careful and positive person, 
            look for the position of Front-End developer and eager to 
            be a part of the friendly team. I’m very motivated to grow up and
            improve my skills as a developer. I well with HTML5&CSS3, JavaScript,
            have some experience in creating adaptive layouts and working with React.js.
          </p>
        </div>

        {
          blocks.map(block => (
            <AboutMe.JobCard title={block.title}>
              {block.text.split('\n').map(item => (
                <span>{item}</span>
              ))}
            </AboutMe.JobCard>
          ))
        }
      </div>
    </Page>
  );
};

AboutMe.JobCard = ({ title, children }) => (
  <div className="about__jobs">
    <h3>{title}</h3>
    <p>
      {children}
    </p>
  </div>
);

export default AboutMe;