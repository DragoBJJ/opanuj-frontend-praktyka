import { memo } from 'react';
import { Dispatch, SetStateAction } from 'react';
import { KeyboardType, keyOptions } from '../../../types/eventType';

type SwitchType<T extends string> = {
  label: string;
  values: T[];
  stateValue: T;
  setStateValue: Dispatch<SetStateAction<T>>;
};


 function Switch<T extends string>({
  values,
  stateValue,
  label,
  setStateValue,
}: SwitchType<T>) {
    const switchDynamicStyle = `bg-green-600 translate-x-[25px] border-green`;
    const isSearch = stateValue === "SEARCH";

    const handleKeyDown =(e: KeyboardType) => {
        if(keyOptions[e.code])  {
          const handleValue = isSearch ? values[0]: values[1];
          setStateValue(handleValue);
        }
    }

  return (
<div role="switch" aria-checked={isSearch} onKeyDown={(e)=> handleKeyDown(e)} tabIndex={0} className='flex hover:outline-none hover:bg-green-600 hover:cursor-pointer focus:outline-none focus:bg-green-600 focus:cursor-pointer justify-center items-center border-[1px] rounded-lg border-[#005a9c] p-4 w-full max-w-[320px] h-[48px] mt-4 select-none'>
<span className="label m-4 w-[8em] w-[200px]">{label}</span>
  <span className={`flex mx-2 justify-center items-center relative inline-block t-[6px] border-[2px] border-solid border-black bg-white rounded-xl h-[20px] w-12`}>
    <span className={`absolute inline-block top-[2px] left-[2px] easy-in-out duration-300 rounded-lg h-[12px] w-[12px] ${isSearch ? switchDynamicStyle: "border-[2px] border-solid border-black bg-black"}`}></span>
  </span>
<div className='flex w-20' aria-hidden="true">
<span onClick={()=> setStateValue(values[0])}  className={`cursor-pointer ${isSearch ? "inline": "hidden"}`} aria-hidden="true">{values[0]}</span>
  <span onClick={()=> setStateValue(values[1])} className={`cursor-pointer ${isSearch ? "hidden": "inline"}`} aria-hidden="true">{values[1]}</span>
</div>
</div>
  );
}

export default memo(Switch) as typeof Switch;
