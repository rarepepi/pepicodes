import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Zoom, Fade, Flip, Slide } from "react-reveal";
import Router from "next/router";

const MainContent = () => {
  return (
    <div id="Why" className="">
      <Slide left>
        <div className="flex flex-col justify-left mt-16 md:p-16 md:ml-32 h-screen">
          <p className="text-green-300 text-lg">Hi, my name is</p>
          <h1 className="xl:text-6xl text-5xl font-bold text-gray-200 mt-8">
            Pepi
          </h1>
          <h2 className="text-gray-300 xl:text-6xl text-5xl mt-4 font-bold">
            I like to build things.
          </h2>
          <h3 className="text-gray-400  mt-4 md:w-1/2">
            I’m a software engineer passionate about decentrailized
            applications. Currently, I’m focused on building smart contract
            related projects,{" "}
            <span className="text-green-300">NFTs, DAOs, DeFi </span>
            and anything else that catches my curiosity.
          </h3>

          <div className="flex flex-row flex-wrap justify-left mt-8 sm:space-x-6 sm:space-y-0 space-y-4">
            <a
              className=" p-3 motion-safe:hover:scale-110 hover:bg-primary hover:text-black flex text-green-300 ring-green-300 ring-2 "
              href="https://pepi.codes/resume.pdf"
              target="_blank"
            >
              Resume
            </a>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default MainContent;
