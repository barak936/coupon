import { userCred } from "../model/userCred";
import { userData } from "../model/userData";

//app state
export class AuthState{
    public email:string="";
    public jwt:string="";
    public clientID:number=0;
    public isLogged:boolean=false;
}

//action type
export enum AuthActionType{
    UserLogin = "UserLogin",
    UserLogout = "UserLogout",
    JwtUpdate = "JwtUpdate",  //jwt, info changed
}


//Action 
export interface AuthAction{
    type:AuthActionType;
    payload?:any;
}


//functions for diffrent actions
function loginAction(cred:userCred):AuthAction{
    return {type: AuthActionType.UserLogin , payload:cred};
}

function logoutAction():AuthAction{
    return {type: AuthActionType.UserLogout, payload: null}
}

function userUpdateAction(jwt:string):AuthAction{
    return {type: AuthActionType.JwtUpdate, payload: jwt}
}

//reducer
export function AuthReducer(currentState: AuthState = new AuthState, action: AuthAction):AuthState{
    //get a copy of current state
    const newState = {...currentState};

    switch (action.type){
        case AuthActionType.UserLogin:
            //do somthing
            
            break;

        case AuthActionType.UserLogout:
            newState.isLogged=false;
            newState.jwt="";
            break;

        case AuthActionType.JwtUpdate:
            //do something (axios interceptors....)
            newState.jwt=action.payload;
            console.log("redux have a new JWT token");
            newState.isLogged=true;
            break;
    }

    return newState;
}