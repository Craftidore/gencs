import { test } from "vitest";
import { MemoryRouter } from "react-router-dom";
import About from "../components/About";
import { render, screen } from "@testing-library/react";

test("NavBar Component", () => {
	render(
		<MemoryRouter>
			<About></About>
		</MemoryRouter>
	);

	screen.getByText("About");
	screen.getByText(
		"Generic Character Sheet Builder is a tool designed to make playing indie RPGs virtually more accessible, as most such rpgs do not have dedicated online tooling. This aims to fill in this gap, permitting one to create character sheet templates for any RPG, which work kinda like form-fill pdfs, except without all the jank that form-fill pdfs are known for."
	);
});
