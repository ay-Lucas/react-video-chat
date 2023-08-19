import { useEffect, useState } from "react";

const useUser = () => {
	const [user, setUser] = useState(null);
	useEffect(() => {
		if (user === null) {
			console.log(user);
			fetch("http://localhost:3000/auth/login/success", {
				method: "GET",
				credentials: "include",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json",
					"Access-Control-Allow-Credentials": true,
				},
			})
				.then((response) => {
					if (response.status === 200) return response.json();
					throw new Error("authentication has been failed!");
				})
				.then((resObject) => {
					setUser(resObject.user);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, []);
	return user;
};
export default useUser;
