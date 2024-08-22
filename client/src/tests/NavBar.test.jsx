import { test } from "vitest";
import { MemoryRouter } from "react-router-dom";
import NavBar from "../components/NavBar";
import { render, screen } from "@testing-library/react";

test("NavBar Component", () => {
	render(
		<MemoryRouter>
			<NavBar></NavBar>
		</MemoryRouter>
	);

    //NavBar links render//
    screen.getByText("Home")
    screen.getByText("Characters")
    screen.getByText("Templates")
});
