import React from "react";
import { useEffect } from "react";
import globalUseStyles from "../../../GlobalStyle";
const EditProfile = (props) => {
    const globalClasses = globalUseStyles();
    useEffect(() => {
        console.log("edit profile");
    });
    return (
        <div>
            {/* <div className={globalClasses.toolbar}></div> */}
            EditProfile
        </div>
    );
};
export default EditProfile;
