// validation.ts

export const validatePresence = (value: string): string | null => {
  if (!value.trim()) {
    return "This field is required";
  }
  return null;
};

export const validateEmail = (email: string): string | null => {
  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    return "Please enter a valid email address";
  }
  return null;
};

