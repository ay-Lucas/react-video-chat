import Google from "@mui/icons-material/Google";
import { Button } from "@mui/material";
import { FullScreenCard } from "../components/FullScreenCard";
export function Home() {
	const handleGoogle = () => {
		window.open("http://localhost:5173/auth/google", "_self");
	};
	return (
		<div className="bg-slate-900 flex justify-center">
			<FullScreenCard>
				<div className="bg-white/80 backdrop-blur-lg rounded-lg sm:p-16 p-5 drop-shadow-lg text-center mb-60">
					<div className="text-4xl mb-4">
						Easy Chat
						<div className="text-lg mt-2">Video Call and Chat</div>
					</div>
					<Button variant="contained" size="medium" color="error" onClick={handleGoogle}>
						<Google className="mr-2" />
						Login with Google
					</Button>
				</div>
			</FullScreenCard>
		</div>
	);
}
