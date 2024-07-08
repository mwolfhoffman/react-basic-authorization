import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { Verify2FA } from "./pages/Verify2FA";
import { LoginPage } from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { Secret } from "./pages/Secret";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/verify-2fa" element={<Verify2FA />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
                path="/secret"
                element={
                    <ProtectedRoute>
                        <Secret />
                    </ProtectedRoute>
                }
            />
        </Routes>
    );
}
