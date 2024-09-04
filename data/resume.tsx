import { Icons } from "../components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Pepi Martinez",
  initials: "PM",
  url: "https://pepi.codes",
  location: "New York, NY",
  locationLink: "https://www.google.com/maps/place/newyorkcity",
  description:
    "Curious hacker turned Software Engineer. I love building things and exploring the edge of what is possible.",
  summary:
    "At 5, I connected to dial-up internet and became fascinated with computers. By 9, I built my first computer to play video games. At 13, I started writing malware, finding joy in outsmarting antivirus software. By 16, I shifted my focus to web apps, and I haven’t looked back since.",
  avatarUrl: "/me.jpeg",
  skills: [
    "Typescript",
    "Solidity",
    "Node.js",
    "Go",
    "Python",
    "React",
    "Next.js",
    "Nest.js",
    "Postgres",
    "Docker",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "pepimartinez@protonmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/rarepepi",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/pepimartinez/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/rarepepi",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Email",
        url: "mailto:pepimartinez@protonmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "NoRamp",
      href: "https://noramp.io",
      badges: [],
      location: "New York, NY",
      title: "CTO",
      logoUrl: "/work/noramp.png",
      start: "Dec 2022",
      end: "Present",
      description: "",
    },
    {
      company: "Blockchains",
      badges: [],
      href: "https://blockchains.com",
      location: "New York, NY",
      title: "Senior Software Engineer",
      logoUrl: "/work/blockchains.jpeg",
      start: "Aug 2022",
      end: "Apr 2023",
      description: "",
    },
    {
      company: "Insomnia",
      href: "https://www.insomnialabs.io/",
      badges: [],
      location: "New York, NY",
      title: "Software Engineer",
      logoUrl: "/work/insomnia.jpeg",
      start: "Jun 2021",
      end: "Jan 2022",
      description: "",
    },
    {
      company: "EY",
      href: "https://ey.com",
      badges: [],
      location: "New York, NY",
      title: "Technology Consultant Intern",
      logoUrl: "/work/ey.jpeg",
      start: "Jun 2021",
      end: "Aug 2021",
      description: "",
    },
  ],
  education: [
    {
      school: "NYU",
      href: "https://nyu.edu",
      degree: "Computer Science",
      logoUrl: "/nyu.jpg",
      start: "2018",
      end: "2022",
    },
  ],

  projects: [
    {
      title: "Summify.ai",
      href: "https://summify.ai",
      dates: "Jan 2023 - Present",
      active: true,
      description: "Summarizing your favorite Discord conversations.",
      technologies: ["Next.js", "Typescript", "TailwindCSS", "GPT-3.5"],
      links: [
        {
          type: "Website",
          href: "https://summify.ai",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Blockery",
      href: "https://blockery.app",
      dates: "Dec 2022 - Present",
      active: true,
      description: "Your new home for NFT analytics and knowledge.",
      technologies: ["React", "Typescript", "Node.js", "MongoDB"],
      links: [
        {
          type: "Website",
          href: "https://blockery.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "GenArts",
      href: "https://genarts.ai",
      dates: "Feb 2023 - Present",
      active: true,
      description: "AI generated art.",
      technologies: ["Next.js", "Typescript", "Stable Diffusion", "GPT-3.5"],
      links: [
        {
          type: "Website",
          href: "https://genarts.ai",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "DefNotGoogle",
      href: "https://www.defnotgoogle.com/",
      dates: "Apr 2023 - Present",
      active: true,
      description: "AI-powered search engine.",
      technologies: ["Python", "GPT-3.5", "Elasticsearch"],
      links: [
        {
          type: "Website",
          href: "https://www.defnotgoogle.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "WutFloor",
      href: "https://wutfloor.xyz",
      dates: "Jan 2024 - Present",
      active: true,
      description: "An NFT portfolio analyzer.",
      technologies: ["React", "Node.js", "MongoDB", "Web3.js"],
      links: [
        {
          type: "Website",
          href: "https://wutfloor.xyz",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "biorxiv.ai",
      href: "https://biorxiv.ai",
      dates: "Nov 2023 - Present",
      active: true,
      description: "The AI professor for biology.",
      technologies: ["Next.js", "GPT-3.5", "Typescript", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://biorxiv.ai",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "medrxiv.ai",
      href: "https://medrxiv.ai",
      dates: "Nov 2023 - Present",
      active: true,
      description: "The AI professor for medicine.",
      technologies: ["Next.js", "GPT-3.5", "Typescript", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://medrxiv.ai",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Language.help",
      href: "https://language.help",
      dates: "Aug 2023 - Present",
      active: true,
      description: "A better translator than Google, using GPT-3.5.",
      technologies: ["Next.js", "Typescript", "TailwindCSS", "GPT-3.5"],
      links: [
        {
          type: "Website",
          href: "https://language.help",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Art Gobblers Gallery Assistant",
      href: "https://github.com/rarepepi/artgobblers-discord-bot",
      dates: "Jul 2023 - Present",
      active: true,
      description: "A microservice that tracks art gobbles and glams.",
      technologies: ["Node.js", "Discord.js", "Web3.js"],
      links: [
        {
          type: "Source",
          href: "https://github.com/rarepepi/artgobblers-discord-bot",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "DefNotNewYorkTimes",
      href: "https://def-not-new-york-times-production.up.railway.app/",
      dates: "Dec 2023 - Present",
      active: true,
      description: "A parody of the New York Times written by AI.",
      technologies: ["Next.js", "Typescript", "GPT-3.5"],
      links: [
        {
          type: "Website",
          href: "https://def-not-new-york-times-production.up.railway.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Building Beaverz",
      href: "https://buildingbeaverz.com/",
      dates: "May 2024 - Present",
      active: true,
      description: "A team-based NFT game.",
      technologies: ["Next.js", "Web3.js", "Node.js"],
      links: [
        {
          type: "Website",
          href: "https://buildingbeaverz.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Hoot",
      href: "https://www.hootproject.com",
      dates: "Apr 2024 - Present",
      active: true,
      description: "A fully on-chain collection of CC0 MoonBirds.",
      technologies: ["Solidity", "Web3.js", "Next.js"],
      links: [
        {
          type: "Website",
          href: "https://www.hootproject.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Colors On Chain",
      href: "https://colorsonchain.com",
      dates: "Jun 2024 - Present",
      active: true,
      description: "A fun game about colors and NFT art.",
      technologies: ["Next.js", "Web3.js", "Solidity"],
      links: [
        {
          type: "Website",
          href: "https://colorsonchain.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Wall Street Bets Scraper",
      href: "https://github.com/rarepepi/wsbscraper",
      dates: "Sep 2024 - Present",
      active: true,
      description:
        "Counts occurrences of tickers on the WSB subreddit, providing insight into popular stocks.",
      technologies: ["Node.js", "Typescript", "Reddit API", "MongoDB"],
      links: [
        {
          type: "Source",
          href: "https://github.com/rarepepi/wsbscraper",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Alfred",
      href: "https://github.com/rarepepi/alfred",
      dates: "Jul 2023 - Present",
      active: true,
      description:
        "A stock and crypto account aggregator that operates through Telegram.",
      technologies: ["Node.js", "Typescript", "Telegram API", "PostgreSQL"],
      links: [
        {
          type: "Source",
          href: "https://github.com/rarepepi/alfred",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
} as const;