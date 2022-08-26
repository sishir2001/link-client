import React from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const SignOut = (props) => {
    const history = useHistory();
    useEffect(() => {
        localStorage.removeItem("jwtToken");
        history.push("/");
    });
    return <div></div>;
};
export default SignOut;
