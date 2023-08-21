import { AppBar } from "@mui/material";
import { FullScreenCard } from "../components/FullScreenCard";
import { Navbar } from "../components/Navbar";
import Notifications from "../components/Notifications";
import Sidebar from "../components/Sidebar";
import VideoPlayer from "../components/VideoPlayer";
// const useStyles = makeStyles((theme) => ({
// 	appBar: {
// 		borderRadius: 15,
// 		margin: "30px 100px",
// 		display: "flex",
// 		flexDirection: "row",
// 		justifyContent: "center",
// 		alignItems: "center",
// 		width: "600px",
// 		border: "2px solid black",

// 		[theme.breakpoints.down("xs")]: {
// 			width: "90%",
// 		},
// 	},
// 	image: {
// 		marginLeft: "15px",
// 	},
// 	wrapper: {
// 		display: "flex",
// 		flexDirection: "column",
// 		alignItems: "center",
// 		width: "100%",
// 	},
// }));
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
