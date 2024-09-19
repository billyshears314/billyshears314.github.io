import React, { useRef } from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Button,
  Grid,
  Box,
  createTheme,
  ThemeProvider,
} from "@mui/material";
// import Grid from "@mui/material/Unstable_Grid2";
import Header from "./components/Header.js";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Companies from "./components/Companies";
import AnimatedButton from "./components/AnimatedButton.js";

// Create a custom theme with the "Retro and Playful" palette
const theme = createTheme({
  palette: {
    primary: {
      main: "#D32F2F", // Red
    },
    secondary: {
      main: "#1976D2", // Blue
    },
    accent: {
      main: "#FBC02D", // Yellow
    },
    background: {
      default: "#FFFFFF", // White
    },
    text: {
      primary: "#424242", // Dark Gray
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#D32F2F", // Red
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          backgroundColor: "#D32F2F", // Red
          color: "#FFFFFF", // White text
        },
        outlinedPrimary: {
          borderColor: "#D32F2F", // Red border
          color: "#D32F2F", // Red text
        },
        containedSecondary: {
          backgroundColor: "#1976D2", // Blue
          color: "#FFFFFF", // White text
        },
        outlinedSecondary: {
          borderColor: "#1976D2", // Blue border
          color: "#1976D2", // Blue text
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#424242", // Dark Gray text
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderColor: "#D32F2F", // Red border
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: "#FBC02D", // Yellow for chips
          color: "#424242", // Dark Gray text
        },
      },
    },
  },
});

function App() {
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const companiesRef = useRef(null);

  // Function to scroll to a section
  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop - 64,
      behavior: "smooth",
    });
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar position="sticky">
          <Toolbar>
            <div style={{ marginLeft: "auto" }}>
              <AnimatedButton
                disableRipple
                color="inherit"
                onClick={() => handleScroll(skillsRef)}
              >
                Skills
              </AnimatedButton>
              <AnimatedButton
                disableRipple
                color="inherit"
                onClick={() => handleScroll(companiesRef)}
              >
                Companies
              </AnimatedButton>
              <AnimatedButton
                disableRipple
                color="inherit"
                onClick={() => handleScroll(projectsRef)}
              >
                Projects
              </AnimatedButton>
            </div>
          </Toolbar>
        </AppBar>
        <Container>
          <Header />
          <Box my={5} ref={skillsRef}>
            <Skills />
          </Box>
          <Box my={5} ref={companiesRef}>
            <Companies />
          </Box>
          <Box my={5} ref={projectsRef}>
            <Projects />
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
