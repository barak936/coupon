import { combineReducers, createStore } from "redux";
import { AuthReducer, AuthState } from "./AuthRedux";

//single reducer - bad bad bad example !!!!!!!!
//const store = createStore(AuthReducer);
//store.getState().jwt;


//multiplate reducers
//we will put here all our reducers :)
const reducers = combineReducers({authState:AuthReducer}); 
//for getting data from store in multi reducers type
const store = createStore(reducers);
//store.getState().authState.jwt;


export default store;