import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Recipe from "../src/components/Recipe";

test("renders recipe with the correct title ", () => {
    // Setup - rendering the component on the page
    const title = 'Finnish cinammon buns';
    const type = 'dessert';
    const duration = 60;
    render(
        <Recipe 
            title={title}
            type={type}
            duration={duration} 
        />
    );

    // Assert
    expect(screen.getByRole("heading")).toHaveTextContent("Finnish cinammon buns");
});