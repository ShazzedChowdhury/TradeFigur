import React from "react";
import BrandLogo from "../../../components/BrandLogo/BrandLogo";
import Section from "../../../components/Section";
import google from "../../../assets/partners-logo/google.png";
import meta from "../../../assets/partners-logo/meta.png";
import linkedin from "../../../assets/partners-logo/linkedin.png";
import shopify from "../../../assets/partners-logo/shopify.png";

const PartnersSection = () => {
    const partners = [
      { img: google, name: "Google" },
      { img: meta, name: "Meta" },
      { img: shopify, name: "Shopify" },
      { img: linkedin, name: "LinedIn" },
    ];
  return (
    <Section customPadding="px-0 md:px-0" customWidth="max-w-5xl w-full mx-auto">
      <BrandLogo data={partners} />
    </Section>
  );
};

export default PartnersSection;
