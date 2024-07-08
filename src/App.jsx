import { Link } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./hooks/useAuth";
import AppRoutes from "./Routes";

function App() {
  return (
    <AuthProvider>
         <nav>
         <Link to="/home">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/secret">Secret</Link>
      </nav>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;