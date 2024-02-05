import { ADD_ITEM } from '../actions/actions';

// Define the type for the state managed by this reducer
export interface ItemsState {
    items: string[]; // Adjust the type according to your actual data structure
    authToken: string;
}

const initialState = {
    items: [],
    authToken: '',
};



function itemsReducer(state = initialState, action: { type: string; payload: string; }) {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                items: [...state.items, action.payload],
            };
        default:
            return state;
    }
}

export default itemsReducer;
