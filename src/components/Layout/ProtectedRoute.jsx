import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useEffect } from "react";
import { useOutlet } from "react-router-dom";
import ProtectedNav from "../Nav/Protected";

export const ProtectedRoute = () => {
  const { user, is2FAVerified, protectedPagesOnly } = useAuth();

  const navigate = useNavigate()
  const outlet = useOutlet()

  useEffect(() => {
    if (!user || !protectedPagesOnly) {
      navigate("/login")
    }
  }, [user])

  if (user) {
    return (<>
      <ProtectedNav />
      {outlet}
    </>);
  }

};

export default ProtectedRoute;