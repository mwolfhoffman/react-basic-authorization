import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useEffect } from "react";
import { useOutlet } from "react-router-dom";
import ProtectedNav from "../Nav/Protected";

export const PrivateRoute = () => {
  const { user, is2FAVerified } = useAuth();

  const navigate = useNavigate()
  const outlet = useOutlet()

  useEffect(() => {
    if (!user || !is2FAVerified) {
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

export default PrivateRoute;