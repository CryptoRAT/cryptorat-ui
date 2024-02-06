// Action Types
export const UPDATE_AUTH = 'UPDATE_AUTH';

// Action Creators
export const updateAuth = (token: string) => ({
    type: UPDATE_AUTH,
    payload: token,
});
