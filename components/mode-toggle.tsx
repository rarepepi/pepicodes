"use client";

import { Button } from "./ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      type="button"
      size="icon"
      className="relative px-2 motion-reduce:transform-none"
      aria-label="Toggle Theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <SunIcon className="theme-icon theme-icon-sun h-[1.2rem] w-[1.2rem] text-neutral-800 dark:text-neutral-200" />
      <MoonIcon className="theme-icon theme-icon-moon h-[1.2rem] w-[1.2rem] text-neutral-800 dark:text-neutral-200" />
    </Button>
  );
}
