import { useState } from "react";
import { TextField, Button, Container, Grid, Typography } from "@mui/material";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/login";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.confirmPassword !== formData.password) {
      setError(true);
    } else {
      setError(false);

      try {
        const response = await fetch(
          "https://accredian-backend-nine.vercel.app/users/signup",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        const responseData = await response.json();

        if (response.ok) {
          navigate(from, { replace: true });
          toast.success(responseData.message);
        } else {
          toast.error(responseData.message);
        }
      } catch (error) {
        console.error("Error during sign up:", error.message);
      }
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h4" align="center" gutterBottom>
              Sign Up
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="UserName"
              variant="outlined"
              fullWidth
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              type="email"
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              required
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Confirm Password"
              variant="outlined"
              fullWidth
              required
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            {error && (
              <Typography
                variant="body2"
                color="error"
                align="center"
                gutterBottom
              >
                Passwords do not match
              </Typography>
            )}
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Login;
