import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import useUser from "./hooks/useUser";
import "./index.css";
import { Dashboard } from "./pages/Dashboard";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
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
					<Route path="/login" element={!user ? <Login /> : <Navigate to="/dashboard" />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
