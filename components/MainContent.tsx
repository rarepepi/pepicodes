import { Fade } from "react-awesome-reveal";

const MainContent = () => {
  return (
    <div id="Why" className="">
      <div className="flex flex-col justify-left mt-16 md:p-16 md:ml-32 h-screen">
        <Fade delay={250} triggerOnce>
          <p className="text-green-300 text-lg">Hi, my name is</p>
          <h1 className="xl:text-6xl text-5xl font-bold text-gray-200 mt-8">
            Pepi Martinez
          </h1>

          <h2 className="text-gray-400 xl:text-6xl text-5xl mt-4 font-bold">
            I like to build things.
          </h2>

          <h3 className="text-gray-400  my-8 md:w-1/2">
            I&#39;m a software engineer passionate about decentralized
            applications. My current focus includes smart contracts,
            <span className="text-green-300"> NFTs, DAOs, and DeFi, </span>
            as well as any innovative projects that pique my curiosity.
          </h3>

          <a
            className="w-32 text-center p-3 motion-safe:hover:scale-110 hover:bg-primary hover:text-white text-green-300 ring-green-300 ring-2 "
            href="https://pepi.codes/resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </Fade>
      </div>
    </div>
  );
};

export default MainContent;
