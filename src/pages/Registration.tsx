import React, { useState, useEffect } from "react";
import { Avatar, Box, Button, Container, CssBaseline, Grid, MenuItem, TextField, Typography } from "@mui/material";
import { KeyboardDoubleArrowRightOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { validatePresence, validateName, validateEmail, validatePassword, validateConfirmPassword, validateDateOfBirth, validateDayInput } from "../Validation-TS/RegisterValidation";
import { getMaxDaysInMonth, monthNames } from "../Register-TS/DOB";
import "../CSS/RegisterStyles.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [dobDay, setDobDay] = useState("");
  const [dobMonth, setDobMonth] = useState("");
  const [dobYear, setDobYear] = useState("");
  const [nameError, setNameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState<string | null>(null);
  const [dobError, setDobError] = useState<string | null>(null);

  useEffect(() => {
    // Get current date
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    // Set default values for dob fields
    setDobYear(currentYear.toString());
    setDobMonth(currentMonth.toString().padStart(2, "0"));
    setDobDay(currentDay.toString().padStart(2, "0"));
  }, []);

  // Max day in month
  const maxDaysInMonth = getMaxDaysInMonth(parseInt(dobYear), parseInt(dobMonth));
  const handleRegister = async () => {
    // Reset previous errors
    setNameError(null);
    setEmailError(null);
    setPasswordError(null);
    setConfirmPasswordError(null);
    setDobError(null);

    // Validate name
    const nameValidationError = validateName(name);
    if (nameValidationError) {
      setNameError(nameValidationError);
      return;
    }
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
    // Validate password
    const passwordValidationError = validatePassword(password);
    if (passwordValidationError) {
      setPasswordError(passwordValidationError);
      return;
    }
    // Validate confirmation password
    const confirmPasswordValidationError = validateConfirmPassword(password, confirmPassword);
    if (confirmPasswordValidationError) {
      setConfirmPasswordError(confirmPasswordValidationError);
      return;
    }
    // Validate dob
    const dobValidationError = validateDateOfBirth(dobDay, dobMonth, dobYear);
    if (dobValidationError) {
      setDobError(dobValidationError);
      return;
    }
    // The maximum number of days in the selected month
    const maxDaysInMonth = getMaxDaysInMonth(parseInt(dobYear), parseInt(dobMonth));

    // Validaye day input
    const dayValidationError = validateDayInput(dobDay, maxDaysInMonth);
    if (dayValidationError) {
      setDobError(dayValidationError);
      return;
    }
    // Combine day, month, and year
    const dob = `${dobYear}-${dobMonth}-${dobDay}`;
    // Proceed with registration if validations pass
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Date of Birth:", dob);
  };

  // Form for registration
  return (
    <div className="blur-background">
      <Container maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            mt: 4,
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
            <KeyboardDoubleArrowRightOutlined />
          </Avatar>
          <Typography variant="h5">Create a New Account</Typography>
          <Box sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  error={!!nameError}
                  helperText={nameError}
                  sx={{ bgcolor: "white" }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={!!emailError}
                  helperText={emailError}
                  sx={{ bgcolor: "white" }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  error={!!passwordError}
                  helperText={passwordError}
                  sx={{ bgcolor: "white" }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  error={!!confirmPasswordError}
                  helperText={confirmPasswordError}
                  sx={{ bgcolor: "white" }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1" sx={{ marginBottom: -1 }}>
                  Date of Birth
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  select
                  required
                  fullWidth
                  name="dobMonth"
                  label="Month"
                  id="dobMonth"
                  value={dobMonth}
                  onChange={(e) => setDobMonth(e.target.value)}
                  error={!!dobError}
                  helperText={dobError}
                  sx={{ bgcolor: "white" }}
                >
                  {monthNames.map((month, index) => (
                    <MenuItem key={index + 1} value={(index + 1).toString().padStart(2, "0")}>
                      {month}
                    </MenuItem>
                  ))}
                </TextField>

              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  fullWidth
                  name="dobDay"
                  label="Day"
                  type="number"
                  id="dobDay"
                  value={dobDay}
                  onChange={(e) => setDobDay(e.target.value)}
                  error={!!dobError}
                  helperText={dobError}
                  sx={{ bgcolor: "white" }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  fullWidth
                  name="dobYear"
                  label="Year"
                  type="number"
                  id="dobYear"
                  value={dobYear}
                  onChange={(e) => setDobYear(e.target.value)}
                  error={!!dobError}
                  helperText={dobError}
                  sx={{ bgcolor: "white" }}
                />
              </Grid>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: "#3c65fa" }}
              onClick={handleRegister}
            >
              Register
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                Already have an account?<Link to="/"> Login now</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Register;
