import React, { useState } from "react";
import { register } from "../Api/user";
import { useNavigate } from "react-router-dom";
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
const Register = () => {
	let navigate = useNavigate();
	// form states
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [admin, setAdmin] = useState(false);

	// password validation
	let hasSixChar = password.length >= 6;
	let hasLowerChar = /(.*[a-z].*)/.test(password);
	let hasUpperChar = /(.*[A-Z].*)/.test(password);
	let hasNumber = /(.*[0-9].*)/.test(password);
	let hasSpecialChar = /(.*[^a-zA-Z0-9].*)/.test(password);
	//functions
	const handleRegister = async (e) => {
		e.preventDefault();
		try {
			const res = await register({
				name_user: username,
				email_user: email,
				password_user: password,
				confirmPassword,
				admin,
			});
			if (res.error) {
				alert(res.error);
			} else {
				alert(res.message);
				//redirect a login page
				navigate("/login");
			}
		} catch (error) {
			alert(error);
		}
	};
	return (
		<div className="container mt-5 mb-5 col-10 col-sm-8 col-md-6 col-lg-5">
			<div className="mb-5 alert alert-primary bg-dark">
				<div className="text-center mb-3 ">
					<label htmlFor="" className="h2 text-light">
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
						<div className="ml-1" style={{ columns: 2, color: "black" }}>
							<div>
								{hasSixChar ? (
									<span className="text-success">
										<CheckCircleIcon className="mr-1" fontSize="small" />
										<small>Como m??nimo 6 car??cteres</small>
									</span>
								) : (
									<span className="text-danger">
										<CancelIcon className="mr-1" fontSize="small" />
										<small>Como m??nimo 6 car??cteres</small>
									</span>
								)}
							</div>
							<div>
								{hasLowerChar ? (
									<span className="text-success">
										<CheckCircleIcon className="mr-1" fontSize="small" />
										<small>Como m??nimo 1 letra min??scula</small>
									</span>
								) : (
									<span className="text-danger">
										<CancelIcon className="mr-1" fontSize="small" />
										<small>Como m??nimo 1 letra min??scula</small>
									</span>
								)}
							</div>
							<div>
								{hasUpperChar ? (
									<span className="text-success">
										<CheckCircleIcon className="mr-1" fontSize="small" />
										<small>Como m??nimo 1 letra may??scula</small>
									</span>
								) : (
									<span className="text-danger">
										<CancelIcon className="mr-1" fontSize="small" />
										<small>Como m??nimo 1 letra may??scula</small>
									</span>
								)}
							</div>
							<div>
								{hasNumber ? (
									<span className="text-success">
										<CheckCircleIcon className="mr-1" fontSize="small" />
										<small>Como m??nimo 1 n??mero</small>
									</span>
								) : (
									<span className="text-danger">
										<CancelIcon className="mr-1" fontSize="small" />
										<small>Como m??nimo 1 n??mero</small>
									</span>
								)}
							</div>
							<div>
								{hasSpecialChar ? (
									<span className="text-success">
										<CheckCircleIcon className="mr-1" fontSize="small" />
										<small>Como m??nimo 1 caracter especial</small>
									</span>
								) : (
									<span className="text-danger">
										<CancelIcon className="mr-1" fontSize="small" />
										<small>Como m??nimo 1 caracter especial</small>
									</span>
								)}
							</div>
						</div>
					)}
				</div>
				<div className="form-group mb-3">
					<TextField
						size="small"
						type="password"
						variant="outlined"
						className="form-control text-light"
						label="Confirmar Password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>
					{password && confirmPassword && (
						<FormHelperText className="ml-1 mt-1">
							{password === confirmPassword ? (
								<span className="text-success">Contrase??as Coinciden</span>
							) : (
								<span className="text-danger">Contrase??as no coinciden</span>
							)}
						</FormHelperText>
					)}
				</div>

				<div className="form-group mb-3">
					<TextField
						size="small"
						variant="outlined"
						className="form-control"
						label="Administrador"
						value={admin}
						onChange={(e) => setAdmin(e.target.value)}
					/>
				</div>

				<div className="text-center mt-4">
					<Button
						variant="contained"
						className="text-dark bg-light"
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
	);
};

export default Register;
