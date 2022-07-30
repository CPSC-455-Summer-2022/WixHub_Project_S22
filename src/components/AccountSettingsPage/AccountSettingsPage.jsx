import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from "../CommonComponents/Footer";

const theme = createTheme();

export default function AccountSettingsPage() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<main>
				"Account Settings"
			</main>
			<Footer />
		</ThemeProvider>
	);
}