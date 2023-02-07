import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import { useSelector as useAppSelector, useDispatch as useAppDispatch } from "react-redux";
import { rootPersistConfig, rootReducer } from "./rootReducer";

 const store = configureStore({
	reducer: persistReducer(rootPersistConfig, rootReducer),
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
			immutableCheck: false,
		}),
});

const persistor = persistStore(store); // Created a persistor for the Redux store

// Destructured the dispatch property from the Redux store
const { dispatch } = store; 

// Created custom hooks for accessing the state values and dispatching actions to the Redux store
const useSelector=useAppSelector;
const useDispatch=()=>useAppDispatch()

export {store, persistor, dispatch, useSelector, useDispatch}
