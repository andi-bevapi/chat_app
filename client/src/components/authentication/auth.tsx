import { useState } from "react";
import { Button, Stack, TextField } from "@mui/material";

const Auth = () => {

	const [loginField, setLoginField] = useState({ email: "", password: "" });
	const handleChange = (event: { target: { name: any; value: any; }; }) => {

		setLoginField((prevState) => {
			return { ...prevState, [event.target.name]: event.target.value }
		})
	}

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();



	}

	return (
		<Stack spacing={3}
			sx={{
				maxWidth: {
					xs: "80%",
					md: "80%"
				},
				margin: "25% auto",
				justifyContent: "center"
			}}>
			<form onSubmit={handleSubmit}>
				<TextField type="email" label="Email" variant="outlined" value={loginField.email} onChange={handleChange} />
				<TextField type="password" label="Password" variant="outlined" value={loginField.password} onChange={handleChange} />
				<Button variant="contained">Login</Button>
			</form>
		</Stack>
	)
}

export default Auth;