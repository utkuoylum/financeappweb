"use client"

import PaydropLight from "../assets/logos/paydrop_logo_bright.png";
import StoreLinks, { BtnTypes } from "../common/StoreLinks";
import Twitter from "../assets/logos/icons8-twitterx.svg";
import Facebook from "../assets/logos/icons8-facebook.svg";
import Linkedin from "../assets/logos/icons8-linkedin.svg";

import { Fade } from "react-awesome-reveal";

function Footer() {
  return (
    <section className="bg-gray-800">

      <div className="flex max-w-7xl flex-col px-8 py-12 text-gray-300 lg:px-12 xl:m-auto">
        <div className="flex flex-col justify-between gap-12 md:flex-row md:gap-0">
          <Fade cascade direction="left" delay={400} damping={1e-1} triggerOnce={true}>
            <div>
              <img
                className="mb-4 w-36"
                src={PaydropLight}
                alt="Light version of Kobodrop logo"
              />
              <p>Start spending the smart way</p>
            </div>
          </Fade>
          
          <div className="flex gap-10">
            <Fade cascade direction="up" delay={400} damping={1e-1} triggerOnce={true}>
              <div className="flex flex-col gap-2">
                  <p className="text-gray-400">Product</p>
                  <a href="#">Overview</a>
                  <a href="#">Features</a>
                  <a href="#">Solutions</a>
                  <a href="#">Contact</a>
                  <a href="#">Releases</a>
                </div>
            </Fade>

            <Fade cascade direction="up" delay={600} damping={1e-1} triggerOnce={true}>
              <div className="flex flex-col gap-2">
                  <p className="text-gray-400">Resources</p>
                  <a href="#">Blog</a>
                  <a href="#">Newsletter</a>
                  <a href="#">Events</a>
                  <a href="#">Help Centre</a>
                  <a href="#">Support</a>
                </div>
            </Fade>
          </div>

          <Fade cascade direction="right" delay={600} damping={1e-1} triggerOnce={true}>
            <div className="w-fit">
              <h2>Get the app</h2>
              <StoreLinks type={BtnTypes.Variant} />
            </div>
          </Fade>
          
        </div>

        <div className="mt-14 flex justify-between border-t-2 border-t-gray-700 pt-10">
          <Fade cascade direction="up" delay={400} damping={1e-1} triggerOnce={true}>
            <p className="w-[16ch] text-gray-400 md:w-full">
              &copy; 2024 Paydrop. All rights reserved.
            </p>
          </Fade>
            
          <Fade cascade direction="up" delay={600} damping={1e-1} triggerOnce={true}>
            <div className="flex gap-6">
                <a href="https://twitter.com" target="_blank">
                  <img src={Twitter} alt="Twitter logo" />
                </a>
                <a href="https://www.facebook.com" target="_blank">
                  <img src={Facebook} alt="Facebook logo" />
                </a>
                <a href="https://www.linkedin.com" target="_blank">
                  <img src={Linkedin} alt="Linkedin logo" />
                </a>
              </div>
          </Fade>
          
        </div>
      </div>
    </section>
  );
}

export default Footer;
