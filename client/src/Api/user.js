export const register = async ({
	name_user,
	email_user,
	password_user,
	confirmPassword,
	admin,
} = {}) => {
	const user = { name_user, email_user, password_user, confirmPassword, admin };

	try {
		const res = await fetch(process.env.API_URL + "register", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		});
		return await res.json();
	} catch (err) {
		throw new Error("No se puede registrar en este momento " + err);
	}
};

export const login = async ({ email_user, password_user } = {}) => {
	const user = { email_user, password_user };

	try {
		const res = await fetch(process.env.API_URL + "login", {
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
		throw new Error("No se puede loguear en este momento");
	}
};

export const logout = async () => {
	try {
		const res = await fetch(process.env.API_URL + "logout", {
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
		const res = await fetch(process.env.API_URL + "secret", {
			method: "GET",
			credentials: "include",
		});
		return await res.json();
	} catch (err) {
		throw new Error("Inicie sesión para continuar");
	}
};
