import "@testing-library/jest-dom/vitest"

import {render,cleanup,screen} from '@testing-library/react' // (or /dom, /vue, ...)
import { SearchForm } from './SearchForm'

import {afterEach,test,expect}  from "vitest"

afterEach(cleanup)

test('Should display SearchForm correct', async () => {
  render(<SearchForm  />)
})


test("Should display controlls corect", async () => {
    render(<SearchForm  />) 
    expect(screen.getByLabelText("Sort by")).toBeInTheDocument()
     expect(screen.getByLabelText("Filter by")).toBeInTheDocument()
     expect(screen.getByLabelText("Choose filter")).toBeInTheDocument()
})