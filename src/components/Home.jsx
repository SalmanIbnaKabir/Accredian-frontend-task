import { Container } from "@mui/material";
import getUserFromToken from "../lib/getToken";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UserProfileCard from "./UserProfile";
const Home = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [userData, setUserData] = useState();
  useEffect(() => {
    const user = getUserFromToken();
    if (user) {
      setUserData(user);
      // console.log("User information:", user);
      // You can use the user information as needed in your component
    } else {
      // console.log("User token not found or invalid");
      navigate("/login", { state: { path: pathname }, replace: true });
    }
  }, []);

  return (
    <Container>
      <UserProfileCard userName={userData?.name} userEmail={userData?.email} />
    </Container>
  );
};

export default Home;
