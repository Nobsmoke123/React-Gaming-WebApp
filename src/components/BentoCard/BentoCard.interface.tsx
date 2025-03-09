import { JSX } from "react";

export interface BentoCardProps {
  src: string;
  title: JSX.Element;
  description?: string;
}
