import { createBrowserRouter } from "react-router-dom";
import Login from "./authentication/Login/Login";
import Signup from "./authentication/Signup/Signup";


const router = createBrowserRouter([
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/signup",
		element: <Signup />,
	}
]);


export default router