import { test } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Footer from "../components/Footer";
import { render, screen } from "@testing-library/react";

test("NavBar Component", () => {
	render(
		<MemoryRouter>
			<Footer></Footer>
		</MemoryRouter>
	);

    //Footer links render//
	screen.getByText("About");
	screen.getByText("Privacy");
});
