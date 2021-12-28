import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";

const Papers = () => {
  return (
    <>
      <div>
        <h2 className="text-gray-300 text-2xl text-center font-bold">
          <span className="text-green-300 mr-4">02.</span>Research Papers
        </h2>
      </div>
      <div className="flex flex-row flex-wrap justify-center p-16">
        <Fade>
          <div className="bg-bg-light m-4 text-center hover:ring-2 hover:ring-green-300 md:w-1/3 cursor-pointer flex justify-center flex-row flex-wrap  py-8  md:space-x-12">
            <a
              href="https://pepi.codes/doc/coinscovidkeynes.pdf"
              target="_blank"
            >
              <div className="text-white flex flex-col justify-center rounded-lg p-4 motion-safe:hover:scale-110  w-96">
                <h2 className="text-white text-center font-bold text-xl">
                  Coins, Covid, Keynes and K-Shaped Recovery
                </h2>
                <p className="pt-4 text-gray-300">
                  Reckless monetary policy, especially in the wake of a
                  pandemic, amplifies the gap between the extreme ends of the
                  income distribution, thus exacerbating the long term effects
                  of income inequality and loss of human capital. Attempts of
                  federal stimulus bills fall short in timing and size,
                  including directing spending towards those most in need. We
                  propose a general smart contract protocol that distributes
                  funds to targeted individuals with programmatic spending
                  enforceability, alleviating the K-Shape recovery that current
                  monetary policy is creating and turn it into the desired
                  V-Shape. Utilizing incentive structures, our model directs
                  spending to help stimulate the economies of targeted
                  communities and struggling businesses. Smart contracts remove
                  the current inefficiencies in the political trust and
                  permission-based solution and allow for more transparency,
                  verification, and incentives to help one’s community in times
                  of need. Such a system allows for a more positive and direct
                  relationship between those with funds and those who need
                  funds.
                </p>
              </div>
            </a>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default Papers;
