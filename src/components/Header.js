import { Avatar, Typography, Box } from "@mui/material";
import styles from "./Header.module.css";

function Header() {
  return (
    <div>
      <Box textAlign="center" my={4}>
        <Avatar
          alt="Profile Picture"
          src="/img/profile-pic.png"
          sx={{ width: 160, height: 160, margin: "auto" }}
        />
        <Typography variant="h4">Alex Filipek</Typography>
        <Typography variant="body1">
          A fullstack developer who enjoys architecting elegant solutions to
          complex problems
        </Typography>
        <div className={styles.contactInfoContainer}>
          <div>
            <img alt="LinkedIn Icon" src="/img/linkedin-icon.svg" width="24" />
            <a href="https://github.com/billyshears314"></a>
          </div>
          <div>
            <img alt="Github Icon" src="/img/github-icon.svg" width="24" />
          </div>
          <div>
            <img alt="Email Icon" src="/img/email-icon.svg" width="24" />
          </div>
        </div>
      </Box>
    </div>
  );
}

export default Header;
