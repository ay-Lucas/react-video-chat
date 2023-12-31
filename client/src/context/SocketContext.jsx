import { createContext, useEffect, useRef, useState } from "react";
import Peer from "simple-peer";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

const SocketContext = createContext();
const ContextProvider = ({ children }) => {
	const [callAccepted, setCallAccepted] = useState(false);
	const [callEnded, setCallEnded] = useState(false);
	const [stream, setStream] = useState();
	const [name, setName] = useState("");
	const [call, setCall] = useState({});
	const [me, setMe] = useState("");

	const myVideo = useRef();
	const userVideo = useRef();
	const connectionRef = useRef();

	useEffect(() => {
		if (myVideo.current) {
			myVideo.current.srcObject = stream;
		}
	}, [stream]);

	useEffect(() => {
		navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((currentStream) => {
			setStream(currentStream);
			myVideo.current = currentStream;
			if (myVideo.current) {
				myVideo.current.srcObject = currentStream;
				console.log(myVideo.current.srcObject);
			}
		});

		socket.on("me", (id) => setMe(id));

		socket.on("callUser", ({ from, name: callerName, signal }) => {
			setCall({ isReceivingCall: true, from, name: callerName, signal });
		});
	}, []);

	const answerCall = () => {
		setCallAccepted(true);

		const peer = new Peer({ initiator: false, trickle: false, stream });

		peer.on("signal", (data) => {
			socket.emit("answerCall", { signal: data, to: call.from });
		});

		peer.on("stream", (currentStream) => {
			userVideo.current.srcObject = currentStream;
		});

		peer.signal(call.signal);

		connectionRef.current = peer;
	};

	const callUser = (id) => {
		const peer = new Peer({ initiator: true, trickle: false, stream });

		peer.on("signal", (data) => {
			console.log("emitted", data);
			socket.emit("callUser", { userToCall: id, signalData: data, from: me, name });
		});

		peer.on("stream", (currentStream) => {
			if (userVideo.current) {
				console.log(userVideo.current.srcObject);
				userVideo.current.srcObject = currentStream;
			}
		});

		socket.on("callAccepted", (signal) => {
			setCallAccepted(true);

			peer.signal(signal);
		});

		connectionRef.current = peer;
	};

	const leaveCall = () => {
		setCallEnded(true);

		connectionRef.current.destroy();

		// window.location.reload();
	};

	return (
		<SocketContext.Provider
			value={{
				call,
				callAccepted,
				myVideo,
				userVideo,
				stream,
				name,
				setName,
				callEnded,
				me,
				callUser,
				leaveCall,
				answerCall,
			}}
		>
			{children}
		</SocketContext.Provider>
	);
};

export { ContextProvider, SocketContext };
