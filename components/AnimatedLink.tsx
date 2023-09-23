import useAnimatedRouter from "@/hooks/useAnimatedRouter";
import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
};
export default function AnimatedLink({ href, children, className }: Props) {
  const { animatedRoute } = useAnimatedRouter();
  return (
    <Link
      href={href}
      className={className}
      onClick={() => {
        animatedRoute(href);
      }}
      passHref
    >
      {children}
    </Link>
  );
}
