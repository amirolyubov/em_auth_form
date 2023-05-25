import React from "react";
import { Navigate, Routes as RRDRoutes, Route } from "react-router-dom";
import {
    Auth,
    ConfirmPassword,
    ResetPassword,
    SignIn,
    SignUp,
} from "./pages/auth";
import { App, Page404 } from "./pages";
import { useSelector } from "react-redux";

function Protected({ isAuthentificated, children }) {
    if (!isAuthentificated) {
        return <Navigate to="/auth" replace />;
    }
    return children;
}

function OnlyUnauthorized({ isAuthentificated, children }) {
    if (!isAuthentificated) {
        return children;
    }
    return <Navigate to="/" replace />;
}

function Routes() {
    const isAuthentificated = useSelector(
        (state) => state.auth.isAuthentificated
    );

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
            <Route
                path="/auth"
                element={
                    <OnlyUnauthorized isAuthentificated={isAuthentificated}>
                        <Auth />
                    </OnlyUnauthorized>
                }
            >
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
