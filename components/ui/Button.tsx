import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
  className?: string;
};

export function Button({ href, variant = "primary", children, className }: ButtonProps) {
  return (
    <a href={href} className={cn(`btn btn-${variant}`, className)}>
      {children}
    </a>
  );
}
