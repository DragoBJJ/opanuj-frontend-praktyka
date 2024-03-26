import { ChangeEvent, memo } from 'react';

type InputType = {
  label: string;
  placeholder: string;
  setValue: (name: ChangeEvent<HTMLInputElement>) => void;
  name: string
  type: 'text' | 'number' | "email"
};

export const Input = memo<InputType>(
  ({ type,name, label, placeholder, setValue }) => {
    return (
      <label htmlFor={name} className="flex flex-col my-2">
        {label}
        <input
          className="border h-7 m-2 indent-2 p-4 mx-auto h-[40px] w-[200px] rounded-lg border-[1px] border-black"
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={(e) => setValue(e)}
        />
      </label>
    );
  }
);
