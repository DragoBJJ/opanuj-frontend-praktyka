import "@testing-library/jest-dom/vitest"

import {render,cleanup} from '@testing-library/react' // (or /dom, /vue, ...)
import { Country } from './index'
import { FlagData } from '../../../types/Country'

import {afterEach,test}  from "vitest"


const flagData: FlagData = {
  flag: "https://flagcdn.com/au.svg",
  alt: "flag"
}


afterEach(cleanup)

test('should display country', async () => {
  render(<Country flagData={flagData} />)
})