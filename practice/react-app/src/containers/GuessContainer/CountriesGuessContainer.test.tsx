import "@testing-library/jest-dom/vitest"
import userEvent from "@testing-library/user-event"

import {cleanup,screen} from '@testing-library/react' // (or /dom, /vue, ...)
import { CountriesGuessContainer } from './CountriesGuessContainer'

import {afterEach,test, expect}  from "vitest"
import { CountryType } from "../../types/Country"
import { Country } from "../../components/atoms/Country"
import { customRender } from "../../tests/context"
import { providerProps } from "../../tests/testData"

afterEach(cleanup)

test("Should CountriesGuessContainer render Country correctly", async () => {
     customRender(<CountriesGuessContainer
      viewFn={({name, flagsData }: CountryType) => (
        <Country name={name} flagData={flagsData} />
      )}
    />, {providerProps}); 


    const countryTitle = screen.getByText("Bermuda");
    
    expect(countryTitle).toBeInTheDocument();

  
})