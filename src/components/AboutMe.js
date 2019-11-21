import React from 'react';

const AboutMe = () => {
  return (
    <main className="about">
      <h1 className="lg-heading">
        About
        <span className="text-secondary">Me</span>
      </h1>

      <h2 className="sm-heading">
        Let me tell you a few things...
      </h2>

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

        <div className="about__jobs">
          <h3>Title 1</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur 
            adipisicing elit. Reiciendis adipisci atque, 
            eaque corrupti delectus non nihil iste cumque 
            nobis provident.
          </p>
        </div>
        <div className="about__jobs">
          <h3>Title 1</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur 
            adipisicing elit. Reiciendis adipisci atque, 
            eaque corrupti delectus non nihil iste cumque 
            nobis provident.
          </p>
        </div>
        <div className="about__jobs">
          <h3>Title 1</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur 
            adipisicing elit. Reiciendis adipisci atque, 
            eaque corrupti delectus non nihil iste cumque 
            nobis provident.
          </p>
        </div>
      </div>
    </main>
  );
};

export default AboutMe;