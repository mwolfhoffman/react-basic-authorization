import { useAuth } from "../hooks/useAuth";

export const Secret = () => {
  const { logout } = useAuth();

  return (
    <div>
      <h1>This is a Secret page</h1>
    </div>
  );
};