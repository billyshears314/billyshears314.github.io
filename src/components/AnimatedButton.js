import { Button } from "@mui/material";
import { styled } from "@mui/system";

const AnimatedButton = styled(Button)(({ theme }) => ({
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    width: "0%",
    height: "2px",
    backgroundColor: theme.palette.accent.main,
    transform: "translateX(50%) scaleX(0)", // Scale from the center
    transition: "transform 0.3s ease, width 0.3s ease",
    transformOrigin: "center", // Centered origin
    opacity: 0,
  },
  "&:hover::after": {
    width: "100%", // Expand to full width
    transform: "translateX(0) scaleX(1)", // Expand and reset transform
    opacity: 1,
  },
}));

export default AnimatedButton;
