import { ActionType } from "../actionType";

interface AdminLoginAction {
    type: ActionType.ADMIN_LOGIN;
}

interface CustomerLoginAction {
    type: ActionType.CUSTOMER_LOGIN;
    payload: {
    userName: String;
    };
}

interface CompanyLoginAction {
    type: ActionType.COMPANY_LOGIN;
    payload: {
    userName: String;
    };
}

interface LogoutAction {
    type: ActionType.LOGOUT;
    payload?: String;
}


export type Action = 
| AdminLoginAction
| CustomerLoginAction
| CompanyLoginAction
| LogoutAction;
