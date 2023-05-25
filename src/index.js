import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import Routes from "./routes";
import GlobalStyles from "./styles/globalStyles";
import theme from "./styles/theme";
import { ThemeProvider } from "@emotion/react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <ThemeProvider theme={theme}>
        <HashRouter>
            <GlobalStyles />
            <Routes />
        </HashRouter>
    </ThemeProvider>
);
