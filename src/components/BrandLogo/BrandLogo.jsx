import React from 'react';
import Marquee from "react-fast-marquee";

const BrandLogo = ({data}) => {

    return (
      <div className="overflow-hidden w-full">
        <Marquee
          autoFill={true}
          pauseOnHover={true}
          gradient={true}
          gradientColor="#0f0717"
        >
          {data.map((singleData) => {
            return (
              <div className="my-0 mx-7 flex gap-2 items-center">
                <img
                  className="h-10 w-auto"
                  src={singleData?.img}
                  alt={singleData?.name}
                />
                <h5 className="text-white font-semibold">{singleData?.name}</h5>
              </div>
            );
          })}
        </Marquee>
      </div>
    );
};

export default BrandLogo;