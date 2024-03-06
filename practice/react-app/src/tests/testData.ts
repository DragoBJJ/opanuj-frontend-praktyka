import { CountriesContextValues } from "../context/CountriesApiContext"
import { CountryType } from "../types/Country"

export const country: CountryType  = {
    name: 'Bermuda', 
    flagsData:  {flag: 'https://flagcdn.com/bm.svg', alt: "country"},
    currencies: {"BMD": {name: 'Bermudian dollar', symbol: '$'}},
    languanges: {eng  : "English"},
  capital: ['Hamilton'],
  population:  63903
  }
  
  export const providerProps: CountriesContextValues = {
  countries: [country],
  mode: "GUESS",
  filter: '',
  filterOption: 'initial',
  sortOption: 'initial',
  setCountries: () => {},
  setSortOption: () => {},
  setFilterOption: () => {},
  setMode: () => {},
  setFilter: () => {},
  }