import { expect, test } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Home from "../components/Home";
import { screen, render } from "@testing-library/react";

test("Home Component", () => {
	render(
		<MemoryRouter>
			<Home></Home>
		</MemoryRouter>
	);

	expect(screen.getByText("Generic Character Sheet Builder"));
});
