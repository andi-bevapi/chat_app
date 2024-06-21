import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import Router from "./components/Routes";

const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
})
const App = () => {
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<Container>
				<RouterProvider router={Router} />
			</Container>
		</ThemeProvider>
	);
}

export default App;
