import React from "react";
import TextField from "../TextField";
import { fireEvent, getByTestId, getByText, render, within } from "@testing-library/react";
describe("Text Field Test", () => {
  test("Rendering text field", () => {
    const { getByTestId } = render(<TextField />);
    const element = getByTestId("textfield-input-test-id");
    expect(element).toBeTruthy();
  });

  test("Check if label is correct", () => {
    const label = "test-label";
    const { getByTestId } = render(<TextField label={label} />);
    const element = getByTestId('textfield-label-test-id')
    const {getByText} = within(element);
    expect(getByText(label)).toBeTruthy();
  });

  test("Check if displayed value is correct", () => {
    const value = "test-value";
    const { getByDisplayValue } = render(<TextField value={value} />);
    getByDisplayValue("test-value");
  });

  test("Check if placeholder is correct", () => {
    const placeholder = "input placeholder";
    const { getByPlaceholderText } = render(<TextField label={placeholder} />);
    getByPlaceholderText("input placeholder");
  });

  test("Check if value is changed on typing", () => {
    const { getByTestId } = render(<TextField />);
    const element = getByTestId("textfield-input-test-id");
    fireEvent.change(element, { target: { value: "test-change" } });
    expect(element.value).toBe("test-change");
  });

  test("Check if onChange is triggered", () => {
    const onChange = jest.fn();
    const { getByTestId } = render(<TextField onChange={onChange} />);
    const element = getByTestId("textfield-input-test-id");
    console.log(element.value); //before change
    fireEvent.change(element, { target: { value: "test-onChange" } });
    console.log(element.value); //after change
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  test("Check if snapshots are mapped properly", () => {
    const onChange = jest.fn();
    const text = "bye";
    const { asFragment } = render(
      <TextField label={text} value="test-snapshot" />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
