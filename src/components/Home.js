import React from 'react';

const Home = () => {
  return (
    <main className="home">
      <h1 className="lg-heading">
        Olga
        <span className="text-secondary"> Liubicheva</span>
      </h1>

      <h2 className="sm-heading">
        Front-end developer
      </h2>
      <div className="icons">
        <a href="https://www.linkedin.com/in/olga-lyubicheva-300984190/" className="icon">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>

        <a href="https://github.com/OlgaLyubicheva" className="icon">
          <i className="fab fa-github fa-2x"></i>
        </a>

        <a href="https://t.me/Insectum_San" className="icon">
          <i class="fab fa-telegram-plane fa-2x"></i>
        </a>
      </div>

    </main>
  );
};

export default Home;