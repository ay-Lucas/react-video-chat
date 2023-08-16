import Google from "@mui/icons-material/Google";
import { Button, TextField } from "@mui/material";
import { FullScreenCard } from "../components/FullScreenCard";
export function Login() {
	const handleGoogle = () => {
		window.open("http://localhost:5173/auth/google", "_self");
	};
	return (
		<FullScreenCard>
			<div className="bg-white/80 backdrop-blur-lg rounded-lg sm:py-10 sm:px-20 drop-shadow-lg text-center mb-60">
				<div className="text-2xl mb-4">Login</div>
				<Button variant="contained" size="medium" color="error" onClick={handleGoogle}>
					<Google className="mr-2" />
					Login with Google
				</Button>
			</div>
		</FullScreenCard>
	);
}
