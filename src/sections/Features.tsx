"use client"

import AppFrame from "../assets/app_frame.png";
import ShieldCheck from "../assets/icons/check.png";
import Coins from "../assets/icons/coins.png";
import Frames from "../assets/frames.png";

import { Fade } from "react-awesome-reveal";

function Features() {
  return (
    <section
      id="features"
      className="flex max-w-7xl flex-col gap-10 px-8 pt-10 lg:px-12 xl:m-auto xl:pt-20"
    >
      <article className="m-auto w-[30ch] text-center text-gray-500 md:m-0 md:w-full">
        <Fade cascade direction="up" delay={400} damping={1e-1} triggerOnce={true}>
          <h2 className="mb-4 text-4xl font-semibold text-gray-800">
            Make every penny count
          </h2>
        </Fade>

        <Fade cascade direction="up" delay={600} damping={1e-1} triggerOnce={true}>
          <p>
            Spend smarter, lower your bills, get cashback on everything you buy,
            <br />
            and unlock credit to grow your business.
          </p>
        </Fade>
      </article>

      <article className="flex w-full flex-col gap-8 overflow-hidden xl:h-96 xl:flex-row">
        <div className="flex flex-col rounded-2xl bg-sky-100 px-4 sm:px-0 md:flex-row md:gap-8 xl:w-2/3">
          
          <div className="mt-10 flex flex-col justify-center gap-4 text-center sm:mx-10 md:mx-0 md:ml-10 md:w-1/2 md:text-left">
            <Fade cascade direction="left" delay={400} damping={1e-1} triggerOnce={true}>
              <h2 className="m-auto text-center text-3xl font-semibold text-gray-800 sm:w-[18ch] md:m-0 md:text-left">
                  Pay with Paydrop, quick, simple and easy
                </h2>
            </Fade>

            <Fade cascade direction="left" delay={600} damping={1e-1} triggerOnce={true}>
              <p className="m-auto text-center text-gray-500 sm:w-[34ch] md:m-0 md:text-left">
                Paying your bills on paydrop has never been easier. Whether you
                are paying for electricity or internet, paydrop gets it done
                within seconds.
              </p>
            </Fade>
          </div>

          <div className="m-auto mt-10 max-w-72 md:mx-10 md:w-1/2 lg:mx-0">
            <Fade cascade direction="right" delay={800} damping={1e-1} triggerOnce={true}>
              <img src={AppFrame} alt="Paydrop app frame" />
            </Fade>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-4 rounded-2xl bg-indigo-100 p-10 xl:w-1/3">

          <Fade cascade direction="up" delay={400} damping={1e-1} triggerOnce={true}>
            <div className="w-fit rounded-full bg-indigo-200 p-4">
              < img src={ShieldCheck} alt="" />
            </div>
          </Fade>
          <Fade cascade direction="up" delay={600} damping={1e-1} triggerOnce={true}>
            <h2 className="text-3xl font-semibold text-gray-800">
              Bank level security
            </h2>
          </Fade>

          <Fade cascade direction="up" delay={800} damping={1e-1} triggerOnce={true}>
            <p className="text-gray-500">
              Your money is 100% safe and secure on Paydrop. No hassles, no
              glitches, get access to your money anytime.
            </p>
          </Fade>
        </div>
      </article>

      <article className="flex w-full flex-col gap-8 xl:h-96 xl:flex-row">
        <div className="flex flex-col justify-center gap-4 rounded-2xl bg-orange-100 p-10 xl:w-1/3">
          <Fade cascade direction="up" delay={400} damping={1e-1} triggerOnce={true}>
            <div className="w-fit rounded-full bg-orange-200 p-4">
              <img src={Coins} alt="" />
            </div>
          </Fade>

          <Fade cascade direction="up" delay={600} damping={1e-1} triggerOnce={true}>
            <h2 className="text-3xl font-semibold text-gray-800">
              Cost reduction
            </h2>
          </Fade>

          <Fade cascade direction="up" delay={800} damping={1e-1} triggerOnce={true}>
            <p className="text-gray-500">
              Paydrop reduced payments maintenance and processing fees. No hidden
              fees.
            </p>
          </Fade>
        </div>

        <div className="flex flex-col gap-8 overflow-hidden rounded-2xl bg-sky-100 px-4 sm:px-0 md:flex-row md:gap-8 xl:w-2/3">

          <div className="mt-10 flex flex-col justify-center gap-4 text-center sm:mx-10 md:mx-0 md:ml-10 md:mt-0 md:w-1/2 md:text-left">
            <Fade cascade direction="right" delay={400} damping={1e-1} triggerOnce={true}>
              <h2 className="m-auto text-center text-3xl font-semibold text-gray-800 sm:w-[18ch] md:m-0 md:text-left">
                  Send, receive and Exchange money
                </h2>
            </Fade>

            <Fade cascade direction="right" delay={600} damping={1e-1} triggerOnce={true}>
              <p className="m-auto text-center text-gray-500 sm:w-[34ch] md:m-0 md:text-left">
                  Transfers, payments all work on Paydrop. Get your alert message
                  immediately after a completed transaction.
                </p>
            </Fade>
          </div>

          <div className="m-auto max-w-96 md:mt-36 md:w-1/2">
            <Fade cascade direction="left" delay={800} damping={1e-1} triggerOnce={true}>
              <img
                  src={Frames}
                  alt="Frame displaying logos of various payment solutions"
                />
            </Fade>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Features;
