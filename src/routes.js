import React from "react";
import { Routes as RRDRoutes, Route } from "react-router-dom";
import App from "./App";
import { Header } from "./components";

function Routes() {
    return (
        <RRDRoutes>
            <Route path="/" element={<App />} />
        </RRDRoutes>
    );
}

export default Routes;
