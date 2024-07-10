import { useAuth } from "../hooks/useAuth";

export const AnotherSecret = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <h1>This is a Another Secret page</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};