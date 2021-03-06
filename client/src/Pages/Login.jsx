import React, { useState } from "react";
// design
import {
	TextField,
	InputAdornment,
	IconButton,
	OutlinedInput,
	FormControl,
	InputLabel,
	Button,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Login = () => {
	// form states
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
		} catch (error) {}
	};
	return (
		<div className="container mt-5 mb-5 col-10 col-sm-8 col-md-6 col-lg-5">
			<div className="text-center mb-5 alert alert-primary">
				<div className="text-center">
					<label htmlFor="" className="h2 mb-3">
						Inicio de sesión
					</label>
				</div>
				<div className="form-group mb-4">
					<TextField
						size="small"
						variant="outlined"
						className="form-control"
						label="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="form-group">
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
				</div>

				<div className="text-center mt-4">
					<Button
						variant="contained"
						disabled={!email || !password}
						onClick={handleLogin}
					>
						Submit
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Login;
