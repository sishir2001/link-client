import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const AuthCheck = (props) => {
    const history = useHistory();
    const { auth } = useSelector((state) => state);
    const { isLoggedIn } = auth;

    // run only once when the components are mounted
    useEffect(() => {
        // check whether the user is signed in or not
        if (isLoggedIn) {
            history.push("/feed");
        } else {
            history.push("/landing");
        }
    }, []);

    // ! need buffering here
    return <div></div>;
};
export default AuthCheck;
