import React from 'react';
import Page from './Page';

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
          <h3 className="text-secondary">BIO</h3>
          <p>Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Dolores optio nulla veniam 
            officia sit, nobis ut voluptatibus sapiente, 
            accusantium reiciendis porro vitae iusto recusandae 
            excepturi non consequuntur esse eum vero?
          </p>
        </div>

        <AboutMe.JobCard title='Title 1'>
          Lorem ipsum dolor sit, amet consectetur 
          adipisicing elit. Reiciendis adipisci atque, 
          eaque corrupti delectus non nihil iste cumque 
          nobis provident.
        </AboutMe.JobCard>

        <AboutMe.JobCard title='Title 1'>
          Lorem ipsum dolor sit, amet consectetur 
          adipisicing elit. Reiciendis adipisci atque, 
          eaque corrupti delectus non nihil iste cumque 
          nobis provident.
        </AboutMe.JobCard>

        <AboutMe.JobCard title='Title 1'>
          Lorem ipsum dolor sit, amet consectetur 
          adipisicing elit. Reiciendis adipisci atque, 
          eaque corrupti delectus non nihil iste cumque 
          nobis provident.
        </AboutMe.JobCard>
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