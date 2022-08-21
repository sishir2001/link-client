const INITIAL_STATE = {
    username: null,
    isLoggedIn: true,
    name: "Ankur Warikoo",
    role: "Investor",
    twitterId: "@warikoo",
};

export const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
