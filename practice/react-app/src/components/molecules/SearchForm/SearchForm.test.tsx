import "@testing-library/jest-dom/vitest"

import {render,cleanup,screen, waitFor} from '@testing-library/react' // (or /dom, /vue, ...)
import { SearchForm } from './SearchForm'

import {afterEach,test,expect,describe}  from "vitest"
import { customRender } from "../../../tests/context"
import userEvent from "@testing-library/user-event"
import { CountriesContextValues } from "../../../context/CountriesApiContext"
import { country } from "../../../tests/testData"

afterEach(cleanup)


describe("Testing Context Consumer", () => {

  const providerProps: CountriesContextValues = {
    countries: [country],
    mode: "SEARCH",
    filter: 'Poland',
    filterOption: 'name',
    sortOption: "initial",
    setCountries: () => {},
    setSortOption: () => {},
    setFilterOption: () => {},
    setMode: () => {},
    setFilter: () =>  {}
  }
  
  test('Should display SearchForm correct', async () => {
    render(<SearchForm  />)
  })
  
  
  test("Should display controlls corect", async () => {
      render(<SearchForm  />) 
      expect(screen.getByLabelText("Sort by")).toBeInTheDocument()
       expect(screen.getByLabelText("Filter by")).toBeInTheDocument()
       expect(screen.getByLabelText("Please write your Country: name")).toBeInTheDocument()
  })
  
  
  test("Should input has correct country value", async () => {
    customRender(<SearchForm />, {providerProps});
  
  
    const input = screen.getByLabelText("Please write your Country: name")
    expect(input).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Country")).toHaveValue("Poland");
  
  
    await userEvent.type(screen.getByPlaceholderText("Country"), "Poland")
  
     await waitFor(()=> {
      expect(screen.getByPlaceholderText("Country")).toHaveValue("Poland");
    })
  })
})

