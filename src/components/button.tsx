import React from "react";
interface IButton {
  text: string;
  onClick?: () => void;
  type?: "submit" | "reset" | "button" | undefined;
}
const Button: React.FC<IButton> = ({ text, onClick, type }) => {
  return (
    <>
      <button type={type} onClick={onClick}>
        {text}
      </button>
    </>
  );
};

export default Button;
