import React, { useEffect, useRef, useState } from 'react';

const Description = ({content, customStyle, state, isSubtitle=false}) => {
  const [heigth, setHeight] = useState("140")
  const contentRef = useRef(null);

  useEffect(() => {
    if(state) {
      setHeight(contentRef?.current.scrollHeight)
    } else {
      setHeight("140")
    }
  }, [state])
    return (
      <p
        style={{ height: !isSubtitle && `${heigth}px` }}
        ref={contentRef}
        className={`custom_font_color ${
          customStyle || ""
        } transition-[height] duration-1000 overflow-hidden`}
      >
        {isSubtitle || state ? content : `${content.slice(0, 400)}...`}
      </p>
    );
};

export default Description;