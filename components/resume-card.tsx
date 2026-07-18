"use client";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardHeader } from "./ui/card";
import { cn } from "../lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
}
export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Link
      href={href || "#"}
      className="group block cursor-pointer rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring active:scale-[0.99]"
      onClick={handleClick}
      target="_blank"
    >
      <Card className="flex items-center rounded-2xl border border-transparent bg-transparent p-2.5 transition-[background-color,border-color,transform] duration-200 ease-out group-hover:border-border/70 group-hover:bg-card/70">
        <div className="flex-none">
          <Avatar className="m-auto size-10 border border-border/70 bg-muted dark:bg-foreground">
            <AvatarImage src={logoUrl} alt={altText} className="object-cover" />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="ml-3 min-w-0 flex-grow">
          <CardHeader className="gap-1">
            <div className="flex items-start justify-between gap-4 text-base">
              <h3 className="inline-flex min-w-0 items-center font-semibold leading-tight text-sm sm:text-base">
                {title}
                {badges && (
                  <span className="inline-flex gap-x-1">
                    {badges.map((badge, index) => (
                      <Badge
                        variant="secondary"
                        className="align-middle text-xs"
                        key={index}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </span>
                )}
                <ChevronRightIcon
                  className={cn(
                    "ml-1 size-4 shrink-0 opacity-0 transition-[transform,opacity] duration-200 ease-out group-hover:translate-x-0.5 group-hover:opacity-100",
                    isExpanded ? "rotate-90" : "rotate-0"
                  )}
                />
              </h3>
              <div className="shrink-0 text-right text-[11px] tabular-nums text-muted-foreground sm:text-sm">
                {period}
              </div>
            </div>
            {subtitle && (
              <div className="line-clamp-2 font-sans text-xs leading-5 text-muted-foreground sm:text-sm">
                {subtitle}
              </div>
            )}
          </CardHeader>
          {description && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,

                height: isExpanded ? "auto" : 0,
              }}
              transition={{
                duration: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-2 text-xs text-muted-foreground sm:text-sm"
            >
              {description}
            </motion.div>
          )}
        </div>
      </Card>
    </Link>
  );
};
