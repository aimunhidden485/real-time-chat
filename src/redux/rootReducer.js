import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import app from "./slices/app";

const rootPersistConfig = {
	key: "root",
	storage,
	keyPrefix: "redux-",
};
const rootReducer = combineReducers({
	app
});

export { rootPersistConfig, rootReducer };
