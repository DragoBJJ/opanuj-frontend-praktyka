import {SwitchType } from '../../types/filter';
import { UseCountriesContext } from '../../context/CountriesApiContext';
import Switch from '../atoms/Switch';

export const ModeSwitch = () => {
  const { mode, setMode } = UseCountriesContext();
  return (
    <div className="flex w-full h-full">
      <Switch<SwitchType> label="Mode" stateValue={mode} setStateValue={setMode} values={["GUESS", "SEARCH"]}/>
    </div>
  );
};
