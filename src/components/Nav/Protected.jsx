import { Link } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth";

function ProtectedNav() {
    const { logout } = useAuth();


    return (
        <>
            <nav className="mb-6">
                <Link className="m-4 text-blue-500" to="/">Home</Link>
                <Link className="m-4 text-blue-500" to="/first-secret">Secret</Link>
                <Link className="m-4 text-blue-500" to="/another-secret">Another Secret</Link>
                <Link className="m-4 text-blue-500" to="/" onClick={logout}>Logout</Link>
            </nav>
            <hr className="mb-8" />
        </>
    )
}

export default ProtectedNav