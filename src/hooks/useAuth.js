// import useContext
import { useContext } from "react";
//import Auth context
import { AuthContext } from "../contexts/AuthProvide";

const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;