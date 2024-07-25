import { Link } from "react-router-dom";
import { Link as MaterialLink } from "@mui/material";
import Auth from "../Auth/Auth";
import { useCreateUser } from "../../../hooks/useCreateUser";


interface CreateUserInput {
	email: string,
	password: string
}

const Signup = () => {
	const [createUser] = useCreateUser();

	const handleSubmit = async (eventForm: React.FormEvent<HTMLFormElement>, { email, password }: { email: string; password: string; }):Promise<void> => {
		eventForm.preventDefault();
		console.log("we are here");

		await createUser({
			variables: {
				createUserInput: {
					email,
					password
				}
			}
		})
	}

		return (
			<>
				<Auth submitLabel="Signup" onSubmit={(eventForm, { email, password }) => handleSubmit(eventForm, { email, password })}>
					<Link to={'/login'}>
						<MaterialLink href="#" underline="none">
							Login
						</MaterialLink>
					</Link>
				</Auth >
			</>
		)
	}

	export default Signup;