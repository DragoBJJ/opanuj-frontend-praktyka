import { MouseEventHandler, memo } from "react";

type InputType = {
  name: string;
  onClick?: (answer: string) => void;
  type?: "submit" | "reset" | "button"
};

export const Button = memo<InputType>(({ name,type, onClick }) => {
  return (
    <button
      tabIndex={0}
      type={type}
      className="flex mt-4 w-40 h-12 mx-auto  border-[1px] justify-center items-center ease-in-out duration-300 hover:bg-green-600 text-black hover:text-white bg-white hover:border-black !outline-none border-black"
      onClick={onClick as unknown as MouseEventHandler<HTMLButtonElement>}
    >
      {name}
    </button>
  );
});