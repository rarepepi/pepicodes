import { Icons } from "../components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { IoLogoGithub, IoMdGlobe } from "react-icons/io";

export const DATA = {
  name: "Pepi Martinez",
  initials: "PM",
  url: "https://pepi.codes",
  location: "New York, NY",
  locationLink: "https://www.google.com/maps/place/newyorkcity",
  description:
    "Curious hacker turned Software Engineer. I love building things and exploring the edge of what is possible.",
  summary:
    "At 5, I connected to dial-up internet and became fascinated with computers. By 9, I built my first computer to play video games. At 13, I started writing malware, finding joy in outsmarting antivirus software. At 15, I shifted my focus to full stack web apps. By, 16 I bought my first Bitcoin, discovering a passion for decentralized permissionless networks and I haven't looked back since.",
  avatarUrl: "/me.jpeg",
  skills: [
    "Typescript",
    "Solidity",
    "Node.js",
    "Go",
    "Python",
    "Next.js",
    "Nest.js",
    "PostgreSQL",
    "Redis",
    "React",
    "React Native",
    "Docker",
    "EVM",
    "Smart Contracts",
    "Tailwind CSS",
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
      dates: "Dec 2022 - Mar 2023",
      active: true,
      description: "Summarizing your favorite Discord conversations.",
      technologies: ["Typescript", "Node.js", "Nest.js", "Discord.js", "GPT-4"],
      links: [
        {
          type: "Source",
          href: "https://github.com/summify-ai/summify-discord",
          icon: <IoLogoGithub size={16} />,
        },
      ],
      image: "/projects/summify.png",
      video: "",
    },
    {
      title: "Blockery",
      href: "https://blockery.app",
      dates: "Jul 2022 - Mar 2024",
      active: true,
      description: "Your new home for NFT analytics and knowledge.",
      technologies: ["Typescript", "Node.js", "Nest.js", "PostgreSQL"],
      links: [
        {
          type: "Website",
          href: "https://blockery.app",
          icon: <IoMdGlobe size={16} />,
        },
      ],
      image: "/projects/blockery.png",
      video: "",
    },
    {
      title: "GenArts",
      href: "https://genarts.ai",
      dates: "Mar 2023 - Dec 2023",
      active: true,
      description: "AI generated art.",
      technologies: ["Typescript", "Node.js", "Next.js", "Stable Diffusion"],
      links: [
        {
          type: "Website",
          href: "https://genarts.ai",
          icon: <IoMdGlobe size={16} />,
        },
      ],
      image: "",
      video: "/projects/genarts.mp4",
    },
    {
      title: "WutFloor",
      href: "https://wutfloor.xyz",
      dates: "Dec 2021 - Apr 2023",
      active: true,
      description: "An NFT portfolio analyzer.",
      technologies: ["Typescript", "Node.js", "Next.js", "OpenSea API"],
      links: [
        {
          type: "Website",
          href: "https://wutfloor.xyz",
          icon: <IoMdGlobe size={16} />,
        },
      ],
      image: "/projects/wutfloor.png",
      video: "",
    },
    {
      title: "biorxiv.ai",
      href: "https://biorxiv.ai",
      dates: "Dec 2022 - Sep 2023",
      active: true,
      description: "The AI professor for biology.",
      technologies: ["Typescript", "Node.js", "Next.js", "GPT-4", "OpenAI API"],
      links: [
        {
          type: "Website",
          href: "https://biorxiv.ai",
          icon: <IoMdGlobe size={16} />,
        },
      ],
      image: "/projects/biorxiv.png",
      video: "",
    },
    {
      title: "Language.help",
      href: "https://language.help",
      dates: "Dec 2022 - Mar 2024",
      active: true,
      description: "A better translator than Google, using GPT-4.",
      technologies: ["Typescript", "Node.js", "Next.js", "GPT-4", "OpenAI API"],
      links: [
        {
          type: "Website",
          href: "https://language.help",
          icon: <IoMdGlobe size={16} />,
        },
      ],
      image: "/projects/langugagehelp.png",
      video: "",
    },
    {
      title: "Art Gobblers Gallery Bot",
      href: "https://github.com/rarepepi/artgobblers-discord-bot",
      dates: "Dec 2022 - Feb 2023",
      active: true,
      description:
        "A Discord bot for an experiment by J. Roiland(Creator of Rick and Morty) and Paradigm",
      technologies: [
        "Typescript",
        "Node.js",
        "Nest.js",
        "Discord.js",
        "Ethers.js",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/rarepepi/artgobblers-discord-bot",
          icon: <IoLogoGithub size={16} />,
        },
      ],
      image: "/projects/artgobblers.png",
      video: "",
    },
    {
      title: "Colors On Chain",
      href: "https://colorsonchain.com",
      dates: "Sep 2021 - Dec 2022",
      active: true,
      description: "Fully on-chain stored SVG Colors",
      technologies: ["Solidity", "Typescript", "Node.js", "Next.js", "React"],
      links: [
        {
          type: "Website",
          href: "https://colorsonchain.com",
          icon: <IoMdGlobe size={16} />,
        },
      ],
      image: "/projects/colorsonchain.png",
      video: "",
    },
    {
      title: "Alfred",
      href: "https://github.com/rarepepi/alfred",
      dates: "Jun 2018 - Jul 2020",
      active: true,
      description:
        "A stock and crypto account aggregator that operates through Telegram.",
      technologies: ["Python", "Telegram API", "PostgreSQL"],
      links: [
        {
          type: "Source",
          href: "https://github.com/rarepepi/alfred",
          icon: <IoLogoGithub size={16} />,
        },
      ],
      image: "/projects/alfred.png",
      video: "",
    },
  ],
} as const;
