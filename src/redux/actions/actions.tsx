// Action Types
export const ADD_ITEM = 'ADD_ITEM';

// Action Creators
export const addItem = (item: string) => ({
    type: ADD_ITEM,
    payload: item,
});
