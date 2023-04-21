import { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import MainContent from "../components/MainContent";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
import Head from "next/head";
import Projects from "../components/Projects";
import BackgroundMagic from "../components/BackgroundMagic";
import Papers from "../components/Papers";
import About from "../components/About";

function sleep(ms: any) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function doAsyncTask() {
      await sleep(2000);
      setLoading(false);
    }

    doAsyncTask();
  }, []);

  return (
    <>
      <Head>
        <title>Pepi Martinez</title>
        <meta name="description" content="Pepi Martinez" />
      </Head>
      <main>
        <div className="flex justify-center flex-col">
          {loading && <span className="loader"></span>}
          {!loading && (
            <div className="w-full flex-col justify-center ">
              <BackgroundMagic />
              <div className="overview-left">
                <a
                  href="https://twitter.com/rarepepi"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-200 hover:bg-gray-700 cursor-pointer w-8	 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  <i
                    className="fa fa-twitter text-xl mr-2"
                    aria-hidden="true"
                  />
                </a>
                <a
                  href="https://github.com/rarepepi"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-200 hover:bg-gray-700 cursor-pointer	 w-8 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  <i className="fa fa-github text-xl mr-2" />
                </a>
                <a
                  href="https://www.linkedin.com/in/pepimartinez/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-200 hover:bg-gray-700 cursor-pointer w-8	 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  <i className="fa fa-linkedin text-xl mr-2 mb-12" />
                </a>
                <svg
                  className="ml-2.5"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <path d="M 10,10 V 200" stroke="#fff" stroke-width="5" />
                </svg>
              </div>
              <div className="overview-right">
                <li
                  className="hover:cursor-copy"
                  onClick={(e) => {
                    navigator.clipboard.writeText(
                      "pepimartinez@protonmail.com"
                    );
                  }}
                >
                  pepimartinez@protonmail.com
                </li>
                <svg
                  className="ml-2.5"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <path d="M 10,10 V 200" stroke="#fff" stroke-width="5" />
                </svg>
              </div>
              <Fade>
                <Head>
                  <title>Pepi Codes</title>
                  <meta
                    name="description"
                    content="Pepi Martinez personal site displaying: projects, papers, and more."
                  />
                </Head>
                <div className="w-full">
                  <div className="">
                    <TopNav />
                  </div>
                  <section className="-mt-6 p-8 ">
                    <MainContent />
                  </section>
                  <section className="mb-32  p-8">
                    <About />
                  </section>
                  <section className="mb-32 p-8 overflow-hidden">
                    <Projects />
                  </section>
                  <section className="mb-32 p-8 overflow-hidden">
                    <Papers />
                  </section>
                </div>
                <section className="mt-16 w-full">
                  <Footer />
                </section>
              </Fade>
            </div>
          )}
          <style jsx>
            {`
              .overview-left {
                position: fixed;
                bottom: 2%;
                left: 5%;
                display: flex;
                flex-direction: column;
                z-index: 5;
                width: 86px;
              }
              .overview-right {
                position: fixed;
                bottom: 2%;
                right: -10%;
                display: flex;
                flex-direction: column;
                z-index: 5;
              }

              .overview-right li {
                writing-mode: vertical-rl;
                color: white;
                width: 80px;
                padding-right: 47px;
                padding-bottom: 47px;
              }

              @media only screen and (max-width: 1400px) {
                .overview-right {
                  right: -12%;
                }
              }

              @media only screen and (max-width: 1200px) {
                .overview-right {
                  right: -18%;
                }
              }

              @media only screen and (max-width: 1000px) {
                .overview-left {
                  position: relative !important;
                  display: none !important;
                }
                .overview-right {
                  position: relative !important;
                  display: none !important;
                }
              }
            `}
          </style>
        </div>
      </main>
    </>
  );
}
