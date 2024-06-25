import { Link } from "react-router-dom";
import { Link as MaterialLink } from "@mui/material";
import Auth from "../Auth/Auth";

const Signup = () => {
	return (
		<>
			<Auth submitLabel="Signup" onSubmit={async () => { }} >
				<Link to={'/login'}>
					<MaterialLink href="#" underline="none">
						Login
					</MaterialLink>
				</Link>
			</Auth>
		</>
	)
}

export default Signup;