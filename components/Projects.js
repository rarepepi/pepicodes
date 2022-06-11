import React, { useEffect, useState } from "react";
import { Zoom, Fade, Flip, Slide } from "react-reveal";

const Projects = () => {
  return (
    <div id="PROJECTS">
      <Flip left>
        <div>
          <h2 className="text-gray-300 md:text-2xl text-lg text-center font-bold">
            <span className="text-green-300 mr-4">02.</span>Some Things I've
            Built
          </h2>
        </div>
      </Flip>
      <div className="flex flex-row flex-wrap justify-center md:p-16 ">
        <Slide left>
          <div className="bg-bg-light m-4 text-center hover:ring-2 hover:ring-green-300 md:w-1/3 cursor-pointer flex justify-center flex-row flex-wrap  py-8  md:space-x-12">
            <a href="https://buildingbeaverz.com" target="_blank">
              <div className="text-white flex flex-col justify-center rounded-lg p-4 motion-safe:hover:scale-110  max-w-lg">
                <h2 className="text-white text-center font-bold md:text-2xl text-lg">🦫</h2>
                <h2 className="text-white text-center font-bold md:text-2xl text-lg mt-6">
                  Building Beaverz
                </h2>

                <p className="p-8 w-max-lg ">
                  Building Beaverz is an NFT collection made up of 10,000
                  Beaverz. At the beginning of every game there will be a puzzle
                  that every house will need to solve before they can begin
                  playing the game and interacting with the smart contract. The team who wins the most points receieves awards.
                </p>
              </div>
            </a>
          </div>
        </Slide>

        <Slide right>
          <div className="bg-bg-light m-4 text-center hover:ring-2 hover:ring-green-300 md:w-1/3 cursor-pointer flex justify-center flex-row flex-wrap  py-8  md:space-x-12">
            <a href="https://wutfloor.xyz" target="_blank">
              <div className="text-white flex flex-col justify-center rounded-lg p-4 motion-safe:hover:scale-110 max-w-lg">
                <h2 className="text-white text-center font-bold md:text-2xl text-lg">
                  📊
                </h2>
                <h2 className="text-white text-center font-bold md:text-2xl text-lg mt-6">
                  WutFloor
                </h2>

                <p className="p-8  w-max-lg">
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
        </Slide>
        <Slide bottom>
          <div className="bg-bg-light m-4 text-center hover:ring-2 hover:ring-green-300 md:w-1/3 cursor-pointer flex justify-center flex-row flex-wrap  py-8  md:space-x-12">
            <a href="https://numbagame.xyz" target="_blank">
              <div className="text-white flex flex-col justify-center rounded-lg p-4 motion-safe:hover:scale-110 max-w-lg">
                <h2 className="text-white text-center font-bold md:text-2xl text-lg">
                  #️⃣
                </h2>

                <h2 className="text-white text-center font-bold md:text-2xl text-lg mt-6">
                  Number Game
                </h2>

                <p className="p-8 w-max-lg">
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
        </Slide>
        <Slide bottom>
          <div className="bg-bg-light m-4 text-center hover:ring-2 hover:ring-green-300 md:w-1/3 cursor-pointer flex justify-center flex-row flex-wrap  py-8  md:space-x-12">
            <a href="https://colorsonchain.com" target="_blank">
              <div className="text-white flex flex-col justify-center rounded-lg p-4 motion-safe:hover:scale-110 max-w-lg">
                <h2 className="text-white text-center font-bold md:text-2xl text-lg">
                  🍭
                </h2>

                <h2 className="text-white text-center font-bold md:text-2xl text-lg mt-6">
                  Colors On Chain
                </h2>

                <p className="p-8 w-max-lg text-gray-300">
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
        </Slide>
      </div>
      <style jsx>{``}</style>
    </div>
  );
};

export default Projects;
