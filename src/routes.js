import React, { useState } from "react";
import { Navigate, Routes as RRDRoutes, Route } from "react-router-dom";
import App from "./App";
import { Protected } from "./components";
import {
    Auth,
    ConfirmPassword,
    ResetPassword,
    SignIn,
    SignUp,
} from "./pages/auth";
import { Page404 } from "./pages";

function Routes() {
    const [isAuthentificated] = useState(false);
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
                <Route path="resetpassword" element={<ResetPassword />} />
                <Route path="confirmpassword" element={<ConfirmPassword />} />
                <Route path="*" element={<Navigate to="signin"></Navigate>} />
            </Route>
            <Route path="*" element={<Page404 />} />
        </RRDRoutes>
    );
}

export default Routes;
