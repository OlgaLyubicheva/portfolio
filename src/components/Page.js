import React from 'react';

const Page = ({ title, smTitle, customClass, children }) => {
  const titleWords = title.split(' ');
  return (
    <main className={`page ${customClass}`}>
      <h1 className="lg-heading">
        {titleWords[0]}
        <span className="text-secondary">{` ${titleWords[1]}`}</span>
      </h1>

      <h2 className="sm-heading">
        {smTitle}
      </h2>

      {children}
    </main>
  );
};

export default Page;