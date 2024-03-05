import { memo } from 'react';
import Title from '../components/atoms/Title';
import { SearchForm } from '../components/molecules/SearchForm/SearchForm';
import { CountryType } from '../types/Country';
import { UseCountriesContext } from '../context/CountriesApiContext';

type ContainerType = {
  title: string;
  viewFn: (countries: CountryType[]) => JSX.Element;
};

export const CountriesSearchContainer = memo<ContainerType>(
  ({ viewFn, title }) => {
    const { countries } = UseCountriesContext();

    return (
      <>
        <div className="flex flex-col mt-10">
          <Title title={title} />
          <div className="flex w-full align-center justify-center min-h-[200px] pt-8">
            <SearchForm />
          </div>
          <div className="pt-12" />
          {viewFn(countries)}
          <div className="pt-16" />
        </div>
      </>
    );
  }
);
