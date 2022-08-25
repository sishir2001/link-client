const INITIAL_STATE = {
    username: null,
    isLoggedIn: true,
    name: "Ankur Warikoo",
    role: "investor",
    jwtToken:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjYxNTAyMzU5LCJpYXQiOjE2NjE0MTU5NTksImp0aSI6Ijk1YjYzOTdiNmM0ZDQ5ZTlhOTJmZGE0OGYwOGU2OGZmIiwidXNlcl9pZCI6Mn0.RcvGmXYzYGwIXnhqBZSr-hXYgHlPRZ5JYmMJMCmKQsA",
    twitterId: "@warikoo",
};

export const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
