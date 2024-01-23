import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Profile from "../src/components/Profile";

test("renders with the correct title ", () => {
    // Setup - rendering the component on the page
    const name = 'Quackie Makers';
    const birthdate = 'Quackie Makers';
    const job = "Makers' favourite rubber duck";
    render(
        <Profile 
            name={name} 
            birthdate={birthdate} 
            job={job}
    />
    );

    // Assert
    expect(screen.getByRole("heading")).toHaveTextContent("Quackie Makers");
});
