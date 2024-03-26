import { memo } from 'react';
import { Country } from '../atoms/CountryCard';
import { CountryType } from '../../types/Country';

type CountriesListType = {
  countries: CountryType[];
};

export const CountriesList = memo<CountriesListType>(({ countries }) => {
  return countries ? (
    <ol className="grid grid-cols-1 gap-4 list-none md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {countries.map(({ name, flagsData }, index) => {
        return <Country key={index} name={name} flagData={flagsData} />;
      })}
    </ol>
  ) : (
    <></>
  );
});
