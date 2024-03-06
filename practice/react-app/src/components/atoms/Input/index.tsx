import { memo } from 'react';

type InputType = {
  label: string;
   value: string;
  placeholder: string;
  setValue: (name: string) => void;
  type: 'text' | 'number';
};

export const Input = memo<InputType>(
  ({ type, value, label, placeholder, setValue }) => {

    return (
      <label className="flex flex-col my-2">
        {label}
        <input
    
          className="border h-7 m-2 indent-2 p-4 mx-auto h-[40px] w-[200px] rounded-lg border-[1px] border-black"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </label>
    );
  }
);
