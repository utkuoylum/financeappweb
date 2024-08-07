"use client"

import StoreLinks, { BtnTypes } from "../common/StoreLinks";
import Phone from "../assets/mockup.svg";
import { Fade } from "react-awesome-reveal";

function Hero() {
  return (

    <section className="relative mt-4 flex h-fit max-w-7xl flex-col items-center gap-10 px-8 sm:gap-16 md:my-0 md:h-[84.9vh] md:flex-row md:gap-0 lg:px-12 xl:m-auto xl:gap-0 xl:overflow-hidden">
      
      <div className="sm:w-full md:w-3/6">
        <Fade cascade direction="left" delay={400} damping={1e-1} triggerOnce={true}>
            <h1 className="mx-auto mb-8 w-[12ch] text-center text-4xl font-semibold text-gray-800 sm:text-5xl md:mx-0 md:text-left">
              Start spending the smart way
            </h1>
        </Fade>
          
        <Fade cascade direction="left" delay={600} damping={1e-1} triggerOnce={true}>
          <p className="m-auto w-[34ch] text-center text-gray-500 md:m-0 md:text-left">
            Take Control of Your Finances Anytime, Anywhere with Paydrop.
            Discover the Smart Way to Use Your Money!
          </p>
        </Fade>  
          
        <Fade cascade direction="left" delay={800} damping={1e-1} triggerOnce={true}>
          <StoreLinks type={BtnTypes.Standard} />
        </Fade>
        
      </div>

      <div className="md:w-3/6 xl:mb-12 xl:overflow-hidden">
        <Fade cascade direction="right" delay={800} damping={1e-1} triggerOnce={true}>
          <img
              className="right-0 m-auto xl:left-6 xl:right-0 xl:mt-8 xl:w-11/12"
              src={Phone}
              alt="app frame"
            />
        </Fade>
      </div>
    </section>
  );
}

export default Hero;
