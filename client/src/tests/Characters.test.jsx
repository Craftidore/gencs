import { test } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Characters from "../components/Characters";

test("Characters Component Renders", () => {
	<MemoryRouter>
		<Characters></Characters>
	</MemoryRouter>;
});
