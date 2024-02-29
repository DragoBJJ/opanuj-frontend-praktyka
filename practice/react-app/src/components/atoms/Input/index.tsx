import { memo } from 'react';

type InputType = {
  label: string;
  name: string;
  placeholder: string;
  setName: (name: string) => void;
  type: 'text' | 'number';
};

export const Input = memo<InputType>(
  ({ type, name, label, placeholder, setName }) => {
    return (
      <label className="flex flex-col my-2">
        {label}
        <input
          className="border h-7 m-2 indent-2 p-4 mx-auto h-10 w-[200px] rounded-lg border-[1px] border-black"
          type={type}
          placeholder={placeholder}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    );
  }
);
