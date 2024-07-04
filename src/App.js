import './App.css';
import PrimarySearchAppBar from './navbar';
import { ThemeProvider } from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/material/styles';
import React, { Component } from "react";
import Dashboard from "./app/Components/dashboard";
import AppRouter from "./router";
// import Spinner from "./app/containers/spinner/Spinner";
import "./App.css"
import theme from "./styles/Theme";

class App extends Component {
  render() {
    return (
      <div className="app">
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <AppRouter>
              {/* <Dashboard /> */}
            </AppRouter>
            
          </ThemeProvider>
        </StyledEngineProvider>
      </div>
    );
  }
}

export default App;