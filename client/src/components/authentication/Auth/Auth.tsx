import { useState } from "react";
import { Button, Stack, TextField } from "@mui/material";
import "./auth.css";


interface AuthProps {
	submitLabel: string;
	onSubmit: (
		eventForm: React.FormEvent<HTMLFormElement>, 
		credentials: { email: string; password: string }) => Promise<void>;
	children: React.ReactNode
}

const Auth = ({ submitLabel, onSubmit, children }: AuthProps) => {

	const [loginField, setLoginField] = useState({ email: "", password: "" });
	const handleChange = (event: { target: { name: any; value: any; }; }) => {
		setLoginField((prevState) => {
			return { ...prevState, [event.target.name]: event.target.value }
		});
	}


	return (
		<Stack spacing={3}
			sx={{
				margin: "25% auto"
			}}>
			<form onSubmit={(eventForm) => onSubmit(eventForm, { email: loginField.email, password: loginField.password })}>
				<TextField type="email" label="Email" variant="outlined" value={loginField.email} name="email" onChange={handleChange} className="email" />
				<TextField type="password" label="Password" variant="outlined" value={loginField.password} name="password" onChange={handleChange} className="password" />
				<Button variant="contained" className="submit" type="submit">{submitLabel}</Button>
				<div className="link-container">
					{children}
				</div>
			</form>
		</Stack>
	)
}

export default Auth;