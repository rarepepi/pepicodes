import { Flip } from "react-awesome-reveal";

const About = () => {
  return (
    <div id="ABOUT" className="p-2">
      <div className="flex flex-col flex-wrap justify-center">
        <div className="flex flex-row flex-wrap justify-between sm:justify-center">
          <div className="flex flex-col justify-center text-center max-w-xl">
            <Flip>
              <h1 className="text-gray-300 text-2xl font-bold mb-12">
                <span className="text-green-300 ">01. </span> About Me
              </h1>
            </Flip>
            <img
              src="/img/logo.png"
              className="max-w-xl hover:animate-pulse ring-8 xs:ml-44 m-auto flex md:w-72 w-36 justify-center ring-green-300"
            ></img>

            <h2 className=" m-auto   md:text-center text-gray-300 my-12">
              I got my first computer when I was 5 years old, and I never got
              off. Now, a full stack dev with 5 years of experience building web
              applications and 2 years building Dapps on Ethereum.
              <br />
              <img className="w-16 m-auto mt-4" src="/img/nyu.png"></img>
              Bachelor in Computer Science
              <br />
              <br />
              <span className="text-gray-300">
                Here are some of my favorite technologies:
              </span>
            </h2>
            <ul className="skills text-gray-300 ">
              <li>
                <span className="text-green-300 font-bold">~</span> TypeScript
              </li>
              <li>
                <span className="text-green-300 font-bold">~</span> Node.js
              </li>
              <li>
                <span className="text-green-300 font-bold">~</span> React
              </li>
              <li>
                <span className="text-green-300 font-bold">~</span> Solidity
              </li>
              <li>
                <span className="text-green-300 font-bold">~</span> Postgres
              </li>
              <li>
                <span className="text-green-300 font-bold">~</span> Python
              </li>
            </ul>
          </div>
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

        @media only screen and (max-width: 1000px) {
          .skills {
            margin: auto;
            -moz-column-count: 1; /* Firefox */
            -webkit-column-count: 1; /* Safari and Chrome */
            column-count: 1;
            margin-bottom: 48px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
