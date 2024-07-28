import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
}
export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button className="blue-button click-active" onClick={onClick}>
      {children}
    </button>
  );
};
