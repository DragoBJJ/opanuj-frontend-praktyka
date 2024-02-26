import { memo } from 'react';
import { FlagData } from '../../../types/Country';

export type CountryType = {
  name?: string;
  flagData: FlagData;
};

export const Country = memo<CountryType>(
  ({ name, flagData: { flag, alt } }) => {
    return (
      <li className="flex flex-col items-center">
        {name && <h3>{name}</h3>}
        <img src={flag} alt={alt} />
      </li>
    );
  }
);
