import {
    SIGN_IN,
    SIGN_IN_ERROR,
    CLEAR_SIGN_IN_ERROR,
    SIGN_OUT,
} from "../actions/types";

const INITIAL_STATE = {
    // username: null,
    name: "Ankur Warikoo",
    role: "investor",
    // jwtToken:
    //     "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjYxNTI1OTU1LCJpYXQiOjE2NjE0Mzk1NTUsImp0aSI6ImMzYzU1YWI5MTcwMDQ3MDhhMjM2ZjI5OWE0ODJjYjQ0IiwidXNlcl9pZCI6Mn0.DYeFr9RHHM3VhqWENjSRgvp1ggZHDtat9umUWVRnK8o",
    twitterId: "@warikoo",
    jwtToken: {},
    signInError: "",
};

export const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                jwtToken: action.payload,
            };
        case SIGN_IN_ERROR:
            return {
                ...state,
                signInError: action.payload.message,
            };
        case CLEAR_SIGN_IN_ERROR:
            return {
                ...state,
                signInError: "",
            };
        case SIGN_OUT:
            return {
                ...state,
                jwtToken: {},
            };
        default:
            return state;
    }
};
