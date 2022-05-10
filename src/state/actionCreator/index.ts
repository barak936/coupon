import axios from "axios";
import { ActionType } from "../actionType";
import { Action } from "../actions";
import { Dispatch } from "react";

export const tryAdminLogin = (userName: String, userPass: string) => {
    return async (dispatch: Dispatch<Action>) => {
        const url = "http://localhost:8080/administrator/Login";
        try {
            const { headers } = await axios.
            post(url, {
                clientType: 'admin',
                userName: userName,
                userPass: userPass,
            });

            //localStorage.setItem("token", headers.authorizations);
            dispatch({
                type: ActionType.ADMIN_LOGIN,
            });
        } catch (err:any) {
            //localStorage.removeItem("token");
            dispatch ({
                type: ActionType.LOGOUT,
                payload: err?.message,
            });
        }
    };
};

export const tryCustomerLogin = (userName: String, userPass: string) => {
    return async (dispatch: Dispatch<Action>) => {
        const url = "http://localhost:8080/customer/Login";
        try {
            const { headers } = await axios.
            post(url, {
                clientType: 'customer',
                userName: userName,
                userPass: userPass,
            });
            //localStorage.setItem("token", headers.authorizations);
            dispatch({
                type: ActionType.CUSTOMER_LOGIN,
                payload: {
                    userName,
                },
            });
        } catch (err:any) {
            //localStorage.removeItem("token");
            dispatch ({
                type: ActionType.LOGOUT,
                payload: err?.message,
            });
        }
    };
};

export const tryCompanyLogin = (userName: String, userPass: string) => {
    return async (dispatch: Dispatch<Action>) => {
        const url = "http://localhost:8080/company/Login";
        try {
            const { headers } = await axios.
            post(url, {
                clientType: 'company',
                userName: userName,
                userPass: userPass,
            });
            localStorage.setItem("token", headers.authorizations);
            dispatch({
                type: ActionType.COMPANY_LOGIN,
                payload: {
                    userName,
                },
            });
        } catch (err:any) {
            //localStorage.removeItem("token");
            dispatch ({
                type: ActionType.LOGOUT,
                payload: err?.message,
            });
        }
    };
};

export const tryLogout = (err?: Error) => {
    return async (dispatch: Dispatch<Action>) => {
        //localStorage.removeItem("token");
        dispatch({
            type: ActionType.LOGOUT,
            payload: err?.message,
        });
    }
}