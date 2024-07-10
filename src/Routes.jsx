import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { Verify2FA } from "./pages/Verify2FA";
import { LoginPage } from "./pages/Login";
import ProtectedRoute from "./components/Layout/ProtectedRoute";
import { Secret } from "./pages/Secret";
import { AnotherSecret } from "./pages/AnotherSecret";
import PublicRoute from "./components/Layout/PublicRoute";

export default function AppRoutes() {
    return (
        <Routes>
            <Route element={<PublicRoute />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/verify-2fa" element={<Verify2FA />} />
                <Route path="/login" element={<LoginPage />} />
            </Route>

            <Route element={<ProtectedRoute />}>
                <Route
                    path="/first-secret"
                    element={<Secret />}
                />
                <Route
                    path="/another-secret"
                    element={<AnotherSecret />}
                />
            </Route>
        </Routes>
    );
}
