import { createBrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Characters from "./components/Characters";
import Templates from "./components/Templates";
import About from "./components/About";
import Privacy from "./components/Privacy";
import Footer from "./components/Footer";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<>
				<NavBar />
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
				path: "/templates",
				element: <Templates />,
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
	// {
	// 	path: "/",
	// 	element: <Footer />,
	// 	children: [
	// 		{
	// 			path: "/about",
	// 			element: <About />,
	// 		},
	// 		{
	// 			path: "/privacy",
	// 			element: <Privacy />,
	// 		},
	// 	],
	// },
]);

export default router;
