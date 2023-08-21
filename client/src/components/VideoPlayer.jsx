import { Grid, Paper, Typography } from "@mui/material";
import { useContext } from "react";
import { SocketContext } from "../context/SocketContext";

// export function VideoPlayer({ children }) {
// 	const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext();

// 	return <div className="w-80 h-80 bg-slate-200 grid">{stream && <div className="grid-cols-1"></div>}</div>;
// }
// const useStyles = makeStyles((theme) => ({
// 	video: {
// 		width: "550px",
// 		[theme.breakpoints.down("xs")]: {
// 			width: "300px",
// 		},
// 	},
// 	gridContainer: {
// 		justifyContent: "center",
// 		[theme.breakpoints.down("xs")]: {
// 			flexDirection: "column",
// 		},
// 	},
// 	paper: {
// 		padding: "10px",
// 		border: "2px solid black",
// 		margin: "10px",
// 	},
// }));

const VideoPlayer = () => {
	const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
	console.log(name, callAccepted, myVideo, userVideo, callEnded, stream, call);

	return (
		<Grid container className="justify-center flex-col">
			{stream && myVideo && (
				<Paper className="p-5 border-black border-2 m-10">
					<Grid item xs={12} md={12}>
						<Typography variant="h5" gutterBottom>
							{name || "Name"}
						</Typography>
						<video playsInline muted ref={myVideo} autoPlay className="sm:w-[550px] w-[300px]" />
					</Grid>
				</Paper>
			)}
			{callAccepted && !callEnded && (
				<Paper className="p-10 border-black border-2 m-10">
					<Grid item xs={12} md={6}>
						<Typography variant="h5" gutterBottom>
							{call.name || "Name"}
						</Typography>
						<video playsInline ref={userVideo} autoPlay className="sm:w-[550px] w-[300px]" />
					</Grid>
				</Paper>
			)}
		</Grid>
	);
};
export default VideoPlayer;
