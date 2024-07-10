import { useOutlet } from "react-router-dom";
import PublicNav from "../Nav/Public";

export const PublicRoute = () => {
    const outlet = useOutlet()
    return (<>
        <PublicNav />
        {outlet}
    </>);

};

export default PublicRoute;