import { Button } from "@mui/material";
import { useContext, useEffect } from "react";

import { SocketContext } from "../context/SocketContext";

const Notifications = () => {
	const { answerCall, call, callAccepted } = useContext(SocketContext);
	// useEffect(() => {
	// 	console.log(call);
	// 	console.log(answerCall);
	// 	console.log(callAccepted);
	// }, [call, answerCall, callAccepted]);
	return (
		<>
			{call.isReceivingCall && !callAccepted && (
				<div className="flex justify-around">
					<h1>{call.name} is calling:</h1>
					<Button variant="contained" color="primary" onClick={answerCall}>
						Answer
					</Button>
				</div>
			)}
		</>
	);
};

export default Notifications;
