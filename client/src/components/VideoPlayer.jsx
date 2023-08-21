import { Grid, Paper, Typography } from "@mui/material";
import { useContext } from "react";
import { SocketContext } from "../context/SocketContext";

const VideoPlayer = () => {
	const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
	console.log(name, callAccepted, myVideo, userVideo, callEnded, stream, call);
	console.log(call);
	return (
		<Grid container className="justify-center flex-row">
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
				<Paper className="p-5 border-black border-2 m-10">
					<Grid item xs={12} md={12}>
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
