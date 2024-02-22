// RegisterValidation.ts

export const validatePresence = (value: string): string | null => {
  if (!value.trim()) {
    return "This field is required";
  }
  return null;
};

export const validateName = (name: string): string | null => {
  if (!name.trim()) {
    return "Please enter your name";
  }
  return null;
};

export const validateEmail = (email: string): string | null => {
  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    return "Please enter a valid email address";
  }
  return null;
};

export const validatePassword = (password: string): string | null => {
  if (!password || password.length < 8) {
    return "Password must be at least 8 characters long";
  }
  return null;
};

export const validateConfirmPassword = (password: string, confirmPassword: string): string | null => {
  if (password !== confirmPassword) {
    return "Passwords do not match";
  }
  return null;
};

export const validateDateOfBirth = (dobDay: string, dobMonth: string, dobYear: string): string | null => {
  if (!dobDay || !dobMonth || !dobYear) {
    return "Please enter your date of birth";
  }
  return null;
};

export const validateDayInput = (day: string, maxDaysInMonth: number): string | null => {
  if (parseInt(day) > maxDaysInMonth) {
    return `The selected month only has ${maxDaysInMonth} days`;
  }
  return null;
};
