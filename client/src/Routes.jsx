import { createBrowserRouter, Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Characters from "./components/Characters";
import Character from "./components/Character";
import Templates from "./components/Template";
import TemplateEditor from "./components/TemplateEditor/TemplateEditor.jsx";
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
				element: <Character />,
			},
			{
				path: "/templates",
				element: <TemplateEditor/>, // FIX: Shouldn't be template editor; temporary
			},
			{
				path: "/templates/:templateid",
				element: <TemplateEditor />,
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
