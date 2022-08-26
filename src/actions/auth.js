import _ from "lodash";
import { API } from "../global";
import { CLEAR_SIGN_IN_ERROR, SIGN_IN, SIGN_IN_ERROR, SIGN_OUT } from "./types";

export const signedIn = ({ username, password, history }) => {
    return async (dispatch, getState) => {
        // ! check with authentication endpoint
        try {
            console.log("Inside signedIn action creator");
            const formdata = new FormData();
            formdata.append("username", username);
            formdata.append("password", password);
            const res = await fetch(`${API}/auth/login`, {
                method: "POST",
                body: formdata,
            });

            const resJson = await res.json();
            console.log(resJson);
            const { jwtToken } = resJson;
            if (_.isUndefined(jwtToken)) {
                // ? dispatch error
                console.log(resJson.message);
                dispatch({
                    type: SIGN_IN_ERROR,
                    payload: {
                        message: resJson.message,
                    },
                });
            } else {
                console.log(jwtToken);
                // TODO : store it in localstorage
                localStorage.setItem("jwtToken", jwtToken);
                history.push("/");
                dispatch({
                    type: SIGN_IN,
                    payload: {
                        ...jwtToken,
                    },
                });
            }
        } catch (e) {
            console.log(`Error occured while logging in ${e}`);
            dispatch({
                type: SIGN_IN_ERROR,
                payload: {
                    message: e,
                },
            });
        }
    };
};

export const clearErrorMessage = () => {
    return {
        type: CLEAR_SIGN_IN_ERROR,
    };
    // dispatch({});
};

export const signOut = () => {
    return {
        type: SIGN_OUT,
    };
    // dispatch({});
};
