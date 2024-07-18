import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Button from "../Button";
describe("Button Test Cases", () => {
  test("Rendering button", () => {
    const {getByTestId} = render(<Button/>)
    const element = getByTestId('button-test-id');
    // console.log(element);
    expect(element).toBeTruthy()
  });

  test("Check if text is correct", () => {
    const text="click"
    const {getByText} = render(<Button text={text}/>)
    getByText(text);
  });

  test("Check if onClick is triggered", () => {
    const onClick = jest.fn();
    const {getByTestId} = render(<Button handleSubmit={onClick}/>)
    const element = getByTestId('button-test-id');  
    fireEvent.click(element);
    expect(onClick).toHaveBeenCalled();
});

test("Check if snapshots are mapped properly", () => {
    const onClick = jest.fn();
    const text = "bye"
    const {asFragment} = render(<Button text={text}  handleSubmit={onClick}/>)
    expect(asFragment()).toMatchSnapshot();
  });

});
