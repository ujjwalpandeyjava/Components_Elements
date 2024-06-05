import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./withThunk/todoSlice";
import profileSlice from "./withThunk/profileSlice";
import logger from "redux-logger";


/**
 * create your own middleware
 */
const customLoggerMiddleware = store => next => action => {
	// console.log('Dispatching action:', action);
	let result = next(action);
	// console.log('Next state:', store.getState());
	return result;
};

// redux-thunk redux-logger = are middlewares
/**
 *  To add custom middlewares <br/>
 * 	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk, logger, or customizeMiddleware)
 */
const rootReducer = configureStore({
	reducer: {
		todoSlice,
		sliceP: profileSlice
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(customLoggerMiddleware, logger)
})




export { rootReducer };
