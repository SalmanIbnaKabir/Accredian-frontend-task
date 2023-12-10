import { jwtDecode } from "jwt-decode";

const getUserFromToken = () => {
  const token = localStorage.getItem("userToken");

  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      return decodedToken;
    } catch (error) {
      console.error("Error decoding token:", error.message);
      return null;
    }
  }

  return null;
};

export default getUserFromToken;
