"use client";
import {
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiSolidity,
  SiTypescript,
} from "react-icons/si";

const About = () => {
  return (
    <div className="p-8">
      <div className="flex flex-col flex-wrap justify-center">
        <div className="flex flex-row flex-wrap justify-between sm:justify-center">
          <div className="flex flex-col justify-center text-center max-w-xl">
            <h1 className="font-bold text-3xl mb-12">About Me</h1>

            <img
              src="/img/logo.png"
              className="max-w-xl hover:scale-125 rounded-full xs:ml-44 m-auto flex md:w-72 w-36 justify-center "
            />

            <h2 className=" m-auto text-xl md:text-center dark:text-zinc-200 my-12 dark:bg-zinc-900 bg-zinc-100 p-8 rounded-2xl">
              Ever since I got my{" "}
              <span className="font-bold">first computer at the age of 5</span>,
              I&apos;ve been captivated by the world of technology. <br />
              <br />
              Today, I&apos;m a
              <span className="font-bold">
                {" "}
                full-stack software engineer
              </span>{" "}
              with{" "}
              <span className="font-bold">
                6 years of experience in creating web applications and 3 years
                of expertise{" "}
              </span>
              in building decentralized applications (DApps).
              <br />
              <img
                className="w-16 m-auto mt-4 rounded-full"
                src="/img/nyu.jpg"
              />
              <br />
              <span className="font-bold">
                Bachelor&apos;s in Computer Science from NYU
              </span>
              <br />
            </h2>
            <span className="dark:text-zinc-300  mb-4 font-bold">
              My few of favorite technologies include:
            </span>
            <ul className="skills dark:text-zinc-300 text-zinc-800 text-xl font-bold space-y-4">
              <li>
                <span className="">
                  <SiTypescript className=" w-12 inline" />
                </span>
                TypeScript
              </li>
              <li>
                <span className="">
                  <SiNodedotjs className=" w-12 inline" />
                </span>
                Node.js
              </li>
              <li>
                <span className="">
                  <SiNextdotjs className=" w-12 inline" />
                </span>
                Next.js
              </li>
              <li>
                <span className="">
                  <SiSolidity className=" w-12 inline" />
                </span>
                Solidity
              </li>
              <li>
                <span className="">
                  <SiPostgresql className=" w-12 inline" />
                </span>
                Postgres
              </li>
              <li>
                <span className="">
                  <SiPython className=" w-12 inline" />
                </span>
                Python
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
