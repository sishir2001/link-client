const INITIAL_STATE = {
    username: null,
    isLoggedIn: false,
    name: "Ankur Warikoo",
    role: "investor",
    twitterId: "@warikoo",
};

export const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
