import { useOutlet } from "react-router-dom";

export const PublicRoute = () => {
    const outlet = useOutlet()
    // TODO: public nav here
    return(<>{outlet}</>);

};

export default PublicRoute;