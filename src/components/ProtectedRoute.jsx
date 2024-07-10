import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useEffect } from "react";
import { useOutlet } from "react-router-dom";

export const ProtectedRoute = () => {
  const { user, is2FAVerified } = useAuth();

  const navigate = useNavigate()
  const outlet = useOutlet()

  useEffect(() => {
    if (!user) {
      navigate("/login")
    } else if (!is2FAVerified) {
      navigate("/verify-2fa")
    }
  }, [user])

  if(user){
    return (<>{outlet}</>);
  }

};

export default ProtectedRoute;