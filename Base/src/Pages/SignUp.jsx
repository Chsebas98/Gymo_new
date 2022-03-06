import React, { useState } from "react";
import { useHistory, Redirect } from "react-router-dom";

// design
import {
	TextField,
	InputAdornment,
	IconButton,
	OutlinedInput,
	FormControl,
	InputLabel,
	Button,
	FormHelperText,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

// functions
import { register } from "../api/user";

const Signup = () => {
	const history = useHistory();

	// form states
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);

	// password validation
	let hasSixChar = password.length >= 6;
	let hasLowerChar = /(.*[a-z].*)/.test(password);
	let hasUpperChar = /(.*[A-Z].*)/.test(password);
	let hasNumber = /(.*[0-9].*)/.test(password);
	let hasSpecialChar = /(.*[^a-zA-Z0-9].*)/.test(password);

	const handleRegister = async (e) => {
		e.preventDefault();

		try {
			const res = await register({ username, email, password });
			if (res.error) alert.error(res.error);
			else {
				alert.success(res.message);
				// redirect the user to login
				history.replace("/login");
			}
		} catch (err) {
			alert.error(err);
		}
	};

	return !user ? (
		<div className="container mt-5 mb-5 col-10 col-sm-8 col-md-6 col-lg-5">
			<div className="mb-5 alert alert-primary">
				<div className="text-center mb-3">
					<label htmlFor="" className="h2">
						Registro de Usuario
					</label>
				</div>
				<div className="form-group mb-3">
					<TextField
						size="small"
						variant="outlined"
						className="form-control"
						label="Nombre de Usuario"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>
				<div className="form-group mb-3">
					<TextField
						size="small"
						variant="outlined"
						className="form-control"
						label="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="form-group mb-3">
					<FormControl variant="outlined" size="small" className="form-control">
						<InputLabel>Password</InputLabel>
						<OutlinedInput
							label="Password"
							type={showPassword ? "text" : "password"}
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							endAdornment={
								<InputAdornment>
									<IconButton edge="end" onClick={() => setShowPassword(!showPassword)}>
										{showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
									</IconButton>
								</InputAdornment>
							}
						/>
					</FormControl>
					{password && (
						<div className="ml-1" style={{ columns: 2 }}>
							<div>
								{hasSixChar ? (
									<span className="text-success">
										<CheckCircleIcon className="mr-1" fontSize="small" />
										<small>Como mínimo 6 carácteres</small>
									</span>
								) : (
									<span className="text-danger">
										<CancelIcon className="mr-1" fontSize="small" />
										<small>Como mínimo 6 carácteres</small>
									</span>
								)}
							</div>
							<div>
								{hasLowerChar ? (
									<span className="text-success">
										<CheckCircleIcon className="mr-1" fontSize="small" />
										<small>Como mínimo 1 letra minúscula</small>
									</span>
								) : (
									<span className="text-danger">
										<CancelIcon className="mr-1" fontSize="small" />
										<small>Como mínimo 1 letra minúscula</small>
									</span>
								)}
							</div>
							<div>
								{hasUpperChar ? (
									<span className="text-success">
										<CheckCircleIcon className="mr-1" fontSize="small" />
										<small>Como mínimo 1 letra mayúscula</small>
									</span>
								) : (
									<span className="text-danger">
										<CancelIcon className="mr-1" fontSize="small" />
										<small>Como mínimo 1 letra mayúscula</small>
									</span>
								)}
							</div>
							<div>
								{hasNumber ? (
									<span className="text-success">
										<CheckCircleIcon className="mr-1" fontSize="small" />
										<small>Como mínimo 1 número</small>
									</span>
								) : (
									<span className="text-danger">
										<CancelIcon className="mr-1" fontSize="small" />
										<small>Como mínimo 1 número</small>
									</span>
								)}
							</div>
							<div>
								{hasSpecialChar ? (
									<span className="text-success">
										<CheckCircleIcon className="mr-1" fontSize="small" />
										<small>Como mínimo 1 caracter especial</small>
									</span>
								) : (
									<span className="text-danger">
										<CancelIcon className="mr-1" fontSize="small" />
										<small>Como mínimo 1 caracter especial</small>
									</span>
								)}
							</div>
						</div>
					)}
				</div>
				<div className="form-grou mb-3">
					<TextField
						size="small"
						type="password"
						variant="outlined"
						className="form-control"
						label="Confirmar Password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>
					{password && confirmPassword && (
						<FormHelperText className="ml-1 mt-1">
							{password === confirmPassword ? (
								<span className="text-success">Contraseñas Coinciden</span>
							) : (
								<span className="text-danger">Contraseñas no coinciden</span>
							)}
						</FormHelperText>
					)}
				</div>

				<div className="text-center mt-4">
					<Button
						variant="contained"
						disabled={
							!username ||
							!email ||
							!password ||
							!confirmPassword ||
							password !== confirmPassword ||
							!hasSixChar ||
							!hasLowerChar ||
							!hasUpperChar ||
							!hasNumber ||
							!hasSpecialChar
						}
						onClick={handleRegister}
					>
						Registrarse
					</Button>
				</div>
			</div>
		</div>
	) : (
		<Redirect to="/" />
	);
};

export default Signup;
