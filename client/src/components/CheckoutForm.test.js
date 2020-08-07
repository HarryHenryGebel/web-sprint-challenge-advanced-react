import React from "react";
import { fireEvent, render, screen} from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm/>);
});

test("form shows success message on submit with form details", async() => {
  render(<CheckoutForm />);

  // locate elements
  const firstName = screen.getByTestId("firstName"),
        lastName = screen.getByTestId("lastName"),
        address = screen.getByTestId("address"),
        city = screen.getByTestId("city"),
        state = screen.getByTestId("state"),
        zip = screen.getByTestId("zip"),
        submitButton = screen.getByTestId("submitButton");

  // fill out the form
  await fireEvent.change(firstName, {target: {value: "Harry"}});
  await fireEvent.change(lastName, {target: {value: "Gebel"}});
  await fireEvent.change(address, {target: {value: "13300 Walsingham RD"}});
  await fireEvent.change(city, {target: {value: "Largo"}});
  await fireEvent.change(state, {target: {value: "Florida"}});
  await fireEvent.change(zip, {target: {value: "37744"}});

  // Submit form
  await fireEvent.click(submitButton);

  // test for success
  expect(await screen.getByTestId("successMessage")).toBeInTheDocument();
});

//  LocalWords:  firstName lastName submitButton
