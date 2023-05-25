import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import Routes from "./routes";
import GlobalStyles from "./styles/globalStyles";
import theme from "./styles/theme";
import { ThemeProvider } from "@emotion/react";
import store from "./store";
import { Provider as ReduxProvider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <ReduxProvider store={store}>
        <ThemeProvider theme={theme}>
            <HashRouter>
                <GlobalStyles />
                <Routes />
            </HashRouter>
        </ThemeProvider>
    </ReduxProvider>
);
