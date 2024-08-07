"use client"

import Klarna from "../assets/logo-wall/klarna.png";
import Stripe from "../assets/logo-wall/stripe.png";
import PayPal from "../assets/logo-wall/paypal.png";
import Bedc from "../assets/logo-wall/bedc.png";
import Mastercard from "../assets/logo-wall/mastercard.png";
import Mtn from "../assets/logo-wall/mtn.png";
import Airtel from "../assets/logo-wall/airtel.png";
import Payoneer from "../assets/logo-wall/payoneer.png";
import Visa from "../assets/logo-wall/visa.png";
import Mobile from "../assets/logo-wall/mobile.png";
import Ikeja from "../assets/logo-wall/ikeja.png";
import Dstv from "../assets/logo-wall/dstv.png";
import LogoWall from "../common/LogoWall";

import { Fade } from "react-awesome-reveal";

function Partners() {
  return (
    <section id="partners" className="mt-20 flex flex-col bg-gray-50 py-20">
      <article className="mb-10 w-full px-8 text-center lg:px-12">
      <Fade cascade direction="up" delay={400} damping={1e-1} triggerOnce={true}>
        <h2 className="mb-4 text-4xl font-semibold text-gray-800">
          Transact seamlessly with...
        </h2>
      </Fade>

      <Fade cascade direction="up" delay={600} damping={1e-1} triggerOnce={true}>
        <p>
            Connect your other accounts to Paydrop seamlessly. Paydrop supports
            200+
            <br />
            integrations with other payment platforms like stripe, paypal,
            payoneer and others
          </p>
      </Fade>
      </article>
      
      <div className="xl:flex xl:justify-center">
      <Fade cascade direction="left" delay={400} damping={1e-1} triggerOnce={true}>
        <LogoWall
            src1={Klarna}
            src2={Stripe}
            src3={PayPal}
            alt1="Klarna logo"
            alt2="Stripe logo"
            alt3="PayPal logo"
          />
      </Fade>

      <Fade cascade direction="right" delay={600} damping={1e-1} triggerOnce={true}>
      <LogoWall
          src1={Bedc}
          src2={Mastercard}
          src3={Mtn}
          alt1="Bedc logo"
          alt2="Mastercard logo"
          alt3="Mtn logo"
        />
      </Fade>
      </div>

      <div className="xl:flex xl:justify-center">
      <Fade cascade direction="left" delay={400} damping={1e-1} triggerOnce={true}>
        <LogoWall
            src1={Airtel}
            src2={Payoneer}
            src3={Visa}
            alt1="Airtel logo"
            alt2="Payoneer logo"
            alt3="Visa logo"
          />
      </Fade>

      <Fade cascade direction="right" delay={600} damping={1e-1} triggerOnce={true}>
        <LogoWall
            src1={Mobile}
            src2={Ikeja}
            src3={Dstv}
            alt1="Mobile logo"
            alt2="Ikeja logo"
            alt3="Dstv logo"
          />
      </Fade>
        
        
      </div>
    </section>
  );
}

export default Partners;
