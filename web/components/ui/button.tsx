"use client";

import { motion } from "framer-motion";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "../../lib/utils";

const MotionButton = motion.create("button");
const MotionAnchor = motion.create("a");

type NativeButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
type NativeAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export interface ButtonProps extends Partial<NativeButtonProps & NativeAnchorProps> {
  variant?: "solid" | "outline" | "ghost";
  href?: string;
}

export function Button({ className, variant = "solid", children, href, ...rest }: ButtonProps) {
  const Component: any = href ? MotionAnchor : MotionButton;
  const componentProps = href
    ? { href, ...rest }
    : { type: (rest as NativeButtonProps).type ?? "button", ...rest };

  return (
    <Component
      {...componentProps}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        variant === "solid" && "bg-primary text-darkBlue shadow-glow focus-visible:outline-primary/60",
        variant === "outline" &&
          "border border-primary text-primary focus-visible:outline-primary/60 dark:text-white dark:border-primary/80",
        variant === "ghost" && "text-primary hover:bg-primary/10 focus-visible:outline-primary/40",
        className
      )}
    >
      {children}
    </Component>
  );
}
