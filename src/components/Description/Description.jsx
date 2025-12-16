import React from 'react';

const Description = ({content, style, state}) => {
    return (
       <p className={`custom_font_color ${style || ""}`}>
        {state ? content : `${content.slice(0, 400)}...`}
       </p>
    );
};

export default Description;