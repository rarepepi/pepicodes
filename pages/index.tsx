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
    async function addBodyClass() {
      await sleep(2000);
      document.body.classList.add("loaded");
      setLoading(false);
    }

    addBodyClass();
  }, []);

  return (
    <>
      <Head>
        <title>Pepi Codes</title>
        <meta
          name="description"
          content="Pepi's personal site displaying: projects, papers, and more."
        />
      </Head>
      <main>
        <div className="w-full flex-col justify-center ">
          {loading ? (
            <span className="loader"></span>
          ) : (
            <div className="w-full flex-col justify-center fade-in ">
              <BackgroundMagic />
              <div className="overview-left">
                <Fade delay={500}>
                  <a
                    href="https://twitter.com/rarepepi"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-200 hover:bg-gray-700 cursor-pointer w-8	 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    <i
                      className="fa fa-twitter text-xl mr-2 mb-6"
                      aria-hidden="true"
                    />
                  </a>
                  <a
                    href="https://github.com/rarepepi"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-200 hover:bg-gray-700 cursor-pointer	 w-8 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    <i className="fa fa-github text-xl mr-2 mb-6" />
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
                    <path d="M 10,10 V 200" stroke="#fff" stroke-width="2" />
                  </svg>
                </Fade>
              </div>
              <div className="overview-right ">
                <Fade delay={500}>
                  <a
                    className="hover:text-green-300"
                    href="mailto:pepimartinez@protonmail.com"
                  >
                    pepimartinez@protonmail.com
                  </a>
                  <svg
                    className="ml-2.5"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <path d="M 10,10 V 200" stroke="#fff" stroke-width="2" />
                  </svg>
                </Fade>
              </div>

              <div className="w-full">
                <div className="">
                  <TopNav />
                </div>
                <section className="p-8 ">
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
            </div>
          )}
        </div>
      </main>
    </>
  );
}
