import React from "react";
import globalUseStyles from "../../GlobalStyle";

const IdeaForm = (props) => {
    const globalClasses = globalUseStyles();

    return (
        <div>
            <div className={globalClasses.toolbar}></div>
            <div>Idea From</div>
        </div>
    );
};
export default IdeaForm;
