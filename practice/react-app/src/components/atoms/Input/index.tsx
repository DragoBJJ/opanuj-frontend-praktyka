import { ChangeEvent, memo } from 'react';

type InputType = {
  label: string;
  value: string;
  placeholder?: string;
  setValue: (name: ChangeEvent<HTMLInputElement>) => void;
  type: 'text' | 'number' | "date" | "radio"
  name: string
};

export const Input = memo<InputType>(
  ({ type, value, name, label, placeholder, setValue }) => {
    return (
      <label className="flex flex-col my-2">
        {label}
        <input
          className="border h-7 m-2 indent-2 p-4 mx-auto h-[40px] w-[200px] rounded-lg border-[1px] border-black"
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e)}
        />
      </label>
    );
  }
);
