import "./App.css";
import { FullScreenCard } from "./components/FullScreenCard";
import { Navbar } from "./components/Navbar";
import "./index.css";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

import { useEffect, useState } from "react";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import useUser from "./hooks/useUser";
import { Dashboard } from "./pages/Dashboard";
function App() {
	// const user = false;
	const user = useUser();
	console.log(user);
	return (
		<BrowserRouter>
			<div>
				<Routes>
					<Route path="/" element={user ? <Navigate to="/dashboard" /> : <Home />} />
					<Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
