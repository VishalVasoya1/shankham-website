import CaseStudies from "./components/layouts/case-studies";
import Companies from "./components/layouts/companies";
import CTASection from "./components/layouts/cta-section";
import HeroSection from "./components/layouts/hero-section";
import Testimonials from "./components/layouts/testimonials";
import WhatWeDo from "./components/layouts/what-we-do";
import WhyChooseUs from "./components/layouts/why-choose-us";

const Page = () => {
  return (
    <>
      <HeroSection />
      <Companies />
      <WhatWeDo />
      <WhyChooseUs />
      <CaseStudies />
      <Testimonials />
      <CTASection />
    </>
  );
};

export default Page;
