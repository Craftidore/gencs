import { test } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Templates from "../components/Templates";
import { render } from "@testing-library/react";

test("NavBar Component", () => {
	render(
		<MemoryRouter>
			<Templates></Templates>
		</MemoryRouter>
	);
});
