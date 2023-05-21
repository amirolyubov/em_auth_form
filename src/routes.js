import React, { useState } from "react";
import { Routes as RRDRoutes, Route } from "react-router-dom";
import App from "./App";
import { Auth } from "./pages";
import { Protected } from "./components";

function Routes() {
    const [isAuthentificated, setAuthentificated] = useState(false);
    return (
        <RRDRoutes>
            <Route
                path="/"
                element={
                    <Protected isAuthentificated={isAuthentificated}>
                        <App />
                    </Protected>
                }
            />
            <Route path="/auth" element={<Auth />} />
        </RRDRoutes>
    );
}

export default Routes;
