import { render } from "@testing-library/react"
import '@testing-library/jest-dom'
import ItemsList from "./ItemsList"

describe("My Component", () => {
  test("renders the Button component", () => {
    const { queryByText } = render(<ItemsList data={"data"}/>)
    expect(queryByText("component")).toBeInTheDocument()
  })
})