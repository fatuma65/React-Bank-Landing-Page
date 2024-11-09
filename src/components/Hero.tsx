import React from "react";
import styles from "../styles";
import { GetStarted } from "./index";
import { discount, robot } from "../constants/images";
const Hero = () => {
  return (
    <>
      <section
        id="home"
        className={`flex md:flex-row flex-col ${styles.paddingY} mb-4`}>
        <div
          className={`flex-1 ${styles.flexStart} flex flex-col xl:px-0 sm:px-16 px-4 `}>
          <div className="flex flex-row items-center bg-discount-gradient rounded-[10px] mb-2 py-[6px] px-4">
            <img src={discount} className="w-[32px] h-[32px]" alt="discount" />
            <p className={`ml-2 ${styles.paragraph}`}>
              <span className="text-white">20%</span>
              <span className="text-white"> 1 Month</span>
              {"  "}
              <span className="text-white"> Account</span>
            </p>
          </div>

          <div className="flex flex-row justify-between items-center w-full text-white">
            <h1 className="font-semibold ss:text-[72px] text-[52px] ss:leading-[100.8px] leading-[75px] font-poppins flex-1">
              The Next <br className="sm:block hidden" />{" "}
              <span className="text-gradient">Generation</span>{" "}
            </h1>
            {"  "}
            <div className="ss:flex hidden md:mr-4 mr-0">
              <GetStarted />
            </div>
          </div>

          <h1 className="font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[72px] font-poppins w-full">
            Payment method
          </h1>
          <p className={`${styles.paragraph} text-white max-w-[470px] mt-5`}>
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates
            and anual fees
          </p>
        </div>

        <div
          className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
          <img
            src={robot}
            alt="billing"
            className="w-[100%] h-[100%] relative z-[5]"
          />

          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        </div>

        <div className={`ss:hidden ${styles.flexCenter}`}>
          <GetStarted />
        </div>
      </section>
    </>
  );
};

export default Hero;
