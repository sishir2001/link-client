import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { signOut } from "../../actions/auth";
import _ from "lodash";

const SignOut = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { auth } = useSelector((state) => state);
    const { jwtToken } = auth;
    useEffect(() => {
        localStorage.removeItem("jwtToken");
        localStorage.removeItem("ideaContentId");
        localStorage.removeItem("role");
        console.log(auth.jwtToken);
        if (!_.isEmpty(jwtToken)) {
            dispatch(signOut(jwtToken["access"]));
            console.log(_.isEmpty(jwtToken));
            console.log(auth.jwtToken["access"]);
        }
        history.push("/");
    });
    return <div></div>;
};
export default SignOut;
