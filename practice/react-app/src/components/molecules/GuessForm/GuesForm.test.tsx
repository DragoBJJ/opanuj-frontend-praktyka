import "@testing-library/jest-dom/vitest"
import userEvent from "@testing-library/user-event"

import {render,cleanup,screen} from '@testing-library/react' // (or /dom, /vue, ...)
import { GuessForm } from './GuessForm'

import {afterEach,test,expect}  from "vitest"

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
    render(<GuessForm  />) 

 
   const button = screen.getByText("Check")
   await userEvent.click(button)

   const validateText = screen.getByText("Your input cannot be empty")
   
   expect(validateText).toBeInTheDocument();
    
})