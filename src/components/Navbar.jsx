import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Stack,
} from "@mui/material";
import { Link as RouterLink, Outlet, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("userToken");

  return (
    <Stack>
      <AppBar position="static" sx={{ marginBottom: 2, boxShadow: "none" }}>
        <Container>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Accredian
            </Typography>
            <Button color="inherit" component={RouterLink} to="/">
              Home
            </Button>
            {!isLoggedIn && (
              <>
                <Button color="inherit" component={RouterLink} to="/signup">
                  Sign Up
                </Button>
                <Button color="inherit" component={RouterLink} to="/login">
                  Login
                </Button>
              </>
            )}
            {isLoggedIn && (
              <Button
                color="inherit"
                onClick={() => {
                  localStorage.removeItem("userToken");
                  navigate("/");
                }}
              >
                Logout
              </Button>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </Stack>
  );
};

export default Navbar;
