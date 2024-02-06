import { UPDATE_AUTH } from '../actions/actions';

// Define the type for the state managed by this reducer
export interface AuthState {
    authToken: string;
}

const initialState = {
    authToken: '',
};



function authReducer(state = initialState, action: { type: string; payload: string; }) {
    switch (action.type) {
        case UPDATE_AUTH:
            return {
                ...state,
            };
        default:
            return state;
    }
}

export default authReducer;
