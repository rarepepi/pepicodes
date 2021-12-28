import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";

const MyWork = () => {
  return (
    <>
      <div>
        <h2 className="text-gray-300 text-2xl text-center font-bold">
          <span className="text-green-300 mr-4">01.</span>Some Things I've Built
        </h2>
      </div>
      <div className="flex flex-row flex-wrap justify-center p-16">
        <Fade>
          <div className="bg-bg-light m-4 text-center hover:ring-2 hover:ring-green-300 md:w-1/3 cursor-pointer flex justify-center flex-row flex-wrap  py-8  md:space-x-12">
            <a href="https://wutfloor.xyz" target="_blank">
              <div className="text-white flex flex-col justify-center rounded-lg p-4 motion-safe:hover:scale-110  w-96">
                <h2 className="text-white text-center font-bold text-2xl">
                  📊
                </h2>
                <h2 className="text-white text-center font-bold text-xl">
                  WutFloor
                </h2>

                <p className="pt-4 ">
                  An NFT portfolio analyzer alpha by discovering special data.
                  Not sure what the value of your NFT portfolio is? Dont worry
                  we got you covered. With our wallet profiler. Get hourly,
                  daily, monthly, and all time data statistics you've ever
                  dreamed of. Check out a collection or wallet to see all kinds
                  of alpha stats.
                </p>
              </div>
            </a>
          </div>

          <div className="bg-bg-light m-4 text-center hover:ring-2 hover:ring-green-300 md:w-1/3 cursor-pointer flex justify-center flex-row flex-wrap  py-8  md:space-x-12">
            <a href="https://numbergame.io" target="_blank">
              <div className="text-white flex flex-col justify-center rounded-lg p-4 motion-safe:hover:scale-110 w-96">
                <h2 className="text-white text-center font-bold text-2xl">
                  #️⃣
                </h2>

                <h2 className="text-white text-center font-bold text-xl">
                  Number Game
                </h2>

                <p className="pt-4">
                  Number Game is an on-chain generated and stored game with a
                  prize pool. Breed numbers using their utility $MATH tokens
                  they get for owning a Genesis Number and add your numbers up
                  to 1,000,000. Add numbers by breeding them and complete
                  challenges to win prizes. You can't add the same two numbers
                  twice and you must own the numbers you breed. Most of all,
                  just have fun ;)
                </p>
              </div>
            </a>
          </div>
          <div className="bg-bg-light m-4 text-center hover:ring-2 hover:ring-green-300 md:w-1/3 cursor-pointer flex justify-center flex-row flex-wrap  py-8  md:space-x-12">
            <a href="https://colorsonchain.com" target="_blank">
              <div className="text-white flex flex-col justify-center rounded-lg p-4 motion-safe:hover:scale-110 w-96">
                <h2 className="text-white text-center font-bold text-2xl">
                  🍭
                </h2>

                <h2 className="text-white text-center font-bold text-xl">
                  Colors On Chain
                </h2>

                <p className="pt-4 text-gray-300">
                  ColorsOnChain is a breeding game with a prize pool. The first
                  of its kind. Players mint NFT colors (generative HEX codes
                  stored on-chain) which yield RGB tokens daily. You then spend
                  those tokens to breed using additive color theory to mix 2
                  colors into something new (their baby). Get hourly, daily,
                  monthly, and all time data
                </p>
              </div>
            </a>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default MyWork;
