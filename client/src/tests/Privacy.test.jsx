import { test } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Privacy from "../components/Privacy";
import { render } from "@testing-library/react";

test("Privacy Component", () => {
	render(
		<MemoryRouter>
			<Privacy></Privacy>
		</MemoryRouter>
	);
});
