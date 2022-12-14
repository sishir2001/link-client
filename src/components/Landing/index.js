import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import _ from "lodash";

const AuthCheck = (props) => {
    const history = useHistory();
    const { auth } = useSelector((state) => state);
    const { jwtToken, role } = auth;

    // run only once when the components are mounted
    useEffect(() => {
        // check whether the user is signed in or not
        if (_.isNull(role) || _.isEmpty(role) || _.isUndefined(role)) {
            // redirect to roles
            history.push("/role");
            // return;
        } else if (!_.isNull(jwtToken)) {
            history.push("/feed");
            console.log(jwtToken);
        } else {
            history.push("/landing");
        }
    }, []);

    // ! need buffering here
    return <div></div>;
};
export default AuthCheck;
