import {render, screen} from '@testing-library/react' // (or /dom, /vue, ...)
import { Country } from '../components/atoms/Country'
import { FlagData } from '../types/Country'


const flagData: FlagData = {
  flag: "https://flagcdn.com/au.svg",
  alt: "flag"
}

test('should display country', () => {
  render(<Country flagData={flagData} />)
  const country = screen.getByAltText('flag')
  // Events and assertions...
  expect(country).toBeTruthy();
})