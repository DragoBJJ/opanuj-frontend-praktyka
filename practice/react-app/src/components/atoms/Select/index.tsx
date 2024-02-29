type SelectType<T extends string> = {
  value: T;
  label: string;
  setOption: (name: T) => void;
  options: T[];
};

export function Select<T extends string>({
  value,
  label,
  setOption,
  options,
}: SelectType<T>) {
  return (
    <label className="flex flex-col">
      {label}
      <select
        value={value}
        defaultValue={value}
        onChange={(e) => setOption(e.target.value as T)}
        className="h-8 my-2 indent-2 px-2 w-[200px] m-auto rounded-lg border-[1px] border-black text-black"
      >
        {options &&
          options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
      </select>
    </label>
  );
}
