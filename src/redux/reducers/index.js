import {combineReducers} from "redux";
import users from "./users";


const rootReducers = () => combineReducers({
    users,
});

export default  rootReducers