import { act } from "react-dom/test-utils";
import { Action } from "../actions";
import { ActionType } from "../actionType";

interface UserState {
    userName: String;
    clientType: String;
}

const initialState = {
    userName: 'guest',
    clientType: 'guest',
};

const reducer = (state: UserState = initialState, action: Action): UserState => {
    switch (action.type) {
        case ActionType.ADMIN_LOGIN:
            return {userName: 'admin@admin.com', clientType: 'admin'};
        case ActionType.COMPANY_LOGIN:
                return {userName: action.payload.userName, clientType: 'company'};
        case ActionType.CUSTOMER_LOGIN:
            return {userName: action.payload.userName, clientType: 'customer'};
        case ActionType.LOGOUT:
            return {userName: 'guest', clientType: 'guest'};
        
        default:
        return state;
    }
};

export default reducer;
