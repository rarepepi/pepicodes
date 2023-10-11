"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaAirbnb } from "react-icons/fa";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MdImageSearch, MdQuestionMark } from "react-icons/md";
import { BiBlanket } from "react-icons/bi";
import { ModeToggle } from "./ModeToggle";
import AnimatedLink from "./AnimatedLink";

export const Nav = () => {
  const router = useRouter();

  return (
    <nav className="w-full">
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex">
            <AnimatedLink href="/">
              <div className="flex items-center justify-center w-16">
                <img
                  src="/img/logo.png"
                  className="w-16 rounded-full p-3 hover:scale-110"
                />
              </div>
            </AnimatedLink>
          </div>
          <div className="sm:flex hidden">
            <AnimatedLink
              className="px-3 py-3.5 dark:text-zinc-400 dark:hover:text-zinc-100 rounded-md text-lg font-bold focus:outline-none hover:bg-primary-color hover:text-secondary-color"
              href="/projects"
            >
              Projects
            </AnimatedLink>

            <AnimatedLink
              className="px-3 py-3.5 dark:text-zinc-400 dark:hover:text-zinc-100 rounded-md text-lg  font-bold focus:outline-none hover:bg-primary-color hover:text-secondary-color"
              href="/about"
            >
              About
            </AnimatedLink>
            <Link
              className="px-3 py-3.5 dark:text-zinc-400 dark:hover:text-zinc-100 rounded-md text-lg  font-bold focus:outline-none hover:bg-primary-color hover:text-secondary-color"
              href="https://rarepepi.substack.com/"
              target="_blank"
            >
              Writing
            </Link>
          </div>

          <div className="sm:hidden">
            <AnimatedLink
              className="px-3 py-3.5 dark:text-zinc-400 dark:hover:text-zinc-100 rounded-md text-md font-bold focus:outline-none hover:bg-primary-color hover:text-secondary-color"
              href="/projects"
            >
              Projects
            </AnimatedLink>

            <AnimatedLink
              className="px-3 py-3.5 dark:text-zinc-400 dark:hover:text-zinc-100 rounded-md text-md font-bold focus:outline-none hover:bg-primary-color hover:text-secondary-color"
              href="/about"
            >
              About
            </AnimatedLink>
            <Link
              className="px-3 py-3.5 dark:text-zinc-400 dark:hover:text-zinc-100 rounded-md text-md font-bold focus:outline-none hover:bg-primary-color hover:text-secondary-color"
              href="https://rarepepi.substack.com/"
              target="_blank"
            >
              Writing
            </Link>
          </div>
          <div className="flex justify-center sm:items-stretch sm:justify-start">
            <div className="">
              <div className="flex items-center justify-center w-16">
                <ModeToggle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
