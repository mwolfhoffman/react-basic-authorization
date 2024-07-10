import { Link } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./hooks/useAuth";
import AppRoutes from "./Routes";

function App() {
  return (
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
  );
}

export default App;