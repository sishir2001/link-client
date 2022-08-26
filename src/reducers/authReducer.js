import {
    SIGN_IN,
    SIGN_IN_ERROR,
    CLEAR_SIGN_IN_ERROR,
    SIGN_OUT,
} from "../actions/types";

const INITIAL_STATE = {
    role: "",
    jwtToken: {},
    signInError: "",
};

export const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_IN:
            console.log(action.payload.jwtToken);
            console.log(action.payload.role);
            return {
                ...state,
                jwtToken: { ...action.payload.jwtToken },
                role: action.payload.role,
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
                role: "",
            };
        default:
            return state;
    }
};
