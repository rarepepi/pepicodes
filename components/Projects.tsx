import { Zoom, Fade } from "react-awesome-reveal";

const Projects = () => {
  const projects = [
    {
      title: "Summify.ai",
      description: "Summarizing your favorite discord.",
      link: "https://summify.ai",
      icon: "📝",
    },
    {
      title: "Blockery",
      description: "Your new home of NFT Analytics and Knowledge.",
      link: "https://blockery.app",
      icon: "📈",
    },
    {
      title: "GenArts",
      description: "AI generated art.",
      link: "https://genarts.ai",
      icon: "🖌️",
    },
    {
      title: "DefNotGoogle",
      description: "AI powered search engine.",
      link: "https://www.defnotgoogle.com/",
      icon: "🔎",
    },
    {
      title: "WutFloor",
      description: "An NFT portfolio analyzer.",
      link: "https://wutfloor.xyz",
      icon: "📊",
    },
    {
      title: "biorxiv.ai",
      description: "The AI Professor for Biology",
      link: "https://biorxiv.ai",
      icon: "🧬",
    },
    {
      title: "medrxiv.ai",
      description: "The AI Professor for Medicine",
      link: "https://medrxiv.ai",
      icon: "⚕️",
    },
    {
      title: "PepeScan",
      description: "A $PEPE transaction explorer.",
      link: "https://pepescan.vip",
      icon: "🐸",
    },
    {
      title: "Language.help",
      description: "A better translator than Google, using GPT-3.5",
      link: "https://language.help",
      icon: "🗺️",
    },
    {
      title: "Art Gobblers Gallery Assistant",
      description: "A microservice that tracks art gobbles and glams.",
      link: "https://github.com/rarepepi/artgobblers-discord-bot",
      icon: "🖼️",
    },
    {
      title: "DefNotNewYorkTimes",
      description: "A parody of the New York Times written by AI.",
      link: "https://def-not-new-york-times-production.up.railway.app/",
      icon: "🖼️",
    },

    {
      title: "MarsGo",
      description: "A revolutionary parody startup",
      link: "https://marsgo.xyz/",
      icon: "🪐",
    },
    {
      title: "Alpha Explorers",
      description: "The most powerful tools in web3 all at your fingertips.",
      link: "https://alpha-explorer.vercel.app",
      icon: "✨",
    },
    {
      title: "Building Beaverz",
      description: "A team based NFT game.",
      link: "https://busy-beaverz.vercel.app",
      icon: "🦫",
    },

    {
      title: "Hoot",
      description: "A fully on-chain collection of CC0 MoonBirds.",
      link: "https://www.hootproject.com",
      icon: "🦉",
    },
    {
      title: "Colors On Chain",
      description: "A fun game about colors and NFT art.",
      link: "https://colorsonchain.com",
      icon: "🎨",
    },
    {
      title: "Wall Street Bets Scraper",
      description: "Count occurances of tickers on WSB subreddit.",
      link: "https://github.com/rarepepi/wsbscraper",
      icon: "🧮",
    },
    {
      title: "Alfred",
      description:
        "An stock account and crypto account aggregator. Works through telegram.",
      link: "https://github.com/rarepepi/alfred",
      icon: "🤖",
    },
  ];

  return (
    <div id="PROJECTS">
      <Zoom>
        <div>
          <h2 className="text-gray-300 md:text-2xl text-lg text-center font-bold">
            <span className="text-green-300 mr-4">02.</span>Some Things
            I&apos;ve Built
          </h2>
        </div>
      </Zoom>
      <div className="flex flex-row flex-wrap justify-center md:p-16 ">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-bg-light m-4 text-center hover:ring-2 hover:ring-green-300 md:w-1/3 flex justify-center flex-row flex-wrap  py-8  md:space-x-12"
          >
            <Fade>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="w-full"
              >
                <div className="text-white flex flex-col justify-center rounded-lg p-4 motion-safe:hover:scale-110 max-w-lg w-96 min-w">
                  <h2 className="text-white text-center font-bold md:text-2xl text-lg">
                    {project.icon}
                  </h2>

                  <h2 className="text-white text-center font-bold md:text-2xl text-lg mt-6">
                    {project.title}
                  </h2>

                  <p className="p-8 w-max-lg">{project.description}</p>
                </div>
              </a>
            </Fade>
          </div>
        ))}
      </div>
      <style jsx>{``}</style>
    </div>
  );
};

export default Projects;
