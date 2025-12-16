import React from 'react';

const Section = ({children, style}) => {
    return (
       <section className={`container mx-auto p-5 ${style && style}`}>
        {children}
       </section>
    );
};

export default Section;