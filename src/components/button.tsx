import React from "react";
interface IButton {
  text: string;
  onClick?: () => void;
}
const Button: React.FC<IButton> = ({ text, onClick }) => {
  return (
    <>
      <button onClick={onClick}>{text}</button>
    </>
  );
};

export default Button;
