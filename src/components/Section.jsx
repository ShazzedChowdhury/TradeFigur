import React from 'react';

const Section = ({ children, style, customWidth="container", customPadding="mx-auto px-5" }) => {
  return (
    <section
      className={`${customWidth} ${customPadding} md:px-10 ${
        style && style
      }`}
    >
      {children}
    </section>
  );
};

export default Section;