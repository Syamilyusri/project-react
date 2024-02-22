import { AccountCircleOutlined } from "@mui/icons-material";
import { Container, CssBaseline, Box, Avatar, Typography, TextField, Button, Grid } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/LoginStyles.css";
import { validateEmail, validatePresence } from "../Validation-TS/LoginValidation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const handleLogin = () => {
    // Reset any previous errors
    setEmailError(null);
    setPasswordError(null);
    // Validate presence of email
    const emailPresenceError = validatePresence(email);
    if (emailPresenceError) {
      setEmailError(emailPresenceError);
      return;
    }
    // Validate email
    const emailValidationError = validateEmail(email);
    if (emailValidationError) {
      setEmailError(emailValidationError);
      return;
    }
    // Validate presence of password
    const passwordPresenceError = validatePresence(password);
    if (passwordPresenceError) {
      setPasswordError(passwordPresenceError);
      return;
    }
    // Proceed with login if validations pass
    console.log("Email:", email);
    console.log("Password:", password);
  };
  // Form for login
  return (
    <>
      <div className="blur-background">
        <Container maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              mt: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              bgcolor: "#e1f5fe",
              padding: 3,
              border: "1px solid #bdbdbd",
              borderRadius: 8,
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "primary.light" }}>
              <AccountCircleOutlined />
            </Avatar>
            <Typography variant="h5">Login</Typography>
            <Box sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!emailError}
                helperText={emailError}
                sx={{ bgcolor: "white" }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!!passwordError}
                helperText={passwordError}
                sx={{ bgcolor: "white" }}
              />
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: "#3c65fa" }}
                onClick={handleLogin}
              >
                Login
              </Button>
              <Grid container justifyContent={"flex-end"}>
                <Grid item>
                  <Link to="/"> Forgot password?</Link>
                </Grid>
              </Grid>
              <Grid container justifyContent={"flex-end"}>
                <Grid item>
                  Don't have an account?<Link to="/registration"> Register now</Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </div>
    </>
  );
};

export default Login;
