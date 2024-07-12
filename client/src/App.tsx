import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import Router from "./components/Routes";
import { ApolloProvider } from "@apollo/client";
import client from "./constants/apollo-client";

const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
})
const App = () => {
	return (
		<ApolloProvider client={client}>
			<ThemeProvider theme={darkTheme}>
				<CssBaseline />
				<Container>
					<RouterProvider router={Router} />
				</Container>
			</ThemeProvider>
		</ApolloProvider>
	);
}

export default App;
