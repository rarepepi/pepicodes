import Link from "next/link";

const MainContent = () => {
  return (
    <div className="max-w-4xl fade-in flex justify-center items-center p-10">
      <div className="flex  flex-col justify-left p-8 md:p-16 md:px-64">
        <h1 className="dark:text-zinc-300">Hi, I am Pepi Martinez.</h1>
        <h2 className="dark:text-zinc-300">I write code and make websites.</h2>
        <h3 className="dark:text-zinc-300">
          I'm obsessed with using cryptography for better finance.
        </h3>
        <div className="mt-6 space-y-2">
          <h3 className="dark:text-zinc-300">
            Building at{" "}
            <Link
              className="dark:text-white underline hover:decoration-zinc-400 decoration-zinc-600 underline-offset-8"
              href="https://noramp.io/"
              target="_blank"
            >
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
              Blockchains
            </Link>
            <Link
              className="dark:text-white underline hover:decoration-zinc-400 decoration-zinc-600 underline-offset-8"
              href="https://www.insomnialabs.io/"
              target="_blank"
            >
              Insomnia
            </Link>
            <Link
              className="dark:text-white underline hover:decoration-zinc-400 decoration-zinc-600 underline-offset-8"
              href="https://www.ey.com/"
              target="_blank"
            >
              EY
            </Link>
            <Link
              className="dark:text-white underline hover:decoration-zinc-400 decoration-zinc-600 underline-offset-8"
              href="https://www.nyu.edu/"
              target="_blank"
            >
              NYU
            </Link>
          </p>
          <p className="dark:text-zinc-300 space-x-2">
            CS at{" "}
            <Link
              className="dark:text-white underline hover:decoration-zinc-400 decoration-zinc-600 underline-offset-8"
              href="https://www.nyu.edu/"
              target="_blank"
            >
              NYU 2022
            </Link>
          </p>
        </div>

        <div className="py-3">
          Sometimes I write
          <Link
            href="https://rarepepi.substack.com/"
            className="dark:text-white underline hover:decoration-zinc-400 decoration-zinc-600 underline-offset-8"
          >
            {" "}
            here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
