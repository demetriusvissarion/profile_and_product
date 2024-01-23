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

test("renders with the correct job ", () => {
    const name = 'Quackie Makers';
    const birthdate = 'Quackie Makers';
    const job = "Makers' favourite rubber duck";

    const { getByTestId } = render(
    <Profile name={name} job={job} birthdate={birthdate} />
    );

    const jobElement = getByTestId('job');

    expect(jobElement).toBeInTheDocument();
    expect(jobElement.textContent).toBe(job);
});
