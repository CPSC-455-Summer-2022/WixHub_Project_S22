import { combineReducers } from 'redux';
import { cards } from "./cards";
import userReducer from "./users";
import destinationReducer from "./destinations";
import questionReducer from "./questions";


const rootReducer = combineReducers({
	cards,
	userReducer,
	destinationReducer,
	questionReducer

});

export default rootReducer;