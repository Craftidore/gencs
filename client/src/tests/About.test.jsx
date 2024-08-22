import { test } from "vitest";
import { MemoryRouter } from "react-router-dom";
import About from "../components/About";

test("About Component Renders", () => {
	<MemoryRouter>
		<About></About>
	</MemoryRouter>;
});
