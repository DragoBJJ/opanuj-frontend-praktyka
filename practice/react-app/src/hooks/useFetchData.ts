import { useCallback, useEffect, useState } from 'react';
import { CountryType } from '../types/Country';
import { FilterOptions, ModeType } from '../types/filter';
import { buildApiUrl, fetchCountryData } from '../utils/api';

type FetchDataType = {
  filterOption: FilterOptions;
  filter: string;
  mode: ModeType;
};

export const useFetchCountryData = ({
  filterOption,
  filter,
  mode = 'SEARCH',
}: FetchDataType) => {
  const [countries, setCountries] = useState<CountryType[]>([]);

  const { API } = buildApiUrl(filterOption, filter, mode);

  const getCountryData = useCallback(async () => {
    setCountries(await fetchCountryData(API, mode));
  }, [API, mode]);

  useEffect(() => {
    if (mode === 'SEARCH' && filter.length <= 2) {
      return setCountries([]);
    }
  }, [mode, filter.length]);


  useEffect(()=> {
    getCountryData();
  },[getCountryData])

  return { countries, setCountries };
};
