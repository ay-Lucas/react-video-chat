import { FullScreenCard } from "../components/FullScreenCard";
import { Navbar } from "../components/Navbar";
import { VideoPlayer } from "../components/VideoPlayer";
export function Dashboard() {
	return (
		<div>
			<FullScreenCard>
				<VideoPlayer>
					<div>Video</div>
				</VideoPlayer>
			</FullScreenCard>
		</div>
	);
}
