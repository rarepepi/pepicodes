import React, { useEffect, useState } from "react";
import { Zoom, Fade, Flip, Slide } from "react-reveal";

const About = () => {
  return (
    <div id="ABOUT" className="p-8">
      <div className="flex flex-col flex-wrap justify-center">
        <div className="flex flex-row flex-wrap justify-between sm:justify-center">
          <div>
            <Flip left>
              <h1 className="text-gray-300 text-2xl text-left sm:text-center font-bold sm:mb-12">
                {" "}
                <span className="text-green-300 ml-32 sm:m-auto ">
                  01.{" "}
                </span>{" "}
                About Me
              </h1>
            </Flip>

            <h2 className="max-w-2xl m-auto text-left ml-44 sm:m-auto sm:text-center text-gray-400 sm:mb-12">
              Been working in Full Stack Dev for the last 5 years of which the
              last 3 have been using Web3 stacks. <br />
              <br />
              <span className="text-gray-300">
                Here are some of my favorite technologies:
              </span>
            </h2>
            <ul className="skills text-gray-300 ">
              <li>
                <span className="text-green-300 font-bold">~</span> Solidity
              </li>
              <li>
                <span className="text-green-300 font-bold">~</span> Javascript
              </li>
              <li>
                <span className="text-green-300 font-bold">~</span> React
              </li>
              <li>
                <span className="text-green-300 font-bold">~</span> Node.js
              </li>
              <li>
                <span className="text-green-300 font-bold">~</span> Python
              </li>
              <li>
                <span className="text-green-300 font-bold">~</span> Go
              </li>
            </ul>
          </div>

          <img
            src="/img/logo.png"
            className="max-w-xs mr-44 sm:m-auto hover:animate-pulse ring-8 ring-green-300"
          ></img>
        </div>
      </div>
      <style jsx>{`
        .skills {
          margin-bottom: 48px;
          -moz-column-count: 3; /* Firefox */
          -webkit-column-count: 3; /* Safari and Chrome */
          column-count: 3;
          text-align: center;
        }

        @media screen (max-width: 1000px) {
          .skills {
            margin: auto;
            -moz-column-count: 1; /* Firefox */
            -webkit-column-count: 1; /* Safari and Chrome */
            column-count: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
