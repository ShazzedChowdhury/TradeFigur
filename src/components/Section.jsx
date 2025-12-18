import React from 'react';

const Section = ({
  children,
  style,
  customWidth = "container",
  customPaddingX = "mx-auto px-5 md:px-10",
  customPaddingY 
}) => {
  return (
    <section className={`${customWidth} ${customPaddingY} ${customPaddingX} ${style && style}`}>
      {children}
    </section>
  );
};

export default Section;