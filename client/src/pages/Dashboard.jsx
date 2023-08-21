import { AppBar } from "@mui/material";
import { FullScreenCard } from "../components/FullScreenCard";
import { Navbar } from "../components/Navbar";
import Notifications from "../components/Notifications";
import Sidebar from "../components/Sidebar";
import VideoPlayer from "../components/VideoPlayer";

export function Dashboard() {
	return (
		<div className="flex flex-col items-center w-full">
			<FullScreenCard>
				<VideoPlayer />
				<Sidebar>
					<Notifications />
				</Sidebar>
			</FullScreenCard>
		</div>
	);
}
