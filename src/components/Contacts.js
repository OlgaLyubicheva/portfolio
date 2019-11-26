import React from 'react';
import Page from './Page';

const Contacts = () => {
  return (
    <Page title='Contact Me' smTitle='This is how you can reach me...'>
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

      <div className="boxes">
        <Contacts.Box bLabel='Email: '>
          forjobslov@gmail.com
        </Contacts.Box>

        <Contacts.Box bLabel='Telephone: '>
          +380(97)526-73-51
        </Contacts.Box>

        <Contacts.Box bLabel='Skype: '>
          Olga Liubicheva
        </Contacts.Box>
      </div>
    </Page>
  );
};

Contacts.Box = ({ bLabel,  children}) => (
  <div className="boxes__box">
    <span className="text-secondary">{bLabel}</span>
    {'\n'}
    {children}
  </div>
);


export default Contacts;