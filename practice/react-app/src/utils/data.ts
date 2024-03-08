import { CountryType } from '../types/Country';
import { CountryApiData } from '../types/apiData';

export type APIData = CountryApiData[] | { status: number; message: string };

const mapCountryApiData = (country: CountryApiData) => {
  const {name,flags,currencies,languages,capital,population} = country
  return {
    name: name.common,
    flagsData: {
      flag: flags.svg ? flags.svg : flags.png,
      alt: flags.alt,
    },
    currencies,
    languages,
    capital,
    population,
  };
};

export const agregateCountriesData = (countires: APIData): CountryType[] => {
  if (Array.isArray(countires) && countires.length) {
    return countires.map((country) => {
      return mapCountryApiData(country);
    });
  }
  return [];
};
