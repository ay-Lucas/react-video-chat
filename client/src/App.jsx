import "./App.css";
import { FullScreenCard } from "./components/FullScreenCard";
import { Navbar } from "./components/Navbar";
import "./index.css";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import { Main } from "./pages/Main";
function App() {
	const user = false;
	return (
		<BrowserRouter>
			<div>
				<Routes>
					<Route path="/" element={user ? <Navigate to="/main" /> : <Home />} />
					<Route path="/main" element={user ? <Main /> : <Navigate to="/login" />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
