import { createBrowserRouter, Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Characters from "./components/Characters";
import Character from "./components/Character";
import Templates from "./components/Templates";
import Template from "./components/Template";
import About from "./components/About";
import Privacy from "./components/Privacy";
import Footer from "./components/Footer";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<>
				<NavBar />
                <main>
                    <Outlet />
                </main>
				<Footer />
			</>
		),
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/characters",
				element: <Characters />,
			},
            {
                path: "/characters/:charid",
                element: <Character />
            },
			{
				path: "/templates",
				element: <Templates />,
			},
			{
                path: "/templates/:templateid",
				element: <Template />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/privacy",
				element: <Privacy />,
			},
		],
	},
]);

export default router;
