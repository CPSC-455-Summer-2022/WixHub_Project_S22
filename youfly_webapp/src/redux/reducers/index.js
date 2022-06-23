import { combineReducers } from 'redux';
import { cards } from "./cards";
import userReducer from "./users";
import destinationReducer from "./destinations";


const rootReducer = combineReducers({
	cards,
	userReducer,
	destinationReducer

});

export default rootReducer;