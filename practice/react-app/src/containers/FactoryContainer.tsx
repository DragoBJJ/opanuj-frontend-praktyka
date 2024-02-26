import { CountryType } from '../types/Country';

import { CountriesSearchContainer } from './CountriesSearchContainer';
import { CountriesList } from '../components/molecules/CountriesList';
import { CountriesGuessContainer } from './CountriesGuessContainer';
import { Country } from '../components/atoms/Country';
import { UseCountriesContext } from '../context/CountriesApiContext';

export const FactoryContainer = () => {
  const { mode } = UseCountriesContext();

  switch (mode) {
    case 'SEARCH':
      return (
        <CountriesSearchContainer
          title="Countries Search"
          viewFn={(countries: CountryType[]) => (
            <CountriesList countries={countries} />
          )}
        />
      );
    case 'GUESS':
      return (
        <CountriesGuessContainer
          viewFn={({ flagsData }: CountryType) => (
            <Country flagData={flagsData} />
          )}
        />
      );

    default:
      return <></>;
  }
};
