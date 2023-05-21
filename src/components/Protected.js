import React from "react";
import { Navigate } from "react-router-dom";

function Protected({ isAuthentificated, children }) {
    if (!isAuthentificated) {
        return <Navigate to="/auth" replace />;
    }
    return children;
}

export default Protected;
