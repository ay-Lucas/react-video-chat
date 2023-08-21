import { Button } from "@mui/material";
import { Link, Navigate } from "react-router-dom";
import useUser from "../hooks/useUser";

export function Navbar({ user }) {
	//bg-[#404eed]
	// const user = useUser();
	const handleLogout = () => {
		window.open("http://localhost:3000/auth/logout", "_self");
	};
	return (
		<nav className=" bg-indigo-700 text-white">
			<div className="flex">
				<div className="w-full">Navbar</div>
				{user ? (
					<Button variant="text" sx={{ color: "white" }} onClick={handleLogout}>
						Logout
					</Button>
				) : (
					<Link to="/login">
						<Button variant="text" sx={{ color: "white" }}>
							Login
						</Button>
					</Link>
				)}
			</div>
		</nav>
	);
}
