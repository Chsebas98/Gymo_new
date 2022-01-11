import React, { useState } from "react";
import {
  TextField,
  InputAdornment,
  IconButton,
  OutlinedInput,
  FormControl,
  InputLabel,
  Button,
} from "@mui/material";
//Icons
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
const Login = () => {
  //form states

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  //changes

  const emailChange = (e) => {
    setEmail(e.target.value);
  };
  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  const showPasswordClik = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container mt-5 mb-5 col-10 col-sm-8 col-md-6 col-lg-5">
      <div className="text-center mb-5 alert alert-primary">
        <label htmlFor="" className="h2">
          Login
        </label>
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

        <div className="form-group">
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

        <div className="text-center mt-4">
          <Button variant="contained" disabled={!email || !password}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
