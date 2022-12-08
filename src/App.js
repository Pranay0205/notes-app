import "./App.css";
import Create from "./Create/Create";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { deepPurple, teal } from "@mui/material/colors";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Notes from "./Notes/Notes";
import Layout from "./Layout/Layout";

function createFontFamily(fontFamily) {
  return {
    h1: { fontFamily },
    h2: { fontFamily },
    h3: { fontFamily },
    h4: { fontFamily },
    h5: { fontFamily },
    h6: { fontFamily },
    subtitle1: { fontFamily },
    subtitle2: { fontFamily },
    body1: { fontFamily },
    body2: { fontFamily },
    button: { fontFamily },
    caption: { fontFamily },
    overline: { fontFamily },
  };
}

const theme = createTheme({
  palette: {
    primary: {
      main: teal[500],
    },
    secondary: {
      main: deepPurple[500],
    },
  },
  typography: createFontFamily("Quicksand"),
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Routes>
            <Route element={<Create />} path="/" />
            <Route element={<Notes />} path="/Notes" />
            <Route element={<Create />} path="/Create" />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
