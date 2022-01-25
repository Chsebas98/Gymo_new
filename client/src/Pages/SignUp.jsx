import React, { useState } from "react";
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
//Icons
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

//Api functions
import { register } from "../api/user";

const SignUp = () => {
	//form states
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);

	//changes

	const emailChange = (e) => {
		setEmail(e.target.value);
	};
	const passwordChange = (e) => {
		setPassword(e.target.value);
	};

	const usernameChange = (e) => {
		setUsername(e.target.value);
	};

	const ConnfirmPasswordChange = (e) => {
		setConfirmPassword(e.target.value);
	};

	const showPasswordClik = () => {
		setShowPassword(!showPassword);
	};

	//password validation

	//Expresiones regulares
	let hasSixChar = password.length >= 6;
	let hasLowerChar = /(.*[a-z].*)/.test(password);
	let hasUpperChar = /(.*[A-Z].*)/.test(password);
	let hasNumber = /(.*[0-9].*)/.test(password);
	let hasSpecialChar = /(.*[^a-zA-Z0-9].*)/.test(password);

	return (
		<div className="container mt-5 mb-5 col-10 col-sm-8 col-md-6 col-lg-5">
			<div className="mb-5 alert alert-primary">
				<div className="text-center">
					<label htmlFor="" className="h2">
						Register
					</label>
				</div>

				<div className="form-group mb-3">
					<TextField
						size="small"
						variant="outlined"
						className="form-control"
						label="Username"
						value={username}
						onChange={usernameChange}
					/>
				</div>

				<div className="form-group mb-3">
					<TextField
						size="small"
						variant="outlined"
						className="form-control"
						label="Email"
						value={email}
						onChange={emailChange}
					/>
				</div>

				<div className="form-group mb-3">
					<FormControl variant="outlined" size="small" className="form-control">
						<InputLabel>Password</InputLabel>
						<OutlinedInput
							label="Password"
							value={password}
							type={showPassword ? "text" : "password"}
							onChange={passwordChange}
							endAdornment={
								<InputAdornment>
									<IconButton edge="end" onClick={showPasswordClik}>
										{showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
									</IconButton>
								</InputAdornment>
							}
						/>
					</FormControl>
				</div>

				{password && (
					<div className="ms-2 mb-2" style={{ columns: 2 }}>
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

						<div className={hasUpperChar ? "text-success" : "text-danger"}>
							{hasUpperChar ? (
								<span className="text-success">
									<CheckCircleIcon className="mr-1" fontSize="small" />
									<small>Como mínimo 1 mayúscula</small>
								</span>
							) : (
								<span className="text-danger">
									<CancelIcon className="mr-1" fontSize="small" />
									<small>Como mínimo 1 mayúscula</small>
								</span>
							)}
						</div>

						<div className={hasSpecialChar ? "text-success" : "text-danger"}>
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

						<div className={hasNumber ? "text-success" : "text-danger"}>
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
					</div>
				)}

				<div className="form-group mb-3">
					<TextField
						size="small"
						type="password"
						variant="outlined"
						className="form-control"
						label="Confirm Password"
						value={confirmPassword}
						onChange={ConnfirmPasswordChange}
					/>
					{password && confirmPassword && (
						<FormHelperText className="ms-2 mt-1">
							{password === confirmPassword ? (
								<span className="text-success">Las contraseñas coinciden</span>
							) : (
								<span className="text-danger">Las contraseñas no coinciden</span>
							)}
						</FormHelperText>
					)}
				</div>

				<div className="text-center mt-4">
					<Button
						variant="contained"
						disabled={
							!username ||
							!confirmPassword ||
							!email ||
							!password ||
							password !== confirmPassword ||
							!hasSixChar ||
							!hasLowerChar ||
							!hasUpperChar ||
							!hasNumber ||
							!hasSpecialChar
						}
					>
						Submit
					</Button>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
