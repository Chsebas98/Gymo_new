export const register = async ({ username, email, password } = {}) => {
	const user = { username, email, password };

	try {
		const res = await fetch(`${process.env.REACT_APP_API_URL}/register`, {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		});

		return await res.json();
	} catch (err) {
		throw new Error(`No se puede registrar en este momento. ${err}`);
	}
};

export const login = async ({ email, password } = {}) => {
	const user = { email, password };

	try {
		const res = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
			method: "POST",
			credentials: "include",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		});

		return await res.json();
	} catch (err) {
		throw new Error(`No se puede iniciar sesión en este momento. ${err}`);
	}
};

export const logout = async () => {
	try {
		const res = await fetch(`${process.env.REACT_APP_API_URL}/logout`, {
			method: "GET",
			credentials: "include",
		});
		return await res.json();
	} catch (err) {
		console.log(err);
	}
};

export const getUser = async () => {
	try {
		const res = await fetch(`${process.env.REACT_APP_API_URL}/user`, {
			method: "GET",
			credentials: "include",
		});
		return await res.json();
	} catch (err) {
		throw new Error("Inicie sesión para continuar");
	}
};
