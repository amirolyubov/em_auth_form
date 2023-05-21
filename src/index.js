import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { Header } from "./components";
import GlobalStyles from "./globalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
        <GlobalStyles />
        <Routes />
    </BrowserRouter>
);
