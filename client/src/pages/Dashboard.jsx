import { Container } from "@mui/material";
import { FullScreenCard } from "../components/FullScreenCard";
import { Navbar } from "../components/Navbar";
import { VideoPlayer } from "../components/VideoPlayer";
export function Dashboard() {
	return (
		<div className="overflow-x-hidden">
			<Navbar />
			<div className="items-center">
				<FullScreenCard>
					<VideoPlayer>
						<div>Video</div>
					</VideoPlayer>
				</FullScreenCard>
			</div>
		</div>
	);
}
