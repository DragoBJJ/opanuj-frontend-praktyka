import { render } from "@testing-library/react"
import { CountriesContext, CountriesContextValues } from "../context/CountriesApiContext"

type CustomRender = {
  providerProps : CountriesContextValues
}

export const customRender = (ui: JSX.Element, {providerProps, ...renderOptions}: CustomRender) => {
  return render(
    <CountriesContext.Provider value={providerProps}>{ui}</CountriesContext.Provider>,
    renderOptions,
  )
}


