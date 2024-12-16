import { test } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Characters from "../components/Characters";
import { render } from "@testing-library/react";

test("NavBar Component", () => {
	render(
		<MemoryRouter>
			<Characters></Characters>
		</MemoryRouter>
	);
});
