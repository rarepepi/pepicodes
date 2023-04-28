import { Fade } from "react-awesome-reveal";

const MainContent = () => {
  return (
    <div id="Why" className="">
      <div className="flex flex-col justify-left mt-16 md:p-16 md:ml-32 h-screen">
        <Fade triggerOnce delay={250}>
          <p className="text-green-300 text-lg">Hi, my name is</p>
          <h1 className="xl:text-6xl text-5xl font-bold text-gray-200 mt-8">
            Pepi
          </h1>
        </Fade>
        <Fade triggerOnce delay={500}>
          <h2 className="text-gray-300 xl:text-6xl text-5xl mt-4 font-bold">
            I like to build things.
          </h2>
        </Fade>
        <Fade triggerOnce delay={750}>
          <h3 className="text-gray-400  mt-4 md:w-1/2">
            I&#39;m a software engineer passionate about decentralized
            applications. My current focus includes smart contracts,
            <span className="text-green-300">NFTs, DAOs, and DeFi, </span>
            as well as any innovative projects that pique my curiosity.
          </h3>
        </Fade>

        <div className="flex flex-row flex-wrap justify-left mt-8 sm:space-x-6 sm:space-y-0 space-y-4">
          <Fade triggerOnce delay={1000}>
            <a
              className=" p-3 motion-safe:hover:scale-110 hover:bg-primary hover:text-black flex text-green-300 ring-green-300 ring-2 "
              href="https://pepi.codes/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
