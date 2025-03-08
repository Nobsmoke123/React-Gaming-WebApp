import { JSX } from "react";

export interface ButtonProps {
  id: string;
  title: string;
  rightIcon?: JSX.Element;
  leftIcon?: JSX.Element;
  containerClass: string;
}
