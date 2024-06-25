import { Link } from "react-router-dom";
import { Link as MaterialLink } from "@mui/material"
import Auth from "../Auth/Auth";

const Login = () => {
	return (
		<>
			<Auth submitLabel="Login" onSubmit={async () => { }} >
				<Link to={'/signup'}>
					<MaterialLink href="#" underline="none">
						Signup
					</MaterialLink>
				</Link>
			</Auth>
		</>
	)
}

export default Login;