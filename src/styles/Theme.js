import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import "./fonts/Helvetica/Helvetica.ttf";

const themeLight = responsiveFontSizes(
  createTheme({
    // spacing: 4,
    typography: {
      fontFamily: ["Helvetica", "Raleway", "Open Sans"].join(","),
      h1: {
        fontSize: "5rem",
        fontFamily: "Helvetica",
      },
      h2: {
        fontSize: "3.5rem",
        fontFamily: "Helvetica",
      },
      h3: {
        fontSize: "2.5rem",
        fontFamily: "Helvetica",
      },
      h4: {
        fontSize: "1.5rem",
        fontFamily: "Helvetica",
        fontWeight: "bold",
      },
      h5: {
        fontSize: "1.25rem",
        fontFamily: "Helvetica",
      },
      h6: {
        fontSize: "1.10rem",
        fontFamily: "Helvetica",
      },
      button: {
        fontFamily: "Helvetica",
        textTransform: "none",
      }
    },
    palette: {
      mode: "light",
      background: {
        paper: "#fff",
        sideMenu: "#fff",
        disabled: "#e0e0e0",
        default: "#eff1f4"
      },
      common: {
        black: "#000",
        white: "#fff"
      },
      primary: {
        main: "#007bff"
      },
      secondary: {
        main: "#6753c0"
      },
      error: {
        main: "#d72a2a"
      },
      info: {
        main: "#6b7d6a"
      },
      warning: {
        main: "#fc7b09"
      },
      success: {
        main: "#09fe00"
      },
      header: {
        main: "#1d237c",
        mainGradient: "linear-gradient(to right, #6753c0, #0e1967)",
      },
      footer: {
        main: "#1d237c",
        mainGradient: "linear-gradient(to right, #6753c0, #0e1967)",
      },
      text: {
        primary: "#000000",
        secondary: "#616161",
        disabled: "#9e9e9e"
      },
    },
    mixins: {
      toolbar: {
        minHeight: "3.75rem"
      }
    },
  })
);

const themeDark = responsiveFontSizes(
  createTheme({
    // spacing: 4,
    typography: {
      fontFamily: ["Helvetica", "Raleway", "Open Sans"].join(","),
      h1: {
        fontSize: "5rem",
        fontFamily: "Helvetica",
      },
      h2: {
        fontSize: "3.5rem",
        fontFamily: "Helvetica",
      },
      h3: {
        fontSize: "2.5rem",
        fontFamily: "Helvetica",
      },
      h4: {
        fontSize: "1.5rem",
        fontFamily: "Helvetica",
        fontWeight: "bold",
      },
      h5: {
        fontSize: "1.25rem",
        fontFamily: "Helvetica",
      },
      h6: {
        fontSize: "1.10rem",
        fontFamily: "Helvetica",
      },
      button: {
        fontFamily: "Helvetica",
        textTransform: "none",
      }
    },
    palette: {
      mode: "dark",
      background: {
        paper: "#262727",
        sideMenu: "#101111",
        disabled: "#e0e0e0",
        default: "#171819"
      },
      common: {
        black: "#000",
        white: "#fff"
      },
      primary: {
        main: "#fff"
      },
      secondary: {
        main: "#fff"
      },
      error: {
        main: "#d72a2a"
      },
      info: {
        main: "#6b7d6a"
      },
      warning: {
        main: "#fc7b09"
      },
      success: {
        main: "#09fe00"
      },
      header: {
        main: "#1d237c",
        mainGradient: "linear-gradient(to right, #383838, #101010)",
      },
      footer: {
        main: "#232323",
        mainGradient: "linear-gradient(to right, #383838, #101010)",
      },
      text: {
        primary: "#fff",
        secondary: "#9e9e9e",
        disabled: "#616161"
      },
    },
    mixins: {
      toolbar: {
        minHeight: "3.75rem"
      }
    },
  })
);
// const mode = window._env_.REACT_APP_MODE || process.env.REACT_APP_MODE;

// let theme;
// if (mode && mode === CONSTANTS.MODE_CENTRAL) {
//   theme = themeDark;
// } else if (mode && mode === CONSTANTS.MODE_ENTITY) {
//   theme = themeLight;
// } else {
//   // For now, if mode is not set correctly
//   // fallback to light theme i.e. ENTITY
//   theme = themeLight
// }

// export default theme;
export default themeLight;
