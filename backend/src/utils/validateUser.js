// validateUser.js for validating user input during registration I don't need to be changes here
export const validateRegisterInput = ({ name, email, password }) => {
  if (!name) return "El nombre es obligatorio";
  if (!email) return "El email es obligatorio";
  if (!password) return "La contraseña es obligatoria";
  return null;
};
