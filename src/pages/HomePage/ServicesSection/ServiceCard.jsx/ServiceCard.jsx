import React, { useEffect, useState } from "react";
import Title from "../../../../components/Title/Title";

const ServiceCard = ({ service, Icon }) => {
  const features = service.serviceFeatures;
  return (
    <div
      className={`bg-[#140b1e] rounded-md p-5 custom_font_color font-semibold flex flex-col justify-between border border-gray-700 hover:border-[#5831C3] transition-all duration-1500 group h-120`}
    >
      <div className="space-y-2">
        <div className="w-20 h-20 gradient_color place-items-center place-content-center rounded-md">
          <Icon
            className={
              "text-4xl  text-[#a69daf] group-hover:text-[#fafafa] transition duration-1500 group-hover:scale-110"
            }
          />
        </div>
        <Title gradientContent={service?.serviceTitle} customStyle={"text-xl"} />
        <h4>Goal: {service?.goal}</h4>
        <span>
          Includes:
          {
            <ul className="list-disc list-outside pl-5 text-[0.8rem]">
              {features.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          }
        </span>
      </div>
    </div>
  );
};

export default ServiceCard;
