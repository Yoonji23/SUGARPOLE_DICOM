import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
}

export const Category = ({ children, onClick }: ButtonProps) => {
  return (
    <li
      className="header-category font-category click-active"
      onClick={onClick}
    >
      {children}
    </li>
  );
};
