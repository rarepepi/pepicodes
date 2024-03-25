import { ScrollArea } from "@/components/ui/scroll-area";

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
      link: "https://alphaexplorer.xyz/",
      icon: "✨",
    },
    {
      title: "Building Beaverz",
      description: "A team based NFT game.",
      link: "https://buildingbeaverz.com/",
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
    <div className="max-w-4xl p-8">
      <div>
        <h2 className="text-3xl text-center font-bold">Projects</h2>
      </div>

      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 p-8">
        {projects.map((project, i) => (
          <div
            key={project.title}
            className="dark:bg-zinc-900 bg-zinc-100 text-zinc-900 dark:hover:bg-zinc-800 p-5 rounded-2xl text-center hover:ring-2 hover:ring-zinc-300 flex justify-center flex-row flex-wrap"
          >
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="w-full"
            >
              <div className="dark:text-white text-zinc-900 flex flex-col justify-center rounded-lg motion-safe:hover:scale-110 max-w-lg min-w">
                <h2 className="dark:text-white text-zinc-900 text-center font-bold md:text-2xl ">
                  {project.icon}
                </h2>

                <h2 className="dark:text-white text-zinc-900 text-center font-bold md:text-2xl  mt-6">
                  {project.title}
                </h2>

                <p className="p-8 w-max-lg">{project.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
