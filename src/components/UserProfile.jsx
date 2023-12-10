import PropTypes from "prop-types";
import { Card, CardContent, Typography } from "@mui/material";

const UserProfileCard = ({ userName, userEmail }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          User Profile
        </Typography>
        <Typography color="text.secondary">
          <strong>Name:</strong> {userName}
        </Typography>
        <Typography color="text.secondary">
          <strong>Email:</strong> {userEmail}
        </Typography>
      </CardContent>
    </Card>
  );
};

UserProfileCard.propTypes = {
  userName: PropTypes.string.isRequired,
  userEmail: PropTypes.string.isRequired,
};

export default UserProfileCard;
