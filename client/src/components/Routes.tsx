import { createBrowserRouter } from "react-router-dom";
import Auth from "./authentication/auth";


const router = createBrowserRouter([
	{
		path: "/login",
		element: <Auth />,
	},
]);


export default router