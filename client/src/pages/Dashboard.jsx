import { FullScreenCard } from "../components/FullScreenCard";
import { VideoPlayer } from "../components/VideoPlayer";
export function Dashboard() {
	return (
		<FullScreenCard>
			<VideoPlayer>
				<div>Video</div>
			</VideoPlayer>
		</FullScreenCard>
	);
}
