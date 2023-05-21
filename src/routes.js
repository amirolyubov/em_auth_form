import React, { useState } from "react";
import { Navigate, Routes as RRDRoutes, Route } from "react-router-dom";
import App from "./App";
import { Protected } from "./components";
import {
    Auth,
    ChangePassword,
    ForgotPassword,
    SignIn,
    SignUp,
} from "./pages/auth";

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
            <Route path="/auth" element={<Auth />}>
                <Route index element={<Navigate to="signin"></Navigate>} />
                <Route path="signin" element={<SignIn />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="changepassword" element={<ChangePassword />} />
                <Route path="forgotpassword" element={<ForgotPassword />} />
            </Route>
        </RRDRoutes>
    );
}

export default Routes;
