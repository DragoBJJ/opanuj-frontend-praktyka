import { MouseEventHandler, memo } from 'react';

type InputType = {
  name: string;
  onClick: (answer: string) => void;
};

export const Button = memo<InputType>(({ name, onClick }) => {
  return (
    <button
      className="flex mt-4 w-[160px] h-[48px] mx-auto  border-[1px] justify-center items-center ease-in-out duration-300 hover:bg-black hover:text-white hover:border-black bg-white !outline-none border-black"
      onClick={onClick as unknown as MouseEventHandler<HTMLButtonElement>}
    >
      {name}
    </button>
  );
});
