import Link from "next/link";

const MainContent = () => {
  return (
    <div className="max-w-6xl fade-in">
      <div className="flex text-lg flex-col justify-left p-8 md:p-16 md:px-64">
        <h1 className="text-4xl font-bold mt-8 mb-8">Pepi Martinez</h1>
        <h2 className="dark:text-zinc-300">
          Hey, I am Pepi Martinez, a fanatical builder.
        </h2>

        <div className="mt-6 space-y-2">
          <h3 className="dark:text-zinc-300">
            Working at{" "}
            <Link
              className="dark:text-white underline hover:decoration-zinc-400 decoration-zinc-600 underline-offset-8"
              href="https://noramp.io/"
              target="_blank"
            >
              <img
                className="w-6 inline mx-2 rounded-full"
                src="/img/noramp.png"
              />
              NoRamp
            </Link>
          </h3>
          <p className="dark:text-zinc-300 space-x-2">
            Previously at{" "}
            <Link
              className="dark:text-white underline hover:decoration-zinc-400 decoration-zinc-600 underline-offset-8"
              href="https://www.blockchains.com/"
              target="_blank"
            >
              <img
                className="w-6 inline mx-2 rounded-full"
                src="/img/blockchains.jpeg"
              />
              Blockchains
            </Link>
            <Link
              className="dark:text-white underline hover:decoration-zinc-400 decoration-zinc-600 underline-offset-8"
              href="https://www.insomnialabs.io/"
              target="_blank"
            >
              <img
                className="w-6 inline mx-2 rounded-full"
                src="/img/insomnia.jpeg"
              />
              Insomnia
            </Link>
            <Link
              className="dark:text-white underline hover:decoration-zinc-400 decoration-zinc-600 underline-offset-8"
              href="https://www.ey.com/"
              target="_blank"
            >
              <img
                className="w-6 inline mx-2 rounded-full"
                src="/img/ey.jpeg"
              />
              EY
            </Link>
            <Link
              className="dark:text-white underline hover:decoration-zinc-400 decoration-zinc-600 underline-offset-8"
              href="https://www.nyu.edu/"
              target="_blank"
            >
              <img
                className="w-6 inline mx-2 rounded-full"
                src="/img/nyu.jpg"
              />
              NYU
            </Link>
          </p>
        </div>
        <p className="dark:text-zinc-300 text-zinc-700  my-8">
          Crafting solutions and bringing innovative ideas to life in the
          decentralized world – that's where my fire burns brightest. Dive into
          my full list of
          <Link
            href="/projects"
            className="dark:text-white underline hover:decoration-zinc-400 decoration-zinc-600 underline-offset-8"
          >
            {" "}
            projects{" "}
          </Link>
          to see what I've been up to.
        </p>
        <p className="dark:text-zinc-300 text-zinc-700 mb-10">
          When I'm not developing, my time is spent on generative art, exploring
          digital frontiers, and creating interactive experiments.
        </p>
        <a
          className="w-32 text-center p-3 motion-safe:hover:scale-110 dark:hover:text-white dark:text-zinc-300 text-zinc-700 ring-zinc-300 ring-2 "
          href="https://pepi.codes/resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default MainContent;
