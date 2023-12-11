import { useContext } from "react";
import { AuthContex } from "../Providers/AuthProvider";

const useAuth = () => {
    const all = useContext(AuthContex)
    return all;
};

export default useAuth;