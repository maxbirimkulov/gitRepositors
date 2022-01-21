import {createStore,applyMiddleware, compose} from "redux";
import rootReducers from "./reducers";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const initialStore = {};
const  composeFunc = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose;
const composeEnchanters = composeFunc(applyMiddleware(thunk));
const store = createStore(rootReducers(),initialStore, composeEnchanters);


export default  store;