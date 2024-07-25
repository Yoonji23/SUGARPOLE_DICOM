import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

export const Category = ({ children }: ButtonProps) => {
  return <li className="header-category font-category">{children}</li>;
};
