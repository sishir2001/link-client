const INITIAL_STATE = {
    username: null,
    isLoggedIn: true,
    name: "Ankur Warikoo",
    role: "investor",
    jwtToken:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjYxNTI1OTU1LCJpYXQiOjE2NjE0Mzk1NTUsImp0aSI6ImMzYzU1YWI5MTcwMDQ3MDhhMjM2ZjI5OWE0ODJjYjQ0IiwidXNlcl9pZCI6Mn0.DYeFr9RHHM3VhqWENjSRgvp1ggZHDtat9umUWVRnK8o",
    twitterId: "@warikoo",
};

export const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
