"use client";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import Image from "next/image";
import { encode } from "qss";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LinkPreviewProps = {
  children: React.ReactNode;
  url: string;
  className?: string;
  target?: string;
  width?: number;
  height?: number;
  quality?: number;
} & (
  | { isStatic: true; imageSrc: string }
  | { isStatic?: false; imageSrc?: never }
);

export const LinkPreview = ({
  children,
  url,
  className,
  target,
  width = 200,
  height = 125,
  quality = 50,
  isStatic = false,
  imageSrc = "",
}: LinkPreviewProps) => {
  let src;
  if (!isStatic) {
    const params = encode({
      url,
      screenshot: true,
      meta: false,
      embed: "screenshot.url",
      colorScheme: "dark",
      "viewport.isMobile": true,
      "viewport.deviceScaleFactor": 1,
      "viewport.width": width * 3,
      "viewport.height": height * 3,
    });
    src = `https://api.microlink.io/?${params}`;
  } else {
    src = imageSrc;
  }

  return (
    <HoverCardPrimitive.Root openDelay={300} closeDelay={100}>
      <HoverCardPrimitive.Trigger
        className={cn("text-black dark:text-white", className)}
        href={url}
        target={target}
      >
        {children}
      </HoverCardPrimitive.Trigger>

      <HoverCardPrimitive.Content
        className="link-preview-content z-50 rounded-xl shadow-xl"
        side="top"
        align="center"
        sideOffset={10}
      >
        <Link
          href={url}
          className="block rounded-xl border-2 border-transparent bg-white p-1 shadow transition-colors duration-150 hover:border-neutral-200 dark:hover:border-neutral-800"
          style={{ fontSize: 0 }}
          target={target}
        >
          <Image
            src={isStatic ? imageSrc : src}
            width={width}
            height={height}
            quality={quality}
            className="rounded-lg"
            alt="preview image"
          />
        </Link>
      </HoverCardPrimitive.Content>
    </HoverCardPrimitive.Root>
  );
};
