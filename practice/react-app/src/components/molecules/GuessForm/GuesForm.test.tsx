import "@testing-library/jest-dom/vitest"
import userEvent from "@testing-library/user-event"

import {render,cleanup,screen} from '@testing-library/react' // (or /dom, /vue, ...)
import { GuessForm } from './GuessForm'

import {afterEach,test,expect}  from "vitest"
import { CountriesProvider } from "../../../context/CountriesApiContext"

afterEach(cleanup)

test('Should display GuessForm correct', async () => {
  render(<GuessForm  />)
})


test("Should display controlls correct", async () => {
    render(<GuessForm  />) 

    expect(screen.getByLabelText("What is your answer ?")).toBeInTheDocument()
    expect(screen.getByText("What is the name of the country ?")).toBeInTheDocument()
    expect(screen.getByText("Check")).toBeInTheDocument()
    expect(screen.getByText("Draw again")).toBeInTheDocument()
    
})


test("Country input validation works correctly", async () => {
    render(<CountriesProvider>
            <GuessForm  />
        </CountriesProvider>) 

 
   const button = screen.getByText("Check")
   await userEvent.click(button)

   const validateText = screen.getByText("Your input cannot be empty")
   const input = screen.getByPlaceholderText("Country")
   
   expect(validateText).toBeInTheDocument();

   await userEvent.type(input,"Poland")

  expect(validateText).toBeInTheDocument();
  
})