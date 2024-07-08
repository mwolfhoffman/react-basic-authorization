import { Link } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./hooks/useAuth";
import AppRoutes from "./Routes";

function App() {
  return (
    <AuthProvider>
         <nav className="mb-6">
        <Link className="m-4 text-blue-500"  to="/">Home</Link>
        <Link className="m-4 text-blue-500"   to="/login">Login</Link>
        <Link className="m-4 text-blue-500"  to="/secret">Secret</Link>
      </nav>
      <hr className="mb-8"/>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;